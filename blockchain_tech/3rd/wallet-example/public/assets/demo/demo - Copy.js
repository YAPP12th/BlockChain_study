$(function() {

	$( "#headerbar .yamm-content" ).click(function( event ) {
	  event.stopPropagation();
	  // Do something
	});

	$('#elastic_grid_demo .buttons-list a').removeClass('link-button').addClass('btn btn-inverse');
	//rtl convert
	$('#rtl').click(function(){
		$("body.topnav-collapsed").addClass('rtl').removeClass('ltr');
		$(this).css("display","none");
		$('#ltr').css("display", "block");
		$('.acc-menu li a').addClass('rtl');
	});
	$('#ltr').click(function(){
		$("body.topnav-collapsed").addClass('ltr').removeClass('rtl');
		$(this).css("display","none");
		$('#rtl').css("display", "block");
	});

	//small screen leftbar horizontal and leftbar small
	var windowwidth = $(window).width();
	if(windowwidth <= 640) 
	{
		$('.infobar-offcanvas.topnav-collapsed').removeClass('leftbar-small');
		$('.infobar-offcanvas.topnav-collapsed').removeClass('leftbar-horizontal');
	}
	$('[data-toggle="tooltip"]').tooltip(); 
	$('#carddate select').addClass('form-control'); 

	prettyPrint(); //Apply Code Prettifier

    //Easy Pie Chart
    //------------------------

	    try {
		    $('.easypiechart#processing').easyPieChart({
		        barColor: '#95a9b1',
	        	trackColor: 'rgba(0, 0, 0, 0.08)',
		        scaleColor: false,
		        scaleLength: 0,
		        lineCap: 'square',
		        lineWidth: 2,
		        size: 104,
		        onStep: function(from, to, percent) {
		            $(this.el).find('.percent').text(Math.round(percent));
		        }
		    });
		} catch(e) {

		}

		try{
		    $('.easypiechart#spanpie').easyPieChart({
		        barColor: "rgb(97,125,128)",
		        trackColor: 'rgba(0, 0, 0, 0.04)',
		        scaleColor: 'transparent',
		        scaleLength: 0,
		        lineCap: 'square',
		        lineWidth: 4,
		        size: 120,
		        onStep: function(from, to, percent) {
		            $(this.el).find('.percent').text(Math.round(percent));
		        }
		    });
		}
		catch(e){}


	// Bootstrap JS
	//------------------------
	    $('.popovers').popover({container: 'body', trigger: 'hover', placement: 'top'}); //bootstrap's popover
	    $('.tooltips').tooltip(); //bootstrap's tooltip

    //Tabdrop
    //------------------------
    	jQuery.expr[':'].noparents = function(a,i,m){
    	        return jQuery(a).parents(m[3]).length < 1;
    	}; // Only apply .tabdrop() whose parents are not (.tab-right or tab-left)
    	$('.nav-tabs').filter(':noparents(.tab-right, .tab-left, .board-inner)').tabdrop();


	

    //Custom checkboxes
    //------------------------
		$(".bootstrap-switch").bootstrapSwitch();
		$('.icheck input').iCheck({
			checkboxClass: 'icheckbox_minimal-blue',
			radioClass: 'iradio_minimal-blue'
		});


    //Demo JSTree
    //------------------------
		$('#jstree-demo').jstree({
	    	"types" : {
	        	"default" : {
					"icon" : "fa fa-folder icon-state-warning icon-lg"
	            },
	            "file" : {
					"icon" : "fa fa-file icon-state-warning icon-lg"
	            }
	        },
	        "plugins": ["types"]
	    });

		$('#jstree-demo').jstree();


	//Project Switcher Demo
	//------------------------
		$('.project-switcher-dropdown>li>a').click(function() {
			$('.project-switcher>a.btn>span').text($(this).text());
		});


	//Sparklines
	//------------------------
	
		// leftbar
		$("#leftbarpie1").sparkline([3,7,4], {
            type: 'pie',
            width: 24,
            height: 24,
            sliceColors: ['rgba(255 , 255, 255, 0.16)','rgba(255, 255, 255, 0.32)','rgba(255, 255, 255, 0.48)']
        });

        $("#leftbartristate1").sparkline([4,7,0,1,-2,-4,2], {
		    type: 'tristate',
		    posBarColor: 'rgba(255, 255, 255, 0.48)',
		    negBarColor: 'rgba(255, 255, 255, 0.16)',
		    zeroBarColor: 'rgba(255, 255, 255, 0.48)',
		    barWidth: 2,
		    barSpacing: 6,
		    height: 24,
		    zeroAxis: false
		});

		$("#leftbarbar1").sparkline([2,6,7,1,0,3,5], {
            type: 'bar',
            barWidth: 2,
            barSpacing: 6,
            height: 24,
            barColor: 'rgba(255, 255, 255, 0.48)'
        });

        $("#leftbarline1").sparkline([2,6,7,1,0,3,5], {
            type: 'line',
            width: 52,
            height: 24,
            lineWidth: 2,
            lineColor: 'rgba(255, 255, 255, 0.16)',
            fillColor: 'rgba(255, 255, 255, 0.08)',
            minSpotColor: false,
		    maxSpotColor: false,
		    spotColor: false,
		    spotRadius: 0,
		    highlightSpotColor: '#fff',
		    highlightLineColor: '#fff'
        });

        //rightbar

		$("#rightbarpie1").sparkline([3,7,4], {
            type: 'pie',
            width: 24,
            height: 24,
            sliceColors: ['#fce4ec','#f6a5c0','#f06292']
        });

        $("#rightbartristate1").sparkline([4,7,0,1,-2,-4,2], {
		    type: 'tristate',
		    posBarColor: '#26c6da',
		    negBarColor: '#5c6bc0',
		    zeroBarColor: '#26c6da',
		    barWidth: 2,
		    barSpacing: 6,
		    height: 24,
		    zeroAxis: false
		});

		$("#rightbarbar1").sparkline([2,6,7,1,0,3,5], {
            type: 'bar',
            barWidth: 2,
            barSpacing: 6,
            height: 24,
            barColor: '#26a69a'
        });

        $("#rightbarline1").sparkline([2,6,7,1,0,3,5], {
            type: 'line',
            width: 52,
            height: 24,
            lineWidth: 2,
            lineColor: '#9ccc65',
            fillColor: '#e6f2d8',
            minSpotColor: false,
		    maxSpotColor: false,
		    spotColor: false,
		    spotRadius: 0,
		    highlightSpotColor: '#fff',
		    highlightLineColor: '#fff'
        });

        


		/*$("#currentbalance").sparkline([5,6,7,9,9,5,3,2,2,4,6,7], {
		    type: 'line',
		    lineColor: '#0000',
		    lineWidth: 0,
		    spotColor: undefined,
		    minSpotColor: undefined,
		    maxSpotColor: undefined,
		    drawNormalOnTop: false
		});

		$("#salesvolume").sparkline([5,6,7,9,9,5,3,2,2,4,6,7], {
		    type: 'line',
		    lineColor: '#0000',
		    lineWidth: 0,
		    spotColor: undefined,
		    minSpotColor: undefined,
		    maxSpotColor: undefined,
		    drawNormalOnTop: false
		});

		$("#salesvalue").sparkline([5,6,7,9,9,5,3,2,2,4,6,7], {
		    type: 'line',
		    lineColor: '#0000',
		    lineWidth: 0,
		    spotColor: undefined,
		    minSpotColor: undefined,
		    maxSpotColor: undefined,
		    drawNormalOnTop: false
		});
		
		$("#infobar-earningsstats").sparkline([120,160,130,230,170,200,80,60,150,190,240,320,290,200,240,190,130,150,230,180,80,20,90,110,200,240,210,250], {
	      type: 'line',
	      lineColor: '#6678c1',
	      fillColor: '#e9ecf5',
	      height: '32',
	      lineWidth: 1.125,
	      width: '100%',
	      spotRadius: 0
	    });

	    $("#infobar-orderstats").sparkline([240,200,230,180,170,120,90,30,100,120,180,150,190,270,280,320,250,170,230,170,90,110,200,190,220,110,150,130], {
	      type: 'line',
	      lineColor: '#7f96a0',
	      fillColor: '#edf0f2',
	      height: '32',
	      lineWidth: 1.125,
	      width: '100%',
	      spotRadius: 0
	    });

	    $("#infobar-earnings").sparkline([15700,4573,12145,11077,25380,24399,29158,17002,11201,13042], {
	      type: 'line',
	      lineColor: Utility.getBrandColor('primary'),
	      fillColor: Utility.getBrandColor('inverse'),
	      height: '32',
	      lineWidth: 1,
	      width: '100%'
	    });

	    $("#infobar-unitssold").sparkline([1532,3573,2141,6077,4280,5399,6158,3002,2201,1151], {
	      type: 'bar',
	      barColor: Utility.getBrandColor('inverse'),
	      barSpacing: 2,
	      height: '20',
	      barWidth: 3
	    });

	    $("#infobar-orders").sparkline([704,579,144,442,383,399,555,805,401,943], {
	      type: 'bar',
	      barColor: Utility.getBrandColor('inverse'),
	      barSpacing: 2,
	      height: '20',
	      barWidth: 3
	    });

	    $("#piedashboard").sparkline([3,1], {
            type: 'pie',
            sliceColors: ['rgb(228,228,228)','rgb(97,125,128)'],
            width: 120,
            height: 120
        });

	    $("#pie2").sparkline([1,1,1,1], {
		    type: 'pie',
		    width: '24',
		    height: '24',
		    sliceColors: ['#eeeeee','#eeeeee','#3f51b5','#eeeeee']
		});

		$("#pie3").sparkline([1,1,1,1], {
		    type: 'pie',
		    width: '24',
		    height: '24',
		    sliceColors: ['#eeeeee','#eeeeee','#3f51b5','#eeeeee']
		});

		$("#pie4").sparkline([1,1,1,1], {
		    type: 'pie',
		    width: '24',
		    height: '24',
		    sliceColors: ['#eeeeee','#eeeeee','#3f51b5','#eeeeee']
		});

		$("#pie5").sparkline([1,1,1,1], {
		    type: 'pie',
		    width: '24',
		    height: '24',
		    sliceColors: ['#eeeeee','#eeeeee','#3f51b5','#eeeeee']
		});

		$("#pie6").sparkline([1,1,1,1], {
		    type: 'pie',
		    width: '24',
		    height: '24',
		    sliceColors: ['#eeeeee','#eeeeee','#3f51b5','#eeeeee']
		});

        $("#sparkline-item2").sparkline([3,0,6,9,7,5,4,3,0,2,1], {
            type: 'bar',
            barSpacing:30,
            barWidth: 8,
            width: '100%',
            height: 210,
            barColor: '#8bc34a',
            disableInteraction: true,
            spotRadius: 0
        });*/
		

	//Demo Background Pattern

	$(".demo-blocks").click(function(){
		$('.layout-boxed').css('background',$(this).css('background'));
		return false;
	});

});




$(function() {
	$('ul.contact-list>li').on('mouseover', function (e) {

		$(this).children('.contact-card').appendTo('body').show();

		var scrolledAmount = $(document).scrollTop();
		var liTop = $(this).offset().top;
		var topAmount = scrolledAmount+liTop-scrolledAmount-12;

		$('.contact-card').css({top: topAmount+'px'});
		$('body>.contact-card').show();
		e.stopPropagation();
		e.preventDefault();
	});
	$('body').on('mouseover', function (e) {
		$('body>.contact-card').hide();
		$('body>.contact-card').appendTo($('#'+$('body>.contact-card').attr('data-child-of')));
	});
	$('.contact-card, ul.contact-list').on('mouseover', function (e) {
		e.stopPropagation();
		e.preventDefault();
	});
});

$(function() {

    $("#left ul li a").click(function(){
       	$("#right").addClass("leftnull");
    });

    $(".back").click(function(){
       	$("#right").removeClass("leftnull");
    });

});
