/* ====== index
##. opporOpportunity Breakdown - QTD
##. Top Products in Revenue
##. Booking QTD bar chart
##. Regional Sales Status map
================ */

/*Opportunity Breakdown - QTD*/

    var testdata2 = [
        {key: "North America($657K)", y: 5},
        {key: "Europe ($243K)", y: 2},
        {key: "Asia ($178K)", y: 9},
        {key: "Others ($123K)", y: 7}
    ];

    nv.addGraph(function() {
        var chart = nv.models.pieChart()
            .x(function(d) { return d.key })
            .y(function(d) { return d.y })

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

/*##. Top Products in Revenue*/
    var testdata3 = [
        {key: "Product 1 ($325K)", y: 5},
        {key: "Product 2 ($187K)", y: 2},
        {key: "Product 3 ($165K)", y: 9},
        {key: "Product 4 ($125K)", y: 7},
        {key: "Product 5 ($106K)", y: 7}
    ];

    nv.addGraph(function() {
        var chart = nv.models.pieChart()
            .x(function(d) { return d.key })
            .y(function(d) { return d.y });

        d3.select("#test2")
            .datum(testdata3)
            .transition().duration(1200)
            .call(chart);

        // update chart data values randomly
        setInterval(function() {
            testdata3[0].y = Math.floor(Math.random() * 10);
            testdata3[1].y = Math.floor(Math.random() * 10);
            chart.update();
        }, 4000);

        return chart;
    });



/*Booking QTD bar chart*/

nv.addGraph(function() {
    var chart = nv.models.multiBarChart()
      .transitionDuration(350)
      .reduceXTicks(true)   //If 'false', every single x-axis tick label will be rendered.
      .rotateLabels(0)      //Angle to rotate x-axis labels.
      .showControls(false)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
      .groupSpacing(0.5)    //Distance between each group of bars.
    ;

    chart.xAxis
        .tickFormat(d3.format(',f'));

    chart.yAxis
    	.axisLabel('Bookings $k')
        .tickFormat(d3.format(',.1f'));

    d3.select('#chart1 svg')
        .datum(exampleData())
        .call(chart);

    nv.utils.windowResize(chart.update);

    return chart;
});

//Generate some nice data.
function exampleData() {
  return stream_layers(2,10+Math.random()*100,12).map(function(data, i) {
    return {
      key: 'CY Q' + i+2,
      values: data
    };
  });
}



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





/*Regional Sales Status map*/
$(function(){
    //USA Map

    $mapusa = $(".map-usa");

    $mapusa.mapael({
        map : {
            name : "usa_states",
            zoom: {
                enabled: true,
                maxLevel : 10
            }
        },
        plots: {
            'ny' : {
                latitude: 40.717079,
                longitude: -74.00116,
                tooltip: {content : "New York"}
            },
            'an' : {
                latitude: 61.2108398, 
                longitude: -149.9019557,
                tooltip: {content : "Anchorage"}
            },
            'sf' : {
                latitude: 37.792032,
                longitude: -122.394613,
                tooltip: {content : "San Francisco"}
            },
            'pa' : {
                latitude: 19.493204,
                longitude: -154.8199569,
                tooltip: {content : "Pahoa"}
            }
        }
    });

    // Zoom on mousewheel with mousewheel jQuery plugin
    $mapusa.on("mousewheel", function(e) {
        if (e.deltaY > 0) {
            $mapusa.trigger("zoom", $mapusa.data("zoomLevel") + 1);
            console.log("zoom");
        } else {
            $mapusa.trigger("zoom", $mapusa.data("zoomLevel") - 1);
        }
            
        return false;
    });

});