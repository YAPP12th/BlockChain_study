/* ==== index
##. ER Wait Time
##. Chart
============= */

/* === ER Wait Time === */

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
      key: 'Debt' + i+2,
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

/* === Chart === */
$(function() {

    var sparker = function() {

        // Inline Charts examples

        $(".linecharts").sparkline();
        $(".barcharts").sparkline('html', {type: 'bar'});

        // Composite line charts, the second using values supplied via javascript
        $('#compositeline').sparkline('html', { fillColor: false, changeRangeMin: 0, chartRangeMax: 10 });
        $('#compositeline').sparkline([4,1,5,7,9,9,8,7,6,6,4,7,8,4,3,2,2,5,6,7], {composite: true, fillColor: false, lineColor: 'red', changeRangeMin: 0, chartRangeMax: 10 });


        // Bar + line composite charts
        $('#compositebar').sparkline('html', { type: 'bar', barColor: '#aaf' });
        $('#compositebar').sparkline([4,1,5,7,9,9,8,7,6,6,4,7,8,4,3,2,2,5,6,7], {composite: true, fillColor: false, lineColor: 'red' });


        // Discrete charts
        $('#discrete1').sparkline('html', { type: 'discrete', lineColor: 'blue', xwidth: 18 });
        $('#discrete2').sparkline('html', { type: 'discrete', lineColor: 'blue', thresholdColor: 'red', thresholdValue: 4 });

        $("#pie").sparkline([1,2,3], {type: 'pie'});

        // Large Charts

        $("#bigline").sparkline([5,4,4,7,6,9,5,8,2,6,4,6,7,4,2,1,5,7,2,1,4,2,0,3,6,3], {
            type: 'line',
            width: '100%',
            height: '200px',
            lineColor: Utility.getBrandColor('info'),
            fillColor: 'rgba(0, 0, 0, 0.02)',
            highlightSpotColor: Utility.getBrandColor('info'),
            highlightLineColor: Utility.getBrandColor('info'),
            spotRadius: 4});
        $("#bigline").sparkline([4,3,0,6,6,8,5,9,3,8,7,8,7,6,6,4,5,6,3,3,4,3,3,5,5,6], {
            type: 'line',
            width: '100%',
            height: '200px',
            lineColor: Utility.getBrandColor('primary'),
            fillColor: false,
            highlightSpotColor: Utility.getBrandColor('primary'),
            highlightLineColor: Utility.getBrandColor('primary'),
            composite: true,
            spotRadius: 4});


        $("#bigpie").sparkline([5,3,4,1 ], {type: 'pie', height: '200px'});


        $('#bigstacked').sparkline([5,4,7,6,9,5,8,2,6,4,6,7,6,4,2,1,4,6,2,5,7,2,3,5,3,7,9], { type: 'bar', barColor: '#aaf', height: '200px',width: '100%', barWidth: 10, barSpacing: 5});
        $('#bigstacked').sparkline([4,1,5,7,9,9,8,7,6,6,4,7,8,4,3,2,2,5,6,7,8], { composite: true, fillColor: false, lineColor: 'red', height: '200px', width: '100%' });
    }


    var sparkResize;
 
    $(window).resize(function(e) {
        clearTimeout(sparkResize);
        sparkResize = setTimeout(sparker, 500);
    });
    sparker();


});