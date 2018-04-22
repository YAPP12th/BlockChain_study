$(function () {
	  /*These lines are all chart setup.  Pick and choose which chart features you want to utilize. */
	nv.addGraph(function() {
	  var chart = nv.models.lineChart()
	                .margin({left: 100})  //Adjust chart margins to give the x-axis some breathing room.
	                .useInteractiveGuideline(true)  //We want nice looking tooltips and a guideline!
	                .transitionDuration(350)  //how fast do you want the lines to transition?
	                .showLegend(true)       //Show the legend, allowing users to turn on/off line series.
	                .showYAxis(true)        //Show the y-axis
	                .showXAxis(true)        //Show the x-axis
	  ;

	  chart.xAxis     //Chart x-axis settings
	      .axisLabel('Time (ms)')
	      .tickFormat(d3.format(',r'));

	  chart.yAxis     //Chart y-axis settings
	      .axisLabel('Voltage (v)')
	      .tickFormat(d3.format('.02f'));

	  /* Done setting the chart up? Time to render it!*/
	  var myData = sinAndCos();   //You need data...

	  d3.select('#line svg')    //Select the <svg> element you want to render the chart in.   
	      .datum(myData)         //Populate the <svg> element with chart data...
	      .call(chart);          //Finally, render the chart!

	  //Update the chart when window resizes.
	  nv.utils.windowResize(function() { chart.update() });
	  return chart;
	});
	/**************************************
	 * Simple test data generator
	 */
	function sinAndCos() {
	  var sin = [],sin2 = [],
	      cos = [];

	  //Data is represented as an array of {x,y} pairs.
	  for (var i = 0; i < 100; i++) {
	    sin.push({x: i, y: Math.sin(i/10)});
	    sin2.push({x: i, y: Math.sin(i/10) *0.25 + 0.5});
	    cos.push({x: i, y: .5 * Math.cos(i/10)});
	  }

	  //Line chart data should be sent as an array of series objects.
	  return [
	    {
	      values: sin,      //values - represents the array of {x,y} data points
	      key: 'Sine Wave', //key  - the name of the series.
	      color: '#ff7f0e'  //color - optional: choose your own line color.
	    },
	    {
	      values: cos,
	      key: 'Cosine Wave',
	      color: '#2ca02c'
	    },
	    {
	      values: sin2,
	      key: 'Another sine wave',
	      color: '#7777ff',
	      area: true      //area - set to true if you want this line to turn into a filled area chart.
	    }
	  ];
	}


	nv.addGraph(function() {
	    var chart = nv.models.multiBarChart()
	      .transitionDuration(350)
	      .reduceXTicks(true)   //If 'false', every single x-axis tick label will be rendered.
	      .rotateLabels(0)      //Angle to rotate x-axis labels.
	      .showControls(true)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
	      .groupSpacing(0.1)    //Distance between each group of bars.
	    ;

	    chart.xAxis
	        .tickFormat(d3.format(',f'));

	    chart.yAxis
	        .tickFormat(d3.format(',.1f'));

	    d3.select('#stackedbar svg')
	        .datum(exampleData())
	        .call(chart);

	    nv.utils.windowResize(chart.update);

	    return chart;
	});

	//Generate some nice data.
	function exampleData() {
	  return stream_layers(3,10+Math.random()*100,.1).map(function(data, i) {
	    return {
	      key: 'Stream #' + i,
	      values: data
	    };
	  });
	}

	







	d3.json('assets/demo/stackedArea.json', function(data) {
	  nv.addGraph(function() {
	    var chart = nv.models.stackedAreaChart()
	                  .margin({right: 100})
	                  .x(function(d) { return d[0] })   //We can modify the data accessor functions...
	                  .y(function(d) { return d[1] })   //...in case your data is formatted differently.
	                  .useInteractiveGuideline(true)    //Tooltips which show all data points. Very nice!
	                  .rightAlignYAxis(true)      //Let's move the y-axis to the right side.
	                  .transitionDuration(500)
	                  .showControls(true)       //Allow user to choose 'Stacked', 'Stream', 'Expanded' mode.
	                  .clipEdge(true);

	    //Format x-axis labels with custom function.
	    chart.xAxis
	        .tickFormat(function(d) { 
	          return d3.time.format('%x')(new Date(d)) 
	    });

	    chart.yAxis
	        .tickFormat(d3.format(',.2f'));

	    d3.select('#stackedarea svg')
	      .datum(data)
	      .call(chart);

	    nv.utils.windowResize(chart.update);

	    return chart;
	  });
	})
});



//For Demo


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
