$(function(){
    var options = {


    
    //String - Scale label font declaration for the scale label
    scaleFontFamily : "'Arial'",
    
    //Number - Scale label font size in pixels  
    scaleFontSize : 12,
    
    //String - Scale label font weight style    
    scaleFontStyle : "normal",
    
    //String - Scale label font colour  
    scaleFontColor : "#666",    


        // scaleShowGridLines : false,
        // scaleGridLineWidth : 0,
        // scaleShowLabels: false,
        // scaleLineColor: 'transparent',
        // scaleFontColor: "transparent",
        // //showYAxisLabel:false,
        // //showXAxisLabel:false,
        // datasetStroke : false,
        // animation : false,
        // bezierCurve : true,
        // responsive: true,
        // pointDot : false,
        // pointDotRadius : 0,
        // scaleLineWidth: 0,
        // showScale: false,
        // scaleShowVerticalLines: 0,
        // scaleOverride: false,
        // scaleStartValue: 0,
        // pointDotStrokeWidth : 0,
        // pointHitDetectionRadius : 0,
        // datasetStroke : true,
        // datasetStrokeWidth : 0,
        // datasetFill : true


    };
    var lineChartData = {
        labels : ["January","February","March","April","May","June","July"],
        datasets : [
            {
                fillColor : "rgba(220,220,220,0.5)",
                strokeColor : "rgba(220,220,220,1)",
                pointColor : "rgba(220,220,220,1)",
                pointStrokeColor : "#fff",
                scaleShowHorizontalLines: false,
                data : [65,59,90,81,56,55,40]
            },
            {
                fillColor : "rgba(151,187,205,0.5)",
                strokeColor : "rgba(151,187,205,1)",
                pointColor : "rgba(151,187,205,1)",
                pointStrokeColor : "#fff",
                scaleShowHorizontalLines: false,
                data : [28,48,40,19,96,27,100]
            }
        ]
    }

    var myLine = new Chart(document.getElementById("line-chart").getContext("2d")).Line(lineChartData,options, {responsive: true});

    var barChartData = {
        labels : ["January","February","March","April","May","June","July"],
        datasets : [
            {
                fillColor : "rgba(220,220,220,0.5)",
                strokeColor : "rgba(220,220,220,1)",
                data : [65,59,90,81,56,55,40]
            },
            {
                fillColor : "rgba(151,187,205,0.5)",
                strokeColor : "rgba(151,187,205,1)",
                data : [28,48,40,19,96,27,100]
            }
        ]

    }

    var myLine = new Chart(document.getElementById("bar-chart").getContext("2d")).Bar(barChartData,options, {responsive: true});

    var radarChartData = {
        labels : ["Eating","Drinking","Sleeping","Designing","Coding","Partying","Running"],
        datasets : [
            {
                fillColor : "rgba(220,220,220,0.5)",
                strokeColor : "rgba(220,220,220,1)",
                pointColor : "rgba(220,220,220,1)",
                pointStrokeColor : "#fff",
                data : [65,59,90,81,56,55,40]
            },
            {
                fillColor : "rgba(151,187,205,0.5)",
                strokeColor : "rgba(151,187,205,1)",
                pointColor : "rgba(151,187,205,1)",
                pointStrokeColor : "#fff",
                data : [28,48,40,19,96,27,100]
            }
        ]

    }

    var myRadar = new Chart(document.getElementById("radar-chart").getContext("2d")).Radar(radarChartData,{scaleShowLabels : false, pointLabelFontSize : 10});

    var pieData = [
        {
            value: 30,
            color:"#F38630"
        },
        {
            value : 50,
            color : "#E0E4CC"
        },
        {
            value : 100,
            color : "#69D2E7"
        }

    ];

    var myPie = new Chart(document.getElementById("pie-chart").getContext("2d")).Pie(pieData, {responsive: true});


    var chartData = [
        {
            value : Math.random(),
            color: "#D97041"
        },
        {
            value : Math.random(),
            color: "#C7604C"
        },
        {
            value : Math.random(),
            color: "#21323D"
        },
        {
            value : Math.random(),
            color: "#9D9B7F"
        },
        {
            value : Math.random(),
            color: "#7D4F6D"
        },
        {
            value : Math.random(),
            color: "#584A5E"
        }
    ];
    var myPolarArea = new Chart(document.getElementById("polar-area-chart").getContext("2d")).PolarArea(chartData, {responsive: true});

    var doughnutData = [
        {
            value: 30,
            color:"#F7464A"
        },
        {
            value : 50,
            color : "#46BFBD"
        },
        {
            value : 100,
            color : "#FDB45C"
        },
        {
            value : 40,
            color : "#949FB1"
        },
        {
            value : 120,
            color : "#4D5360"
        }

    ];

    var myDoughnut = new Chart(document.getElementById("donut-chart").getContext("2d")).Doughnut(doughnutData, {responsive: true});
});
