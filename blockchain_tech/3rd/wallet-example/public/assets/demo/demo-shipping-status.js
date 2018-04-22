// Sparklines
//-----------------
$(".linecharts").sparkline();





    historicalBarChart = [
        {
            key: "Cumulative Return",
            values: [
                {
                    "label" : "A" ,
                    "value" : 29.765957771107
                } ,
                {
                    "label" : "B" ,
                    "value" : 0
                } ,
                {
                    "label" : "C" ,
                    "value" : 32.807804682612
                } ,
                {
                    "label" : "D" ,
                    "value" : 196.45946739256
                } ,
                {
                    "label" : "E" ,
                    "value" : 0.19434030906893
                } ,
                {
                    "label" : "F" ,
                    "value" : 98.079782601442
                } ,
                {
                    "label" : "G" ,
                    "value" : 13.925743130903
                } ,
                {
                    "label" : "H" ,
                    "value" : 5.1387322875705
                }
            ]
        }
    ];

    nv.addGraph(function() {
        var chart = nv.models.discreteBarChart()
            .x(function(d) { return d.label })
            .y(function(d) { return d.value })
            .staggerLabels(true)
            //.staggerLabels(historicalBarChart[0].values.length > 8)
            .tooltips(false)
            .showValues(true)
            ;

        d3.select('#chart1 svg')
            .datum(historicalBarChart)
            .call(chart);

        nv.utils.windowResize(chart.update);
        return chart;
    });


//  pie chart

/* Inspired by Lee Byron's test data generator. */
function stream_layers(n, m, o) {
  if (arguments.length < 3) o = 0;
  function bump(a) {
    var x = 1 / (.1 + Math.random()),
        y = 2 * Math.random() - .5,
        z = 10 / (.1 + Math.random());
    for (var i = 0; i < m; i++) {
      var w = (i / m - y) * z;
      a[i] += x * Math.exp(-w * w);
    }
  }
  return d3.range(n).map(function() {
      var a = [], i;
      for (i = 0; i < m; i++) a[i] = o + o * Math.random();
      for (i = 0; i < 5; i++) bump(a);
      return a.map(stream_index);
    });
}

/* Another layer generator using gamma distributions. */
function stream_waves(n, m) {
  return d3.range(n).map(function(i) {
    return d3.range(m).map(function(j) {
        var x = 20 * j / m - i / 3;
        return 2 * x * Math.exp(-.5 * x);
      }).map(stream_index);
    });
}

function stream_index(d, i) {
  return {x: i, y: Math.max(0, d)};
}




    var testdata = [
        {key: "Appliances(189)", y: 5},
        {key: "Automotive(136)", y: 2},
        {key: "Computers(401)", y: 9},
        {key: "Electronics(515)", y: 7},
        {key: "Five", y: 4},
        {key: "Six", y: 3},
        {key: "Seven", y: 0.5}
    ];
    var testdata2 = [
        {key: "Appliances(189)", y: 5},
        {key: "Automotive(136)", y: 2},
        {key: "Computers(401)", y: 9},
        {key: "Electronics(515)", y: 7}
    ];




    nv.addGraph(function() {
        var chart = nv.models.pieChart()
            .x(function(d) { return d.key })
            .y(function(d) { return d.y });

        d3.select("#test1")
            .datum(testdata2)
            .transition().duration(1200)
            .call(chart);

        // update chart data values randomly
        setInterval(function() {
            testdata2[0].y = Math.floor(Math.random() * 10);
            testdata2[1].y = Math.floor(Math.random() * 10);
            chart.update();
        }, 4000);

        return chart;
    });

    nv.addGraph(function() {
        var chart = nv.models.pieChart()
            .x(function(d) { return d.key })
            .y(function(d) { return d.y })
            //.labelThreshold(.08)
            //.showLabels(false)
            .color(d3.scale.category20().range().slice(8))
            .tooltipContent(function(key, y, e, graph) {
                return '<h3 style="padding: 5px; background-color: '
                        + e.color + '"><strong>Yo, the value is</strong></h3>'
                        + '<p style="padding:5px;">' +  y + '</p>';
            })
            .width(width)
            .height(height);

        // make it a half circle
        chart.pie
            .startAngle(function(d) { return d.startAngle/2 -Math.PI/2 })
            .endAngle(function(d) { return d.endAngle/2 -Math.PI/2 });

        // MAKES LABELS OUTSIDE OF DONUT
        //chart.pie.donutLabelsOutside(true).donut(true);

        d3.select("#test2")
            .datum(testdata)
            .transition().duration(1200)
            .attr('width', width)
            .attr('height', height)
            .call(chart);

        // disable and enable some of the sections
        var is_disabled = false;
        setInterval(function() {
            chart.dispatch.changeState({disabled: {2: !is_disabled, 4: !is_disabled}});
            is_disabled = !is_disabled;
        }, 3000);

        return chart;
    });