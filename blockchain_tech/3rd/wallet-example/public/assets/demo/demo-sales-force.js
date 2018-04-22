// Bullet Chart
// --------------

nv.addGraph(function() {  
  var chart = nv.models.bulletChart();

  d3.select('#chart svg')
      .datum(exampleData())
      .transition().duration(1000)
      .call(chart);

  return chart;
});


function exampleData() {
  return {
    "title":"Revenue",      //Label the bullet chart
    "subtitle":"US$, in thousands",     //sub-label for bullet chart
    "ranges":[150,225,300],  //Minimum, mean and maximum values.
    "measures":[220],        //Value representing current measurement (the thick blue line in the example)
    "markers":[250]          //Place a marker on the chart (the white triangle marker)
  };
}

// Sparklines
//-----------------
$(".linecharts").sparkline();


// Pie Chart
//-----------------
    var testdata2 = [
        {key: "N. America($1,777,78M)", y: 5},
        {key: "S. America($1,454,55M)", y: 2},
        {key: "Europe($1,858,59M)", y: 9},
        {key: "Asia($2,505,05M)", y: 4},
        {key: "India(%1,535,35M)", y: 3}
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
            });

        // make it a half circle
        chart.pie
            .startAngle(function(d) { return d.startAngle/2 -Math.PI/2 })
            .endAngle(function(d) { return d.endAngle/2 -Math.PI/2 });

        // MAKES LABELS OUTSIDE OF DONUT
        //chart.pie.donutLabelsOutside(true).donut(true);

        d3.select("#test2")
            .datum(testdata)
            .transition().duration(1200)
            .call(chart);

        // disable and enable some of the sections
        var is_disabled = false;
        setInterval(function() {
            chart.dispatch.changeState({disabled: {2: !is_disabled, 4: !is_disabled}});
            is_disabled = !is_disabled;
        }, 3000);

        return chart;
    });


// Sales Per Rep
//-----------------
/*sales per rep*/// Wrapping in nv.addGraph allows for '0 timeout render', stores rendered charts in nv.graphs,
    // and may do more in the future... it's NOT required
    nv.addGraph(function() {
        var chart = nv.models.cumulativeLineChart()
            .useInteractiveGuideline(true)
            .x(function(d) { return d[0] })
            .y(function(d) { return d[1]/100 })
            .color(d3.scale.category10().range())
            .average(function(d) { return d.mean/100; })
            .duration(300)
            .clipVoronoi(false);
        chart.dispatch.on('renderEnd', function() {
            console.log('render complete: cumulative line with guide line');
        });

        chart.xAxis.tickFormat(function(d) {
            return d3.time.format('%m/%d/%y')(new Date(d))
        });

        chart.yAxis.tickFormat(d3.format(',.1%'));

        d3.select('#chart3 svg')
            .datum(cumulativeTestData())
            .call(chart);

        //TODO: Figure out a good way to do this automatically
        nv.utils.windowResize(chart.update);

        chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });
        chart.state.dispatch.on('change', function(state){
            nv.log('state', JSON.stringify(state));
        });

        return chart;
    });