$(function() {

	var leftbarColors = "leftbar-default leftbar-graphite leftbar-holly leftbar-havana leftbar-haiti leftbar-bunting navbar-default navbar-graphite navbar-holly navbar-havana navbar-haiti navbar-bunting";
	var headerColors = "navbar-default navbar-graphite navbar-holly navbar-havana navbar-haiti navbar-bunting";

	//Show Switcher
		$(".demo-options-icon").click(function () {
			$('.demo-options').toggleClass("active");
		});

	//Switch: Fixed Header
		$('input[name="demo-fixedheader"]').on('switchChange.bootstrapSwitch', function(event, state) {
			$('#topnav').toggleClass("navbar-fixed-top navbar-static-top");
			Utility.rightbarTopPos();
		});

	//Switch: RTL
		$('input[name="demo-rtl"]').on('switchChange.bootstrapSwitch', function(event, state) {
			$('body').toggleClass('rtl');
		});

	//Switch: Boxed Layout
		$('input[name="demo-boxedlayout"]').on('switchChange.bootstrapSwitch', function(event, state) {
			//close infobar
			if ($('body').hasClass('infobar-active')) $('body').removeClass('infobar-active');


			//change to layout-boxed
			$('body').toggleClass('layout-boxed');
			Utility.autocollapse();

			window.wasOffcanvas = ($('body').hasClass('infobar-offcanvas') || !$('body').hasClass('layout-boxed'));
			if (wasOffcanvas) {
				$('body').toggleClass('infobar-offcanvas infobar-overlay');
			}

			$('.infobar-offcanvas .infobar-wrapper').css('transform', '');

			$('.layout-boxed .infobar-wrapper').css('display', '');

			if (($('body').hasClass('infobar-active')) || ($('body').hasClass('infobar-offcanvas'))) {
				$('.infobar-wrapper').show();
			}

			Utility.rightbarRightPos();
			Utility.rightbarTopPos();

			if (!($('body').hasClass('layout-boxed'))) {
				$('.infobar-wrapper').css('display','');
			}

			//switcher option changes
			$('input[name="demo-collapserightbar"]').bootstrapSwitch('state', false, true);
			$('#demo-boxes').toggleClass('hide');

			//remove bodybg when closed
			$('body:not(.layout-boxed)').css('background','');


		});

	//Switch: Leftbar
		$('input[name="demo-collapseleftbar"]').on('switchChange.bootstrapSwitch', function(event, state) {
			Utility.toggle_leftbar();
		});

	//Switch: Rightbar
		$('input[name="demo-collapserightbar"]').on('switchChange.bootstrapSwitch', function(event, state) {
			Utility.toggle_rightbar();
		});

	//Switch Horizicons
		$('input[name="demo-horizicons"]').on('switchChange.bootstrapSwitch', function(event, state) {
				//if ($('#horizontal-navbar').hasClass('large-icons-nav')) {
					$('#horizontal-navbar').toggleClass('large-icons-nav');
				//}
		});


	//Detect Changes in main file


		function leftmenu_switchchange() {
			if ($('body').hasClass('leftbar-collapsed')) {
		    	$('input[name="demo-collapseleftbar"]').bootstrapSwitch('state', true, true);
		    } else {
		    	$('input[name="demo-collapseleftbar"]').bootstrapSwitch('state', false, true);
		    }
		}

		function rightmenu_switchchange() {
			if ($('body').hasClass('infobar-active')) {
		    	$('input[name="demo-collapserightbar"]').bootstrapSwitch('state', false, true);
		    } else {
		    	$('input[name="demo-collapserightbar"]').bootstrapSwitch('state', true, true);
		    }
		    	
		    try {
		    	if (vFSLayout.state.east.isClosed) {
		    		$('input[name="demo-collapserightbar"]').bootstrapSwitch('state', true, true);
		    	} else {
		    		$('input[name="demo-collapserightbar"]').bootstrapSwitch('state', false, true);
		    	}
		    } catch(e) {}
		}

		function boxedlayout_switchchange() {
			if ($('body').hasClass('layout-boxed')) {
		    	$('input[name="demo-boxedlayout"]').bootstrapSwitch('state', true, true);
		    	$('#demo-boxes').removeClass('hide');
		    } else {
		    	$('input[name="demo-boxedlayout"]').bootstrapSwitch('state', false, true);
		    }

		    if ($('#layout-fixed').hasClass('ui-layout-container')) {
		    	$('input[name="demo-boxedlayout"]').bootstrapSwitch('disabled', true);
		    	$('input[name="demo-fixedheader"]').bootstrapSwitch('disabled', true);

		    	//hacky but works - switches on the leftbar
				$('input[name="demo-collapseleftbar"]').bootstrapSwitch('state', true, true);		    	
		    }

		}


		function horizlayout_switchchange() {
			if ($('body').hasClass('horizontal-nav')) {
				$('#demo-horizicon').removeClass('hide');
				$('#demo-colleft').addClass('hide');

				if ($('#horizontal-navbar').hasClass('large-icons-nav')) {
					$('input[name="demo-horizicons"]').bootstrapSwitch('state',false, true);
				} else {
					$('input[name="demo-horizicons"]').bootstrapSwitch('state',true, true);
				}
			}
		}

		function fixedheader_switchchange() {
			if (($('.full-height-content'))==true) {
				$('input[name="demo-fixedheader"]').bootstrapSwitch('disabled', true);
			}
		}

		$('#leftmenu-trigger').click(function () {
			leftmenu_switchchange();
		});
		$('#rightmenu-trigger').click(function () {
		    rightmenu_switchchange();
		});

		$(document).ready(function () {
			leftmenu_switchchange();
			rightmenu_switchchange();
			boxedlayout_switchchange();
			horizlayout_switchchange();
			fixedheader_switchchange();




			//TODO: Check in Fixed leftbar Mode

			var navColor = localStorage.getItem('navbar-color');
			if (navColor) {
				$('#topnav').removeClass(headerColors).addClass(navColor);
			}

			var sideColor = localStorage.getItem('leftbar-color');
			if (sideColor) {
				$('.static-leftbar-wrapper, .fixed-leftbar-wrapper').removeClass(leftbarColors).addClass('leftbar-' + sideColor);
				$('#headernav').removeClass(leftbarColors).addClass('navbar-' + sideColor);
			}

		});






		//Header Navbar Styles
			$('#demo-header-color span').click(function() {
				if ($(this).hasClass("demo-mirage")) {
					$('#topnav').removeClass(headerColors).addClass('navbar-default');
					localStorage.setItem('navbar-color','navbar-default');
				}

				if ($(this).hasClass("demo-graphite")) {
					$('#topnav').removeClass(headerColors).addClass('navbar-graphite');
					localStorage.setItem('navbar-color','navbar-graphite');
				}

				if ($(this).hasClass("demo-holly")) {
					$('#topnav').removeClass(headerColors).addClass('navbar-holly');
					localStorage.setItem('navbar-color','navbar-holly');
				}

				if ($(this).hasClass("demo-havana")) {
					$('#topnav').removeClass(headerColors).addClass('navbar-havana');
					localStorage.setItem('navbar-color','navbar-havana');
				}

				if ($(this).hasClass("demo-haiti")) {
					$('#topnav').removeClass(headerColors).addClass('navbar-haiti');
					localStorage.setItem('navbar-color','navbar-haiti');
				}

				if ($(this).hasClass("demo-bunting")) {
					$('#topnav').removeClass(headerColors).addClass('navbar-bunting');
					localStorage.setItem('navbar-color','navbar-bunting');
				}

			});

		//leftbar Navbar Styles
			$('#demo-sidebar-color span').click(function() {
				if ($(this).hasClass("demo-mirage")) {
					$('.static-leftbar-wrapper, .fixed-leftbar-wrapper').removeClass(leftbarColors).addClass('leftbar-default');
					$('#wrapper>nav.navbar').removeClass(leftbarColors).addClass('navbar-default');

					localStorage.setItem('leftbar-color',"default");
				}

				if ($(this).hasClass("demo-graphite")) {
					$('.static-leftbar-wrapper, .fixed-leftbar-wrapper').removeClass(leftbarColors).addClass('leftbar-graphite');
					$('#wrapper>nav.navbar').removeClass(leftbarColors).addClass('navbar-graphite');

					localStorage.setItem('leftbar-color',"graphite");
				}

				if ($(this).hasClass("demo-holly")) {
					$('.static-leftbar-wrapper, .fixed-leftbar-wrapper').removeClass(leftbarColors).addClass('leftbar-holly');
					$('#wrapper>nav.navbar').removeClass(leftbarColors).addClass('navbar-holly');

					localStorage.setItem('leftbar-color',"holly");
				}

				if ($(this).hasClass("demo-havana")) {
					$('.static-leftbar-wrapper, .fixed-leftbar-wrapper').removeClass(leftbarColors).addClass('leftbar-havana');
					$('#wrapper>nav.navbar').removeClass(leftbarColors).addClass('navbar-havana');

					localStorage.setItem('leftbar-color',"havana");
				}

				if ($(this).hasClass("demo-haiti")) {
					$('.static-leftbar-wrapper, .fixed-leftbar-wrapper').removeClass(leftbarColors).addClass('leftbar-haiti');
					$('#wrapper>nav.navbar').removeClass(leftbarColors).addClass('navbar-haiti');

					localStorage.setItem('leftbar-color',"haiti");
				}

				if ($(this).hasClass("demo-bunting")) {
					$('.static-leftbar-wrapper, .fixed-leftbar-wrapper').removeClass(leftbarColors).addClass('leftbar-bunting');
					$('#wrapper>nav.navbar').removeClass(leftbarColors).addClass('navbar-bunting');

					localStorage.setItem('leftbar-color',"bunting");
				}

			});

		//Boxed Backgrounds
			$('#demo-boxed-bg span').click(function() {
				$('body.layout-boxed').css('background', $(this).css('background'));
			});

		//Fixed Header

			$('#demo-fixedheader').click(function () {
				$('body>header.navbar').toggleClass('navbar-fixed-top navbar-static-top');
			});

		//Reset to default style
			$('.demo-reset').click(function () {
				if (!($('header.navbar').hasClass('navbar-inverse'))) {
					$('header.navbar').addClass('navbar-inverse');
				}
			});
});