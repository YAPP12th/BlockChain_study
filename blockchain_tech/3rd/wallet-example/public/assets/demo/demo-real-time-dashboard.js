/* ==== index
##. ER Wait Time
##. 
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