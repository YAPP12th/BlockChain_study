jQuery(document).ready(function() {

    $('.dropdown-menu').click(function(e) {
        e.stopPropagation();
    });

    // $('body').on('click', function (e) {
    //     if (!$('li.dropdown').is(e.target) && $('li.dropdown').has(e.target).length === 0 && $('.open').has(e.target).length === 0) {
    //         $('li.dropdown').removeClass('open');
    //     }
    // });

    $('[data-toggle="popover"]').popover();

    // Enabling Popover Example 2 - JS (hidden content and title capturing)
    $("#popoverExampleOne").popover({
        html : true, 
        content: function() {
            return $('#popoverExampleTwoHiddenContent2').html();
        }//,
        // title: function() {
        //     return $('#popoverExampleTwoHiddenTitle').html();
        // }
    });

    $("#popoverExampleTwo").popover({
        html : true, 
        content: function() {
            return $('#popoverExampleTwoHiddenContent').html();
        }//,
        // title: function() {
        //     return $('#popoverExampleTwoHiddenTitle').html();
        // }
    });

    $.wijets().make(); // Advanced Panels

    // Stacked chart
        var xLabels = ['', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', ''];

        var d1 = [];
        for (var i = 0; i < 7; i += 1) {
            d1.push([i+1, parseInt(Math.random() * 30)]);
        }

        var d2 = [];
        for (var i = 0; i < 7; i += 1) {
            d2.push([i+1, parseInt(Math.random() * 30)]);
        }

        var d3 = [];
        for (var i = 0; i < 7; i += 1) {
            d3.push([i+1, parseInt(Math.random() * 30)]);
        }

        var d4 = [];
        for (var i = 0; i < 7; i += 1) {
            d4.push([i+1, parseInt(Math.random() * 30)]);
        }

        var d5 = [];
        for (var i = 0; i < 7; i += 1) {
            d5.push([i+1, parseInt(Math.random() * 30)]);
        }

        function xAxisLabelGenerator(x)
        {
            return xLabels[x];
        }

        var stack = 0,
            bars = true;

        function plotWithOptions() {
            $.plot("#dashChartStacked", [{label: 'A', data: d1}, {label: 'B', data: d2}, {label: 'C', data: d3}], {
                series: {
                    shadowSize: 0,
                    stack: stack,
                    bars: {
                        show: bars,
                        barWidth: .24,
                        lineWidth: 1.5,
                        fill: 0.32,
                        align: "center"
                    }
                },
                grid: {
                    labelMargin: 16,
                    hoverable: true,
                    clickable: true,
                    borderWidth: {top: 0, right: 0, bottom: 1, left: 0},
                    borderColor: 'rgba(0, 0, 0, .08)'
                },
                yaxis: { tickColor: 'rgba(0, 0, 0, 0.02)', font: {color: 'rgba(0, 0, 0, 0.24)', size: '11'}},
                xaxis: { tickColor: 'transparent', font: {color: 'rgba(0, 0, 0, 0.24)', size: '11'}, tickFormatter: xAxisLabelGenerator, autoscaleMargin: 0.04},
                colors: ['#7986cb', '#4dd0e1', '#4db6ac'],
                tooltip: true,
                tooltipOpts: {
                    content: "X: %x | Y: %y"
                },
                legend: {
                    show: true,
                    //show or hide legend
                    labelFormatter: null,
                    //formatting your legend label by using custom functions
                    labelBoxBorderColor: '#aaa',
                    //label border color
                    noColumns: 1,
                    //number of legend columns
                    position: "ne",
                    //legend position (north east, north west, south east, south west)
                    margin: 4,
                    backgroundColor: 'transparent',
                    backgroundOpacity: 1,
                    // container: $('#dashChartStackedLabels')
                }

            });
        }

        plotWithOptions();

    // End stacked chart

    // Dashboard mini chart 1
    var miniChartOptions1 = {
        pointDotRadius : 2,
        showScale: false,
        scaleShowVerticalLines: 0,
        responsive: true,
        scaleShowLabels: false,
        scaleShowGridLines : false,
        pointDot : false,
        tooltipTemplate : false
    };

    var miniChartData1 = {
        labels : ["January","February","March","April","May","June","July"],
        datasets : [{
                fillColor : "rgba(0, 188, 212, 0.12)",
                strokeColor : "#4dd0e1",
                pointColor : "#4dd0e1",
                pointStrokeColor : "#fff",
                data : [2,4,3,6,2,4,1]
            }
        ]
    };

    new Chart(document.getElementById("dashChartSmall1").getContext("2d")).Line(miniChartData1, miniChartOptions1);

    // Dashboard mini chart 2
    // var miniChartData2 = {
    //     labels : ["January","February","March","April","May","June","July"],
    //     datasets : [{
    //             fillColor : "rgba(233, 30, 99, 0.12)",
    //             strokeColor : "#f06292",
    //             pointColor : "#f06292",
    //             pointStrokeColor : "#fff",
    //             data : [4,5,3,4,3,4,2]
    //         }
    //     ]
    // };

    // new Chart(document.getElementById("dashChartSmall2").getContext("2d")).Line(miniChartData2, miniChartOptions1);

    var responsiveSparklineTiles = function() {

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

        $("#line-dashboard1").sparkline([27,26,21,18,8,12,10,6,15,7,6,2,8,11,13,9,14,18,27,28,26,32,22,19,18,16,19,20,17,24,20,29,26,20,24], {
            type: 'line',
            width: '100%',
            height: 210,
            fillColor: '#add07c',
            lineWidth: 0,
            lineColor: '#add07c',
            chartRangeMin: 0,
            disableInteraction: true,
            spotRadius: 0
        });

        $("#line-dashboard").sparkline([27,26,21,18,8,12,10,6,15,7,6,2,8,11,13,9,14,18,27,28,26,32,22,19,18,16,19,20,17,24,20,29,26,20,24], {
            type: 'line',
            width: '100%',
            height: 160,
            fillColor: '#add07c',
            lineWidth: 0,
            lineColor: '#add07c',
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

        $("#sparkline-item-small1").sparkline([6,9,7,5], {
            type: 'bar',
            barSpacing: 1,
            barWidth: 3,
            height: 16,
            width: 16,
            barColor: '#e1e1e1',
            disableInteraction: true,
            chartRangeMin :0,
            spotRadius: 0
        });

        $("#sparkline-item-small2").sparkline([5,9,7,6], {
            type: 'bar',
            barSpacing: 1,
            barWidth: 3,
            height: 16,
            width: 16,
            barColor: '#e1e1e1',
            disableInteraction: true,
            chartRangeMin :0,
            spotRadius: 0
        });

        $("#sparkline-item2").sparkline([5,3,9,6,5,9,7,3,5,2,5,7,5,2,5,3,9,6,5,9,7,3,5,2,5,7,5,2], {
            type: 'bar',
            barSpacing: 4,
            barWidth: 2,
            width: '100%',
            height: 210,
            barColor: '#e1e1e1',
            disableInteraction: true,
            spotRadius: 0
        });

        $("#sparkline-item3").sparkline([5,3,9,6,5,9,7,3,5,7], {
            type: 'bar',
            barSpacing: 4,
            barWidth: 4,
            height: 48,
            barColor: '#eee',
            disableInteraction: true,
            spotRadius: 0
        });

        $("#piedashbiard").sparkline([1,1,1,1], {
            type: 'pie',
            sliceColors: ['#eeeeee','#eeeeee','#eeeeee','#3f51b5'],
            width: 160,
            height: 160
        });

        var barSpacing = ($('#sparkline-dashboard').width() - 30*4)/30;
        $("#sparkline-dashboard").sparkline([8,2,13,31,13,4,11,26,17,8,18,5,9,3,8,22,8,40,10,8,8,2,13,31,13,4,11,26,17,8], {
            type: 'bar',
            height: '190px',
            width: '100%',
            barWidth: 4,
            barSpacing: Math.floor(barSpacing),
            barColor: '#7986cb',
            chartRangeMin: 0,
            chartRangeMax: 40
            //stackedBarColor: ['#7986cb', '#303f9f']
        });
        // $('#sparkline-dashboard').sparkline([28,25,29,21,23,20,21,20,20,28,28,25,29,21,23,22,21,20,20,28], { 
        //     composite: true, 
        //     fillColor: false, 
        //     lineColor: '#7986cb', 
        //     height: '190px', 
        //     lineWidth: 2, 
        //     width: '100%',
        //     chartRangeMin: 0,
        //     chartRangeMax: 40,
        //     highlightLineColor: 'transparent'
        // });

        //$('#sparkline-dashboard').sparkline([8,5,9,11,13,12,11,10,10,8], { type: 'bar', barColor: '#aaf', height: '200px',width: '100%', lineWidth: 2, barWidth: 10, barSpacing: 5});
        //$('#sparkline-dashboard').sparkline([4,1,5,7,9,9,8,7,6,6], { composite: true, fillColor: false, lineColor: 'red', height: '200px', lineWidth: 2, width: '100%' });

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
            spotRadius: '3',
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
            spotRadius: '3',
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
            spotRadius: '3',
            highlightSpotColor: '#999999',
            highlightLineColor: 'transparent'
        });
    }

    var refreshSparklines;
    $(window).resize(function(e) {
        clearTimeout(refreshSparklines);
        refreshSparklines = setTimeout(responsiveSparklineTiles, 500);
    });

    responsiveSparklineTiles();


    //------------------------------
    // Todo App
    //------------------------------

    $("#sortable-todo, #completed-todo").sortable({
          connectWith: ".connectedSortable",
          receive: function (event, ui) {
            $(ui.item[0]).find('.iCheck-helper')[0].dropped = true;
            $(ui.item[0]).find('.iCheck-helper').click()
          }
        }).disableSelection();

    $('#sortable-todo .iCheck-helper, #completed-todo .iCheck-helper').on('click', function () {
        if ($(this)[0].dropped == true) { $(this)[0].dropped = false; return; }
        if ($(this).closest('#sortable-todo').length)
            $(this).closest('li').appendTo('#completed-todo');
        else
            $(this).closest('li').appendTo('#sortable-todo');
    });

    //------------------------------
    // Date Range Picker
    //------------------------------

    $('#daterangepicker2').daterangepicker({
        ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
            'Last 7 Days': [moment().subtract('days', 6), moment()],
            'Last 30 Days': [moment().subtract('days', 29), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
        },
        opens: 'right',
        startDate: moment().subtract('days', 29),
        endDate: moment()
        }, function(start, end) {
            $('#daterangepicker2 span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    });

    //------------------------------
    // Switch
    //------------------------------

    Switchery(document.querySelector('.js-switch-success'), {color: Utility.getBrandColor('success')});


    //------------------------------
    // Easy Pie Charts
    //------------------------------
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

        $("#pie3").sparkline([1,1,1,1], {
            type: 'pie',
            width: '24',
            height: '24',
            sliceColors: ['#eeeeee','#eeeeee','#3f51b5','#eeeeee']
        });

        $('.easypiechart #serverload').easyPieChart({
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
            barColor: "#ea2f6e",
            trackColor: "#ddd",
            scaleColor: 'transparent',
            scaleLength: 0,
            lineCap: 'square',
            lineWidth: 4,
            size: 48,
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
        $('#smallpie').easyPieChart({
            barColor: "#00bcd4",
            trackColor: 'rgba(255,255,255,0.9)',
            scaleColor: 'transparent',
            scaleLength: 8,
            lineCap: 'round',
            lineWidth: 4,
            size: 24
        });


        $('#updatePieCharts').on('click', function() {
            $('.easypiechart#bandwidth').data('easyPieChart').update(Math.random()*100);
            $('.easypiechart#ramusage').data('easyPieChart').update(Math.random()*100);
            $('.easypiechart#serverload').data('easyPieChart').update(Math.random()*100);
            $('.easypiechart#space').data('easyPieChart').update(Math.random()*100);
            return false;
        });
    }
    catch(error) {}
    });

//------------------------------
// Maps
//------------------------------
// NOTE: assets/demo/check demo-index-map.js


//------------------------------
// To-do
//------------------------------
    $("#sortable-tasks, #completed-tasks").sortable({
      connectWith: ".connectedSortable",
      receive: function (event, ui) {
        $(ui.item[0]).find('.iCheck-helper')[0].dropped = true;
        $(ui.item[0]).find('.iCheck-helper').click()
      }
    }).disableSelection();

    $('#sortable-tasks .iCheck-helper, #completed-tasks .iCheck-helper').on('click', function () {
        if ($(this)[0].dropped == true) { $(this)[0].dropped = false; return; }
        if ($(this).closest('#sortable-tasks').length)
            $(this).closest('li').appendTo('#completed-tasks');
        else
            $(this).closest('li').appendTo('#sortable-tasks');
    });

});

try{
    $('.easypiechart#revenuespie').easyPieChart({
        barColor: "#009688",
        trackColor: 'rgba(0, 0, 0, 0.04)',
        scaleColor: 'transparent',
        scaleLength: 0,
        lineCap: 'square',
        lineWidth: 2,
        size: 190,
        onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });
}
catch(e){}


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
    lineWidth: '1',
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
    lineWidth: '1',
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

