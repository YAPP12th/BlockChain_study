$(function () {
    try {
        $('.easypiechart#bandwidth').easyPieChart({
            barColor: "rgba(255, 255, 255, 0.6)",
            trackColor: 'rgba(255, 255, 255, 0.2)',
            scaleColor: 'rgba(255, 255, 255, 0.8)',
            scaleLength: 0,
            lineCap: 'square',
            lineWidth: 4,
            size: 80,
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });

        $('.easypiechart#ramusage').easyPieChart({
            barColor: "rgba(255, 255, 255, 0.6)",
            trackColor: 'rgba(255, 255, 255, 0.2)',
            scaleColor: 'rgba(255, 255, 255, 0.8)',
            scaleLength: 0,
            lineCap: 'square',
            lineWidth: 4,
            size: 80,
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });

        $('.easypiechart#serverload').easyPieChart({
            barColor: "rgba(255, 255, 255, 0.6)",
            trackColor: 'rgba(255, 255, 255, 0.2)',
            scaleColor: 'rgba(255, 255, 255, 0.8)',
            scaleLength: 0,
            lineCap: 'square',
            lineWidth: 4,
            size: 80,
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
        $('.easypiechart#space').easyPieChart({
            barColor: "rgba(255, 255, 255, 0.6)",
            trackColor: 'rgba(255, 255, 255, 0.2)',
            scaleColor: 'rgba(255, 255, 255, 0.8)',
            scaleLength: 0,
            lineCap: 'square',
            lineWidth: 4,
            size: 80,
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
        $('.easypiechart#network').easyPieChart({
            barColor: "rgba(255, 255, 255, 0.6)",
            trackColor: 'rgba(255, 255, 255, 0.2)',
            scaleColor: 'rgba(255, 255, 255, 0.8)',
            scaleLength: 0,
            lineCap: 'square',
            lineWidth: 4,
            size: 80,
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
        $('.easypiechart#beer').easyPieChart({
            barColor: "rgba(255, 255, 255, 0.6)",
            trackColor: 'rgba(255, 255, 255, 0.2)',
            scaleColor: 'rgba(255, 255, 255, 0.8)',
            scaleLength: 0,
            lineCap: 'square',
            lineWidth: 4,
            size: 80,
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });


        $('#updatePieCharts').on('click', function() {
            $('.easypiechart#bandwidth').data('easyPieChart').update(Math.random()*100);
            $('.easypiechart#ramusage').data('easyPieChart').update(Math.random()*100);
            $('.easypiechart#serverload').data('easyPieChart').update(Math.random()*100);
            $('.easypiechart#space').data('easyPieChart').update(Math.random()*100);
            $('.easypiechart#network').data('easyPieChart').update(Math.random()*100);
            $('.easypiechart#beer').data('easyPieChart').update(Math.random()*100);
            return false;
        });
    }
    catch(error) {}
});


//Sparkline Tiles

var responsiveSparklinePageView = function() {

    $("#spark-tile-revenue").sparkline([5,6,7,9,9,5,3,2,2,4,6,7,5,6,7,9,9,5,3,2,2,4,6,7,5,6,5,3], {
        type: 'line',
        width: '100%',
        fillColor: '#aed581',
        lineColor: '#aed581',
        disableInteraction: true,
        spotRadius: 0,
        lineWidth: 0
    });

    $("#tiles-sparkline-stats-pageviews").sparkline([2455,1234,776,349,1776,2234,2455], {
        type: 'line',
        lineColor: '#ccc',
        lineWidth: '1',
        fillColor: 'rgba(0, 0, 0, 0.02)',
        height: 96,
        width: '100%',
        minSpotColor: false,
        maxSpotColor: false,
        spotColor: false,
        spotRadius: '2',
        highlightSpotColor: '#999999',
        highlightLineColor: 'transparent'
    });

    $("#tiles-sparkline-stats-totalsales").sparkline([2455,3534,5776,4349,5179,524,1123], {
        type: 'line',
        lineColor: '#ccc',
        lineWidth: '1',
        fillColor: 'rgba(0, 0, 0, 0.02)',
        height: 96,
        width: '100%',
        minSpotColor: false,
        maxSpotColor: false,
        spotColor: false,
        spotRadius: '2',
        highlightSpotColor: '#999999',
        highlightLineColor: 'transparent'
    });

    $("#tiles-sparkline-stats-totalorders").sparkline([255,134,76,120,350,400,98], {
        type: 'line',
        lineColor: '#ccc',
        lineWidth: '1',
        fillColor: 'rgba(0, 0, 0, 0.02)',
        height: 96,
        width: '100%',
        minSpotColor: false,
        maxSpotColor: false,
        spotColor: false,
        spotRadius: '2',
        highlightSpotColor: '#999999',
        highlightLineColor: 'transparent'
    });

    $("#tiles-sparkline-stats-pageviews4").sparkline([1455,634,776,1349,2179,2524,1423], {
        type: 'line',
        lineColor: '#ccc',
        lineWidth: '1',
        fillColor: 'rgba(0, 0, 0, 0.02)',
        height: 96,
        width: '100%',
        minSpotColor: false,
        maxSpotColor: false,
        spotColor: false,
        spotRadius: '2',
        highlightSpotColor: '#999999',
        highlightLineColor: 'transparent'
    });

    $("#tiles-sparkline-stats-blogviews").sparkline([1455,634,776,1349,2179,2524,1423], {
        type: 'line',
        lineColor: '#e3e3e3',
        lineWidth: '1',
        fillColor: 'rgba(0, 0, 0, 0.02)',
        height: 173,
        width: '100%',
        minSpotColor: false,
        maxSpotColor: false,
        spotColor: false,
        spotRadius: '2',
        highlightSpotColor: '#e3e3e3',
        highlightLineColor: 'rgba(227,227,227,0.3)'
    });

    $("#tiles-sparkline-stats-blogviews").sparkline([2455,1634,376,2349,3179,1524,4423], {
        composite: true,
        lineColor: '#9b59b6',
        lineWidth: '1',
        fillColor: 'rgba(0, 0, 0, 0.02)',
        height: 173,
        minSpotColor: false,
        maxSpotColor: false,
        spotColor: false,
        spotRadius: '2',
        highlightSpotColor: '#9b59b6',
        highlightLineColor: 'rgba(227,227,227,0.3)'
    });

    $("#sparkline-revenue").sparkline([24,19,26,28,22,19,10,13,10,15,22,26,16,22,20,27,32,31,29,22,19,8,2,5,6,14,6,10,13,8,19,21,26,29,24], {
        type: 'line',
        width: '100%',
        height: 32,
        fillColor: '#add07c',
        lineWidth: 0,
        lineColor: '#add07c',
        chartRangeMin: 0,
        disableInteraction: true,
        spotRadius: 0
    });

    $("#sparkline-commission").sparkline([27,26,21,18,8,12,10,6,15,7,6,2,8,11,13,9,14,18,27,28,26,32,22,19,18,16,19,20,17,24,20,29,26,20,24], {
        type: 'line',
        width: '100%',
        height: 32,
        lineWidth: 1,
        fillColor: '#fafafa',
        lineColor: '#e1e1e1',
        chartRangeMin: 0,
        disableInteraction: true,
        spotRadius: 0
    });

    $("#sparkline-item").sparkline([5,3,9,6,5,9,7,3,5,2,5,7,5,2,5,3,9,6,5,9,7,3,5,2,5,7,5,2], {
        type: 'bar',
        barSpacing: 4,
        barWidth: 2,
        height: 32,
        barColor: '#e1e1e1',
        disableInteraction: true,
        spotRadius: 0
    });

    $("#tiles-sparkline-stats-totalsales").sparkline([2455,3534,5776,4349,5179,524,1123], {
        type: 'line',
        lineColor: '#ccc',
        lineWidth: '1',
        fillColor: 'rgba(0, 0, 0, 0.02)',
        height: 96,
        width: '100%',
        minSpotColor: false,
        maxSpotColor: false,
        spotColor: false,
        spotRadius: '2',
        highlightSpotColor: '#999999',
        highlightLineColor: 'transparent'
    });
}

var refreshSparklines;
$(window).resize(function(e) {
    clearTimeout(refreshSparklines);
    refreshSparklines = setTimeout(responsiveSparklinePageView, 500);
});

responsiveSparklinePageView();


//Info Tiles: Sparkline Variant
$("#tileorders").sparkline([112,182,130,191,75,214,159,138,156,120], {
    type: 'bar',
    barColor: 'rgba(255, 255, 255, 0.3)',
    barSpacing: 1,
    height: '13',
    barWidth: 3
});

$("#tilemembers").sparkline([41,38,73,49,51,20,55,13,35,23], {
    type: 'bar',
    barColor: 'rgba(255, 255, 255, 0.3)',
    barSpacing: 1,
    height: '13',
    barWidth: 3
});

$("#tiletickets").sparkline([50,100,78], { 
    type: 'pie',
    sliceColors: ['rgba(255, 255, 255, 0.75)','rgba(255, 255, 255, 0.5)','rgba(255, 255, 255, 0.25)'],
    height: '13',
    width: '13'
});

$("#tilerevenues").sparkline([11270,17257,15014,13107,15538,13439,17915,23874,16677,12003], {
    type: 'line',
    lineColor: 'rgba(255, 255, 255, 0.3)',
    lineWidth: '1.5',
    fillColor: 'transparent',
    height: '13',
    minSpotColor: false,
    maxSpotColor: false,
    spotColor: false,
    spotRadius: '0',
    highlightSpotColor: '#fff',
    highlightLineColor: '#fff',
    width: '40'
});

$("#tileprofits").sparkline([412,382,130,191,215,204,559,738,456,239], {
    type: 'line',
    lineColor: 'rgba(255, 255, 255, 0.3)',
    lineWidth: '1.5',
    fillColor: 'transparent',
    height: '13',
    minSpotColor: false,
    maxSpotColor: false,
    spotColor: false,
    spotRadius: '0',
    highlightSpotColor: '#fff',
    highlightLineColor: '#fff',
    width: '48'
});




// tectonic tiles

// bar

$("#tectonicinfotile1b").sparkline([4,6,7,2,3,5,2], {
    type: 'bar',
    barColor: 'rgba(255, 255, 255, 0.32)',
    barSpacing: 8,
    height: '40',
    barWidth: 4
});

$("#tectonicinfotile2b").sparkline([4,6,7,2,3,5,2], {
    type: 'bar',
    barColor: 'rgba(255, 255, 255, 0.32)',
    barSpacing: 8,
    height: '40',
    barWidth: 4
});

$("#tectonicinfotile3b").sparkline([4,6,7,2,3,5,2], {
    type: 'bar',
    barColor: 'rgba(255, 255, 255, 0.32)',
    barSpacing: 8,
    height: '40',
    barWidth: 4
});

$("#tectonicinfotile4b").sparkline([4,6,7,2,3,5,2], {
    type: 'bar',
    barColor: 'rgba(255, 255, 255, 0.32)',
    barSpacing: 8,
    height: '40',
    barWidth: 4
});

// line

$("#tectonicinfotile1l").sparkline([3,6,5,7,3,4,2], {
    type: 'line',
    lineColor: 'rgba(255, 255, 255, 0.32)',
    lineWidth: '2',
    fillColor: 'rgba(255, 255, 255, 0.16)',
    height: '40',
    minSpotColor: false,
    maxSpotColor: false,
    spotColor: false,
    spotRadius: '0',
    highlightSpotColor: '#fff',
    highlightLineColor: '#fff',
    width: '72'
});

$("#tectonicinfotile2l").sparkline([3,6,5,7,3,4,2], {
    type: 'line',
    lineColor: 'rgba(255, 255, 255, 0.32)',
    lineWidth: '2',
    fillColor: 'rgba(255, 255, 255, 0.16)',
    height: '40',
    minSpotColor: false,
    maxSpotColor: false,
    spotColor: false,
    spotRadius: '0',
    highlightSpotColor: '#fff',
    highlightLineColor: '#fff',
    width: '72'
});

$("#tectonicinfotile3l").sparkline([3,6,5,7,3,4,2], {
    type: 'line',
    lineColor: 'rgba(255, 255, 255, 0.32)',
    lineWidth: '2',
    fillColor: 'rgba(255, 255, 255, 0.16)',
    height: '40',
    minSpotColor: false,
    maxSpotColor: false,
    spotColor: false,
    spotRadius: '0',
    highlightSpotColor: '#fff',
    highlightLineColor: '#fff',
    width: '72'
});

$("#tectonicinfotile4l").sparkline([3,6,5,7,3,4,2], {
    type: 'line',
    lineColor: 'rgba(255, 255, 255, 0.32)',
    lineWidth: '2',
    fillColor: 'rgba(255, 255, 255, 0.16)',
    height: '40',
    minSpotColor: false,
    maxSpotColor: false,
    spotColor: false,
    spotRadius: '0',
    highlightSpotColor: '#fff',
    highlightLineColor: '#fff',
    width: '72'
});

// pie

$("#tectonicinfotile1p").sparkline([2,4,7], { 
    type: 'pie',
    sliceColors: ['rgba(255, 255, 255, 0.8)','rgba(255, 255, 255, 0.16)','rgba(255, 255, 255, 0.32)'],
    height: '40',
    width: '40'
});

$("#tectonicinfotile2p").sparkline([2,4,7], { 
    type: 'pie',
    sliceColors: ['rgba(255, 255, 255, 0.8)','rgba(255, 255, 255, 0.16)','rgba(255, 255, 255, 0.32)'],
    height: '40',
    width: '40'
});

$("#tectonicinfotile3p").sparkline([2,4,7], { 
    type: 'pie',
    sliceColors: ['rgba(255, 255, 255, 0.8)','rgba(255, 255, 255, 0.16)','rgba(255, 255, 255, 0.32)'],
    height: '40',
    width: '40'
});

$("#tectonicinfotile4p").sparkline([2,4,7], { 
    type: 'pie',
    sliceColors: ['rgba(255, 255, 255, 0.8)','rgba(255, 255, 255, 0.16)','rgba(255, 255, 255, 0.32)'],
    height: '40',
    width: '40'
});

// color

// bar

$("#tectonicinfotile1bteal").sparkline([4,6,7,2,3,5,2], {
    type: 'bar',
    barColor: '#26a69a',
    barSpacing: 8,
    height: '40',
    barWidth: 4
});

// line

$("#tectonicinfotile1lgreen").sparkline([3,6,5,7,3,4,2], {
    type: 'line',
    lineColor: '#81c784',
    lineWidth: '2',
    fillColor: '#e8f5e9',
    height: '40',
    minSpotColor: false,
    maxSpotColor: false,
    spotColor: false,
    spotRadius: '0',
    highlightSpotColor: '#81c784',
    highlightLineColor: '#81c784',
    width: '72'
});

// pie

$("#tectonicinfotile1pcyan").sparkline([2,4,7], { 
    type: 'pie',
    sliceColors: ['#b2ebf2','#4dd0e1','#00bcd4'],
    height: '40',
    width: '40'
});
