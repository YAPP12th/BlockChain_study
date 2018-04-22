     var chartData = generatechartData();

            function generatechartData() {
                var chartData = [];
                var firstDate = new Date();
                firstDate.setDate(firstDate.getDate() - 150);

                for (var i = 0; i < 150; i++) {
                    // we create date objects here. In your data, you can have date strings
                    // and then set format of your dates using chart.dataDateFormat property,
                    // however when possible, use date objects, as this will speed up chart rendering.
                    var newDate = new Date(firstDate);
                    newDate.setDate(newDate.getDate() + i);

                    var visits = Math.round(Math.random() * 90 - 45);

                    chartData.push({
                        date: newDate,
                        visits: visits
                    });
                }
                return chartData;
            }


            var chart = AmCharts.makeChart("chartdiv", {
                "theme": "light",
                "type": "serial",
                "autoMargins": false,
                "marginLeft": 0,
                "marginRight": 0,
                "dataProvider": chartData,
                "valueAxes": [{
                        "inside":true,
                        "axisAlpha": 0
                    }],
                "graphs": [{
                        "id":"g1",
                        "balloonText": "<div style='margin:5px; font-size:19px;'><span style='font-size:13px;'>[[category]]</span><br>[[value]]</div>",
                        "bullet": "round",
                        "bulletBorderAlpha": 1,
                        "bulletBorderColor": "#FFFFFF",
                        "hideBulletsCount": 50,
                        "lineThickness": 2,
                        "lineColor": "#fdd400",
                        "negativeLineColor": "#67b7dc",
                        "valueField": "visits"
                    }],
                "chartScrollbar": {

                },
                "chartCursor": {},
                "categoryField": "date",
                "categoryAxis": {
                    "parseDates": true,
                    "axisAlpha": 0,
                    "minHorizontalGap": 55
                }
            });

            //chart.addListener("dataUpdated", zoomChart);
            zoomChart();

            function zoomChart() {
                if (chart) {
                    if (chart.zoomToIndexes) {
                        chart.zoomToIndexes(130, chartData.length - 1);
                    }
                }
            }
            
            
            var chart2 = AmCharts.makeChart("chartdiv2", {
                "type": "serial",
                "theme": "light",
                "autoMargins": false,
                "marginLeft": 0,
                "marginRight": 0,
                "autoMarginOffset":20,
                "dataDateFormat": "YYYY-MM-DD HH:NN",
                "dataProvider": [{
                        "date": "2012-01-01",
                        "value": 8
                    }, {
                        "date": "2012-01-01",
                        "value": 8
                    }, {
                        "date": "2012-01-02",
                        "color":"#CC0000",
                        "value": 10
                    }, {
                        "date": "2012-01-03",
                        "value": 12
                    }, {
                        "date": "2012-01-04",
                        "value": 14
                    }, {
                        "date": "2012-01-05",
                        "value": 11
                    }, {
                        "date": "2012-01-06",
                        "value": 6
                    }, {
                        "date": "2012-01-07",
                        "value": 7
                    }, {
                        "date": "2012-01-08",
                        "value": 9
                    }, {
                        "date": "2012-01-09",
                        "value": 13
                    }, {
                        "date": "2012-01-10",
                        "value": 15
                    }, {
                        "date": "2012-01-11",
                        "color":"#CC0000",
                        "value": 19
                    }, {
                        "date": "2012-01-12",
                        "value": 21
                    }, {
                        "date": "2012-01-13",
                        "value": 22
                    }, {
                        "date": "2012-01-14",
                        "value": 20
                    }, {
                        "date": "2012-01-15",
                        "value": 18
                    }, {
                        "date": "2012-01-16",
                        "value": 14
                    }, {
                        "date": "2012-01-17",
                        "color":"#CC0000",
                        "value": 16
                    }, {
                        "date": "2012-01-18",
                        "value": 18
                    }, {
                        "date": "2012-01-19",
                        "value": 17
                    }, {
                        "date": "2012-01-20",
                        "value": 15
                    }, {
                        "date": "2012-01-21",
                        "value": 12
                    }, {
                        "date": "2012-01-22",
                        "color":"#CC0000",
                        "value": 10
                    }, {
                        "date": "2012-01-23",
                        "value": 8
                    }],
                "valueAxes": [{
                        "axisAlpha": 0,
                        "guides": [{
                                "fillAlpha": 0.1,
                                "fillColor": "#888888",
                                "lineAlpha": 0,
                                "toValue": 16,
                                "value": 10
                            }],
                        "position": "left",
                        "tickLength": 0
                    }],
                "graphs": [{
                        "balloonText": "[[category]]<br><b><span style='font-size:14px;'>value:[[value]]</span></b>",
                        "bullet": "round",
                        "dashLength": 3,
                        "colorField":"color",
                        "valueField": "value"
                    }],
                "trendLines": [{
                        "finalDate": "2012-01-11 12",
                        "finalValue": 19,
                        "initialDate": "2012-01-02 12",
                        "initialValue": 10,
                        "lineColor": "#CC0000"
                    }, {
                        "finalDate": "2012-01-22 12",
                        "finalValue": 10,
                        "initialDate": "2012-01-17 12",
                        "initialValue": 16,
                        "lineColor": "#CC0000"
                    }],
                "chartScrollbar": {
                    "scrollbarHeight":2,
                    "offset":-1,
                    "backgroundAlpha":0.1,
                    "backgroundColor":"#888888",
                    "selectedBackgroundColor":"#67b7dc",
                    "selectedBackgroundAlpha":1
                },
                "chartCursor": {
                    "fullWidth":true,
                    "valueLineEabled":true,
                    "valueLineBalloonEnabled":true,
                    "valueLineAlpha":0.5,
                    "cursorAlpha":0
                },
                "categoryField": "date",
                "categoryAxis": {
                    "parseDates": true,
                    "axisAlpha": 0,
                    "gridAlpha": 0.1,
                    "minorGridAlpha": 0.1,
                    "minorGridEnabled": true
                },
                "export": {
                    "enabled": true
                }
            });

            //chart2.addListener("dataUpdated", zoomChart2);
            function zoomChart2(){
                chart2.zoomToDates(new Date(2012, 0, 2), new Date(2012, 0, 13));
            };
            
            // generate data
            var chartData3 = [];

            function generateChartData3() {
                var firstDate = new Date();
                firstDate.setTime(firstDate.getTime() - 10 * 24 * 60 * 60 * 1000);

                for (var i = firstDate.getTime(); i < (firstDate.getTime() + 10 * 24 * 60 * 60 * 1000); i += 60 * 60 * 1000) {
                    var newDate = new Date(i);

                    if (i == firstDate.getTime()) {
                        var value1 = Math.round(Math.random() * 10) + 1;
                    } else {
                        var value1 = Math.round(chartData3[chartData3.length - 1].value1 / 100 * (90 + Math.round(Math.random() * 20)) * 100) / 100;
                    }

                    if (newDate.getHours() == 12) {
                        // we set daily data on 12th hour only
                        var value2 = Math.round(Math.random() * 12) + 1;
                        chartData3.push({
                            date: newDate,
                            value1: value1,
                            value2: value2
                        });
                    } else {
                        chartData3.push({
                            date: newDate,
                            value1: value1
                        });
                    }
                }
            }

            generateChartData3();

            var chart3 = AmCharts.makeChart("chartdiv3", {
                "type": "serial",
                "theme": "light",
                "autoMargins": false,
                "marginLeft": 0,
                "marginRight": 0,
                "dataProvider": chartData3,
                "valueAxes": [{
                        "axisAlpha": 0.1
                    }],

                "graphs": [{
                        "balloonText": "[[title]]: [[value]]",
                        "columnWidth": 20,
                        "fillAlphas": 1,
                        "title": "daily",
                        "type": "column",
                        "valueField": "value2"
                    }, {
                        "balloonText": "[[title]]: [[value]]",
                        "lineThickness": 2,
                        "title": "intra-day",
                        "valueField": "value1"
                    }],
                "zoomOutButtonRollOverAlpha": 0.15,
                "chartCursor": {
                    "categoryBalloonDateFormat": "MMM DD JJ:NN",
                    "cursorPosition": "mouse",
                    "showNextAvailable": true
                },
                "autoMarginOffset": 5,
                "columnWidth": 1,
                "categoryField": "date",
                "categoryAxis": {
                    "minPeriod": "hh",
                    "parseDates": true
                },
                "export": {
                    "enabled": true
                }
            });
            
            
            var chartData = generateChartData4();

            var chart4 = AmCharts.makeChart("chartdiv4", {
                "type": "serial",
                "theme": "light",
                "autoMargins": false,
                "marginLeft": 0,
                "marginRight": 0,
                "legend": {
                    "useGraphSettings": true
                },
                "dataProvider": chartData,
                "valueAxes": [{
                        "id":"v1",
                        "axisColor": "#FF6600",
                        "axisThickness": 2,
                        "gridAlpha": 0,
                        "axisAlpha": 1,
                        "position": "left"
                    }, {
                        "id":"v2",
                        "axisColor": "#FCD202",
                        "axisThickness": 2,
                        "gridAlpha": 0,
                        "axisAlpha": 1,
                        "position": "right"
                    }, {
                        "id":"v3",
                        "axisColor": "#B0DE09",
                        "axisThickness": 2,
                        "gridAlpha": 0,
                        "offset": 50,
                        "axisAlpha": 1,
                        "position": "left"
                    }],
                "graphs": [{
                        "valueAxis": "v1",
                        "lineColor": "#FF6600",
                        "bullet": "round",
                        "bulletBorderThickness": 1,
                        "hideBulletsCount": 30,
                        "title": "red line",
                        "valueField": "visits",
                        "fillAlphas": 0
                    }, {
                        "valueAxis": "v2",
                        "lineColor": "#FCD202",
                        "bullet": "square",
                        "bulletBorderThickness": 1,
                        "hideBulletsCount": 30,
                        "title": "yellow line",
                        "valueField": "hits",
                        "fillAlphas": 0
                    }, {
                        "valueAxis": "v3",
                        "lineColor": "#B0DE09",
                        "bullet": "triangleUp",
                        "bulletBorderThickness": 1,
                        "hideBulletsCount": 30,
                        "title": "green line",
                        "valueField": "views",
                        "fillAlphas": 0
                    }],
                "chartScrollbar": {},
                "chartCursor": {
                    "cursorPosition": "mouse"
                },
                "categoryField": "date",
                "categoryAxis": {
                    "parseDates": true,
                    "axisColor": "#DADADA",
                    "minorGridEnabled": true
                },
                "export": {
                    "enabled": true,
                    "position": "bottom-right"
                }
            });

            //chart4.addListener("dataUpdated", zoomChart4);
            zoomChart4();


            // generate some random data, quite different range
            function generateChartData4() {
                var chartData = [];
                var firstDate = new Date();
                firstDate.setDate(firstDate.getDate() - 100);

                for (var i = 0; i < 100; i++) {
                    // we create date objects here. In your data, you can have date strings
                    // and then set format of your dates using chart.dataDateFormat property,
                    // however when possible, use date objects, as this will speed up chart rendering.
                    var newDate = new Date(firstDate);
                    newDate.setDate(newDate.getDate() + i);

                    var visits = Math.round(Math.random() * 40) + 100;
                    var hits = Math.round(Math.random() * 80) + 500;
                    var views = Math.round(Math.random() * 6000);

                    chartData.push({
                        date: newDate,
                        visits: visits,
                        hits: hits,
                        views: views
                    });
                }
                return chartData;
            }

            function zoomChart4(){
                chart4.zoomToIndexes(chart4.dataProvider.length - 20, chart4.dataProvider.length - 1);
            }



var chartData5 = generateChartData5();

var chart5 = AmCharts.makeChart("chartdiv5", {
    "type": "serial",
    "theme": "light",
    "autoMargins": false,
    "marginLeft": 0,
    "marginRight": 0,
    "dataProvider": chartData5,
    "valueAxes": [{
        "position": "left",
        "title": "Unique visitors"
    }],
    "graphs": [{
        "id": "g1",
        "lineThickness": 2,
        "fillAlphas": 0.1,
        "valueField": "visits",
         "balloonText": "<div style='margin:5px; font-size:13px;'>Visits:<b>[[value]]</b></div>"
    }],
    "chartScrollbar": {
        "graph": "g1",
        "scrollbarHeight": 40,
        "backgroundAlpha": 0,
        "selectedBackgroundAlpha": 0.08,
        "selectedBackgroundColor": "#888888",
        "graphFillAlpha": 0,
        "graphLineAlpha": 0.1,
        "selectedGraphFillAlpha": 0,
        "selectedGraphLineAlpha": 0.5,
        "autoGridCount": true,
        "color": "#AAAAAA"
    },
    "chartCursor": {
        "categoryBalloonDateFormat": "JJ:NN, DD MMMM",
        "cursorPosition": "mouse"
    },
    "categoryField": "date",
    "categoryAxis": {
        "minPeriod": "mm",
        "parseDates": true
    },
    "export": {
        "enabled": true
    }
});

//chart5.addListener("dataUpdated", zoomChart5);
// when we apply theme, the dataUpdated event is fired even before we add listener, so
// we need to call zoomChart here
zoomChart5();
// this method is called when chart is first inited as we listen for "dataUpdated" event
function zoomChart5() {
    // different zoom methods can be used - zoomToIndexes, zoomToDates, zoomToCategoryValues
    chart5.zoomToIndexes(chartData5.length - 250, chartData5.length - 100);
}

// generate some random data, quite different range
function generateChartData5() {
    var chartData = [];
    // current date
    var firstDate = new Date();
    // now set 500 minutes back
    firstDate.setMinutes(firstDate.getDate() - 1000);

    // and generate 500 data items
    for (var i = 0; i < 500; i++) {
        var newDate = new Date(firstDate);
        // each time we add one minute
        newDate.setMinutes(newDate.getMinutes() + i);
        // some random number
        var visits = Math.round(Math.random() * 40 + 10 + i + Math.random() * i / 5);
        // add data item to the array
        chartData.push({
            date: newDate,
            visits: visits
        });
    }
    return chartData;
}

var chart6 = AmCharts.makeChart("chartdiv6", {
    "type": "serial",
    "theme": "light",
    "autoMargins": false,
    "marginLeft": 0,
    "marginRight": 0,
    "legend": {
        "equalWidths": false,
        "useGraphSettings": true,
        "valueAlign": "left",
        "valueWidth": 120
    },
    "dataProvider": [{
        "date": "2012-01-01",
        "distance": 227,
        "townName": "New York",
        "townName2": "New York",
        "townSize": 25,
        "latitude": 40.71,
        "duration": 408
    }, {
        "date": "2012-01-02",
        "distance": 371,
        "townName": "Washington",
        "townSize": 14,
        "latitude": 38.89,
        "duration": 482
    }, {
        "date": "2012-01-03",
        "distance": 433,
        "townName": "Wilmington",
        "townSize": 6,
        "latitude": 34.22,
        "duration": 562
    }, {
        "date": "2012-01-04",
        "distance": 345,
        "townName": "Jacksonville",
        "townSize": 7,
        "latitude": 30.35,
        "duration": 379
    }, {
        "date": "2012-01-05",
        "distance": 480,
        "townName": "Miami",
        "townName2": "Miami",
        "townSize": 10,
        "latitude": 25.83,
        "duration": 501
    }, {
        "date": "2012-01-06",
        "distance": 386,
        "townName": "Tallahassee",
        "townSize": 7,
        "latitude": 30.46,
        "duration": 443
    }, {
        "date": "2012-01-07",
        "distance": 348,
        "townName": "New Orleans",
        "townSize": 10,
        "latitude": 29.94,
        "duration": 405
    }, {
        "date": "2012-01-08",
        "distance": 238,
        "townName": "Houston",
        "townName2": "Houston",
        "townSize": 16,
        "latitude": 29.76,
        "duration": 309
    }, {
        "date": "2012-01-09",
        "distance": 218,
        "townName": "Dalas",
        "townSize": 17,
        "latitude": 32.8,
        "duration": 287
    }, {
        "date": "2012-01-10",
        "distance": 349,
        "townName": "Oklahoma City",
        "townSize": 11,
        "latitude": 35.49,
        "duration": 485
    }, {
        "date": "2012-01-11",
        "distance": 603,
        "townName": "Kansas City",
        "townSize": 10,
        "latitude": 39.1,
        "duration": 890
    },
    {
        "date": "2012-01-14",
        "distance": 603,
        "townName": "Kansas City",
        "townSize": 10,
        "latitude": 39.1,
        "duration": 890
    }
    , {
        "date": "2012-01-12",
        "distance": 534,
        "townName": "Denver",
        "townName2": "Denver",
        "townSize": 18,
        "latitude": 39.74,
        "duration": 810
    }, {
        "date": "2012-01-13",
        "townName": "Salt Lake City",
        "townSize": 12,
        "distance": 425,
        "duration": 670,
        "latitude": 40.75,
        "dashLength": 8,
        "alpha": 0.4
    }, {
        "date": "2012-01-14"
    }, {
        "date": "2012-01-15"
    }, {
        "date": "2012-01-16"
    }, {
        "date": "2012-01-17"
    }, {
        "date": "2012-01-18"
    }, {
        "date": "2012-01-19"
    }],
    "valueAxes": [{
        "id": "distanceAxis",
        "axisAlpha": 0,
        "gridAlpha": 0,
        "position": "left",
        "title": "distance"
    }, {
        "id": "latitudeAxis",
        "axisAlpha": 0,
        "gridAlpha": 0,
        "labelsEnabled": false,
        "position": "right"
    }, {
        "id": "durationAxis",
        "duration": "mm",
        "durationUnits": {
            "hh": "h ",
            "mm": "min"
        },
        "axisAlpha": 0,
        "gridAlpha": 0,
        "inside": true,
        "position": "right",
        "title": "duration"
    }],
    "graphs": [{
        "alphaField": "alpha",
        "balloonText": "[[value]] miles",
        "dashLengthField": "dashLength",
        "fillAlphas": 0.7,
        "legendPeriodValueText": "total: [[value.sum]] mi",
        "legendValueText": "[[value]] mi",
        "title": "distance",
        "type": "column",
        "valueField": "distance",
        "valueAxis": "distanceAxis"
    }, {
        "balloonText": "latitude:[[value]]",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "useLineColorForBulletBorder": true,
        "bulletColor": "#FFFFFF",
        "bulletSizeField": "townSize",
        "dashLengthField": "dashLength",
        "descriptionField": "townName",
        "labelPosition": "right",
        "labelText": "[[townName2]]",
        "legendValueText": "[[description]]/[[value]]",
        "title": "latitude/city",
        "fillAlphas": 0,
        "valueField": "latitude",
        "valueAxis": "latitudeAxis"
    }, {
        "bullet": "square",
        "bulletBorderAlpha": 1,
        "bulletBorderThickness": 1,
        "dashLengthField": "dashLength",
        "legendValueText": "[[value]]",
        "title": "duration",
        "fillAlphas": 0,
        "valueField": "duration",
        "valueAxis": "durationAxis"
    }],
    "chartCursor": {
        "categoryBalloonDateFormat": "DD",
        "cursorAlpha": 0.1,
        "cursorColor":"#000000",
         "fullWidth":true,
        "valueBalloonsEnabled": false,
        "zoomable": false
    },
    "dataDateFormat": "YYYY-MM-DD",
    "categoryField": "date",
    "categoryAxis": {
        "dateFormats": [{
            "period": "DD",
            "format": "DD"
        }, {
            "period": "WW",
            "format": "MMM DD"
        }, {
            "period": "MM",
            "format": "MMM"
        }, {
            "period": "YYYY",
            "format": "YYYY"
        }],
        "parseDates": true,
        "autoGridCount": false,
        "axisColor": "#555555",
        "gridAlpha": 0.1,
        "gridColor": "#FFFFFF",
        "gridCount": 50
    },
    "export": {
    	"enabled": true
     }
});