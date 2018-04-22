// ------------------------------
// Browser Detection Plugin
// https://github.com/gabceb/jquery-browser-plugin/
// ------------------------------
!function(a,b){"use strict";var c,d;if(a.uaMatch=function(a){a=a.toLowerCase();var b=/(opr)[\/]([\w.]+)/.exec(a)||/(chrome)[ \/]([\w.]+)/.exec(a)||/(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("trident")>=0&&/(rv)(?::| )([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[],c=/(ipad)/.exec(a)||/(iphone)/.exec(a)||/(android)/.exec(a)||/(windows phone)/.exec(a)||/(win)/.exec(a)||/(mac)/.exec(a)||/(linux)/.exec(a)||/(cros)/i.exec(a)||[];return{browser:b[3]||b[1]||"",version:b[2]||"0",platform:c[0]||""}},c=a.uaMatch(b.navigator.userAgent),d={},c.browser&&(d[c.browser]=!0,d.version=c.version,d.versionNumber=parseInt(c.version)),c.platform&&(d[c.platform]=!0),(d.android||d.ipad||d.iphone||d["windows phone"])&&(d.mobile=!0),(d.cros||d.mac||d.linux||d.win)&&(d.desktop=!0),(d.chrome||d.opr||d.safari)&&(d.webkit=!0),d.rv){var e="msie";c.browser=e,d[e]=!0}if(d.opr){var f="opera";c.browser=f,d[f]=!0}if(d.safari&&d.android){var g="android";c.browser=g,d[g]=!0}d.name=c.browser,d.platform=c.platform,a.browser=d}(jQuery,window);


// ------------------------------
// Variables
// ------------------------------

// AutoCollapse 
// Doesn't matter how many items you many have in the header, it stays responsive :3
// Just hardcode the height of the header
var headerHeight = 50; // Also have the same height in @navbar-height in variables.less

var vFSLayout; //for Stretch leftbars

// ------------------------------
// =UTILITY BELT
// Psst: Search for '=u' to come straight here. You're welcome.
// ------------------------------
var Utility = {
    str_replace: function(c, d, b) {
        var a = c.split(d);
        return a.join(b);
    },
    str_exists: function(b, c) {
        var a = b.split(c);
        if (a[0] === b) {
            return false;
        } else {
            return true;
        }
    },
    toggle_fullscreen: function(elem) {
        // can fullscreen any element
        if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
            if (elem.requestFullScreen) {
                elem.requestFullScreen();
            } else if (elem.mozRequestFullScreen) {
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullScreen) {
                elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
            }
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
    },
    getViewPort: function() {
        var e = window, a = 'inner';
        if (!('innerWidth' in window)) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        return {
            width: e[a + 'Width'],
            height: e[a + 'Height']
        };
    },
    getleftbarViewportHeight: function () {
        var h;
        if ($('body').hasClass('infobar-offcanvas')) {
          h = $(window).height();
        } else {
            h = $(window).height() - headerHeight;
        }
        return h;
    },
    leftbar_resizing: function() {
        if ($('#topnav').hasClass('navbar-fixed-top')) {
            // $('.static-leftbar').css('top', headerHeight + 'px');
        } else {
            var scr = $('body').scrollTop();

            $('.static-leftbar').css('top', '0px');


            if (scr < headerHeight) {
                $('.static-leftbar').css('top',(headerHeight - scr) + 'px');
            } else {
                $('.static-leftbar').css('top','0px');
            }
        }

        enquire.register("screen and (max-width: 767px)", {
            match : function() {
                //small
                if (!($('body').hasClass('leftbar-scroll'))) { //if not already added
                    $('.static-leftbar').addClass('scroll-pane');
                    $('.static-leftbar > .leftbar').addClass('scroll-content');
                }
                if ($('body').hasClass('layout-horizontal')) {
                    $('body').removeClass('layout-horizontal').addClass('layout-horizontal-ignored');
                } else if ($('body').hasClass('leftbar-small')) {
                    $('body').removeClass('leftbar-small').addClass('leftbar-small-ignored');
                }
                Utility.initScroller();
            },  
            unmatch : function() {
                //big
                if (!($('body').hasClass('leftbar-scroll'))) { //if not already added
                    $('.static-leftbar').removeClass('scroll-pane has-scrollbar');
                    $('.static-leftbar > .leftbar').removeClass('scroll-content').css('margin-right','');
                }
                if ($('body').hasClass('layout-horizontal-ignored')) {
                    $('body').removeClass('layout-horizontal-ignored').addClass('layout-horizontal');
                } else if ($('body').hasClass('leftbar-small-ignored')) {
                    $('body').removeClass('leftbar-small-ignored').addClass('leftbar-small');
                }
                Utility.initScroller();
            }
        });
    },
    initScroller: function() {
       // $(".scroll-pane").nanoScroller({ paneClass: 'scroll-track',  sliderClass: 'scroll-thumb', contentClass: 'scroll-content' });
    },
    // resizePageHeight: function() {
    //     var v = Utility.getViewPort().height;
    //     var f = $('footer').height();
    //     var h = 0;


    //    if ($('#layout-fixed').hasClass('ui-layout-container')) {
    //        // var f = $('footer').height();
    //        // $('.fixed-content-wrapper').height( $('.ui-layout-center').height() - f + 20 );

    //    } else {
    //         var c = $("#wrapper").height();

    //         if ($('#topnav').hasClass('navbar-fixed-top')) {
    //            h = headerHeight;
    //         }

    //         if (c > v) {
    //             $("#wrapper").height(c-h+f-20);
    //         }
    //    }
    // },
    getBrandColor: function (name) {
        // Store Brand colors in JS so it can be called from plugins
        var brandColors = {
            'default':      '#ecf0f1',
            'gray':         '#aaa',

            'inverse':      '#95a5a6',
            'primary':      '#3498db',
            'success':      '#2ecc71',
            'warning':      '#f1c40f',
            'danger':       '#e74c3c',
            'info':         '#1abcaf',
            
            'brown':        '#c0392b',
            'indigo':       '#9b59b6',
            'orange':       '#e67e22',
            'midnightblue': '#34495e',
            'sky':          '#82c4e6',
            'magenta':      '#e73c68',
            'purple':       '#e044ab',
            'green':        '#16a085',
            'grape':        '#7a869c',
            'toyo':         '#556b8d',
            'alizarin':     '#e74c3c'
        };

        if (brandColors[name]) {
            return brandColors[name];
        } else {
            return brandColors['default'];
        }
    },
    toggle_leftbar: function() {
        var menuCollapsed = localStorage.getItem('collapsed_menu');
        
        try {
            vFSLayout.toggle('west');
        } catch (e) {
            $('body').toggleClass('leftbar-collapsed');
        }

        if (!$('body').hasClass('leftbar-collapsed')) {
            localStorage.setItem('collapsed_menu', "false");
            $("#trigger-leftbar .icon-bg i").toggleClass('ti-shift-left ti-shift-right');
        }
        else if ($('body').hasClass('leftbar-collapsed')) {
            localStorage.setItem('collapsed_menu', "true");
            $("#trigger-leftbar .icon-bg i").toggleClass('ti-shift-left ti-shift-right');
        }
        setTimeout(function(){                  // wait 500ms before calling resize
            $(window).trigger('resize');        // so toggle happens faster instead of
        }, 500);                                // sticking out
    },
    toggle_rightbar: function() {
        try {
            vFSLayout.toggle('east');
        } catch (e) {
            if ($('body').hasClass('infobar-overlay')) {
                $('.infobar-wrapper').css('transform','');
            }

            $('body').toggleClass('infobar-active');

            //in layout-boxed pages, toggle visibility instead of animation
            if ($('body').hasClass('layout-boxed')) {
                Utility.rightbarRightPos();
            }
            Utility.rightbarTopPos();
        }
    },
    rightbarTopPos: function() {
    var scr = $('body').scrollTop();

        if ($('body').hasClass('infobar-overlay')) {
            if ($('body>header, body.horizontal-nav>#wrapper>header').hasClass('navbar-fixed-top')) {
                if ($('body.infobar-overlay').hasClass('infobar-active')) {
                    $('.infobar-wrapper').css('transform','translate(0, 48px)');
                }
            } else {
                // if ($('body.infobar-overlay').hasClass('infobar-active')) {
                //     if (scr < headerHeight) {
                //         $('.infobar-wrapper').css('transform','translate(0, '+ (48 - scr)+ 'px)');
                //     } else {
                //         $('.infobar-wrapper').css('transform','translate(0, 0)');
                //     }
                // }
            }
        }
    },
    // -------------------------------
    // Rightbar Right Position (in layout-boxed)
    // -------------------------------
    rightbarRightPos: function() {
        //Set Right position for fixed layouts
        $('.infobar-wrapper').css('right','0').hide();

        if ($('body').hasClass('layout-boxed')) {
            var $pc = $('#wrapper');
            var ending_right = ($(window).width() - ($pc.offset().left + $pc.outerWidth()));
            if (ending_right<0) ending_right=0;
            $('.infobar-active.infobar-overlay .infobar-wrapper').css('right',ending_right);

            $('.infobar-wrapper').show();
        }
    },
    // -------------------------------
    // Auto Collapse Large Menu
    // -------------------------------
    autocollapse: function() {
        var navbar = $('header.navbar');
        var menu = $('header.navbar .navbar-collapse');

        $('body').removeClass('topnav-collapsed');
        $('#topnav .navbar-left').addClass('in');
        $('#navbar-links-toggle').parent('li').hide();
        $(menu).insertAfter('header.navbar a.navbar-brand');


        if((navbar.innerHeight() > headerHeight) || ($(window).innerWidth()<786)) { // check if we've got 2 lines Or less than 786px

            $('body').addClass('topnav-collapsed');
            $('#topnav .navbar-left').removeClass('in');
            $('#navbar-links-toggle').parent('li').show();

            navbar.append(menu.detach());
        }
    },

    initScroller: function() {
        //$(".scroll-pane").nanoScroller({ paneClass: 'scroll-track',  sliderClass: 'scroll-thumb', contentClass: 'scroll-content' });
    }
    
};
// ------------------------------
// =/U
// ------------------------------


// ------------------------------
// =PLUGINS. custom made shizzle, yo!
// ------------------------------
(function($) {


    // ------------------------------
    // Scrollleftbar
    // ------------------------------
    $.scrollleftbar = function(element, options) {
        var defaults = {};
        var plugin = this;

        plugin.settings = {};
        var $element = $(element),
            element = element;

    }
    $.fn.scrollleftbar = function(options) {
        return this.each(function() {
            if (undefined == $(this).data('scrollleftbar')) {
                var plugin = new $.scrollleftbar(this, options);
                $(this).data('scrollleftbar', plugin);
            };
        });
    };


    // ------------------------------
    // leftbar Accordion Menu
    // ------------------------------
    $.leftbarAccordion = function(element, options) {
        var defaults = {};
        var plugin = this;

        plugin.settings = {};
        var $element = $(element),
            element = element;

        plugin.init = function() {
            plugin.settings = $.extend({}, defaults, options);

            var menuCollapsed = localStorage.getItem('collapsed_menu');
            if (menuCollapsed === null) {
                localStorage.setItem('collapsed_menu', "false");
            }
            if (menuCollapsed === "true") {
                if(!$('body').hasClass('leftbar-small') && !$('body').hasClass('layout-horizontal')) {
                    $('body').addClass('leftbar-collapsed');
                }
            }

            $('body').on('click', 'ul.acc-menu a', function() {
                var LIs = $(this).closest('ul.acc-menu').children('li');
                $(this).closest('li').addClass('clicked');
                $.each( LIs, function(i) {
                    var li = $(LIs[i]);
                    if( li.hasClass('clicked') ) {
                        li.removeClass('clicked');
                        return true;
                    }
                    li.children('ul.acc-menu').removeClass('visible').css('height', '0');
                    li.removeClass('open');
                });

                if (!($('body').hasClass('leftbar-collapsed') || $('body').hasClass('leftbar-small')) || $(this).parents('ul.acc-menu').length > 1) {
                    if($(this).parent().children('ul.acc-menu.visible').length>0) {
                        $(this).closest('li').removeClass('open');
                        $(this).siblings('ul.acc-menu').removeClass('visible').css('height', '0');
                    } else {
                        $(this).closest('li').addClass('open');
                        $(this).siblings('ul.acc-menu').addClass('visible').css('height', 'auto');
                    }
                }
            });

            var targetAnchor;
            $.each ($('ul.acc-menu a'), function() {
                if( this.href == window.location ) {
                    targetAnchor = this;
                    return false;
                };
            });

            var parent = $(targetAnchor).closest('li');
            while(true) {
                parent.addClass('active');
                parent.closest('ul.acc-menu').addClass('visible').css('height', 'auto').closest('li').addClass('open');
                parent = $(parent).parents('li').eq(0);
                if( $(parent).parents('ul.acc-menu').length <= 0 ) break;
            };

            var liHasUlChild = $('li').filter(function() {
                return $(this).find('ul.acc-menu').length;
            });
            $(liHasUlChild).addClass('hasChild');

        };
        plugin.init();
    }
    $.fn.leftbarAccordion = function(options) {
        return this.each(function() {
            if (undefined === $(this).data('leftbarAccordion')) {
                var plugin = new $.leftbarAccordion(this, options);
                $(this).data('leftbarAccordion', plugin);
            }
        });
    }

    // ------------------------------
    // Full Height Panel
    // ------------------------------
    $.fullHeightPanel = function(element, options) {
        var defaults = {};
        var plugin = this;
        plugin.settings = {};
        var $element = $(element),
            element = element;

        plugin.init = function() {
            plugin.settings = $.extend({}, defaults, options);
            
            try {
                fullHeightResizer();
            } catch(e) {
                // Do nothing
            }
        }

        var fullHeightResizer = function() {
            var t = Utility.getViewPort().height - $('.full-height-content').offset().top;
            var f = ($('footer').height() + parseInt($('.static-content').css('margin-bottom').replace('px', '')));
            
            if ($('.full-height-content.panel-body').size() === 1) { 
                $('.full-height-content').height(t-f-41); //if full-height-panel
            } else {
                $('.full-height-content').height(t-f+10); //if full-height-body
            }
        }

        plugin.init();
    }
    $.fn.fullHeightPanel = function(options) {

        return this.each(function() {
            if (undefined == $(this).data('fullHeightPanel')) {
                var plugin = new $.fullHeightPanel(this, options);
                $(this).data('fullHeightPanel', plugin);
            }
        });
    }

})(jQuery);
// ------------------------------
// =/P
// ------------------------------


// ------------------------------
// =DOM Ready
// ------------------------------
$(document).ready(function () {
    // Add These To support nanoScroller
    if ($('body').hasClass('leftbar-scroll')) {
        $('.static-leftbar').addClass('scroll-pane');
        $('.leftbar').addClass('scroll-content');
    }

    // Scrollbar and reinitting scrollbars
    Utility.initScroller();
    $('.toolbar').on('shown.bs.dropdown', function () {Utility.initScroller();});
    $('.widget').on('shown.bs.collapse', function () {Utility.initScroller();});
    $('.widget').on('hidden.bs.collapse', function () {Utility.initScroller();});

    $('header').on('shown.bs.dropdown', function (event) {
        if ($(document).width() > 752) return;
        var target = $(event.target);
        var ulHeight = target.find('ul').height();
        setTimeout(function () {
            target.attr('data-margin-bottom', ulHeight);
            target.attr('data-ul-top', anchorHeight);
        }, 200);
    });
    $('header').on('hidden.bs.dropdown', function (event) {
        if ($(document).width() > 752) return;
        var target = $(event.target);
        target.css({
            marginBottom: target.attr('data-margin-bottom')+'px',
        });
        target.animate({
            marginBottom: 0+'px',
        }, 200);
    });


    Utility.leftbar_resizing();

    // ------------------------------
    // leftbar Accordion
    // ------------------------------
    $('body').leftbarAccordion();

    // ------------------------------
    // Full Height Panel
    // ------------------------------
    if ($('.full-height-content')) {
        $('body').fullHeightPanel();
    }

    // ------------------------------
    // Fixed leftbar Layout
    // ------------------------------

    try {
        vFSLayout = $('#layout-fixed').layout({
            togglerLength_open:0, // hide toggle button
            west__minSize : 248,  // leftbar
            east__minSize : 248,   // infobar

            center__onresize:           Utility.initScroller,
            west__onresize:             Utility.initScroller,
            east__onresize:             Utility.initScroller
        });

        // Closes and opens left and rightbar in small or big screens
        enquire.register("screen and (max-width: 767px)", {
            match : function() {
                //small
                vFSLayout.close('west');
                vFSLayout.close('east');
            },  
            unmatch : function() {
                //big
                vFSLayout.open('west');
                vFSLayout.open('east');
            },
            deferSetup : true
        });
    } catch(e) {
        // Code above is only executed in a page with #layout-fixed.
        // Requires js/jquery.layout.min.js to be loaded.
        // For more info, refer to documentation
    }

    // ------------------------------
    // Toggling leftbars
    // ------------------------------
    $('#trigger-leftbar>a').click(function () {
        Utility.toggle_leftbar();
    });

    $('#trigger-fullscreen').click(function () {
        Utility.toggle_fullscreen(document.documentElement);
    });    

    $('#trigger-infobar>a').click(function () {
        Utility.toggle_rightbar();
    });

    // ------------------------------
    // Megamenu
    // This code will prevent unexpected menu close 
    // when using some components (like accordion, forms, etc)
    // ------------------------------
    $('body').on('click', '.yamm .dropdown-menu, .dropdown-menu-form', function(e) {
      e.stopPropagation()
    })
    
    // -------------------------------
    // For tabs inside dropdowns
    // -------------------------------
    $('.dropdown-menu a[data-toggle="tab"]').click(function (e) {
        e.stopPropagation();
        $(this).tab('show');
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $(this).closest('.dropdown').removeClass('active');        
    });

    // -------------------------------
    // Back to Top button
    // -------------------------------
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    // -------------------------------
    // Panel Collapses
    // -------------------------------
    $('a.panel-collapse').click(function() {
        $(this).children().toggleClass("fa-chevron-down fa-chevron-up");
        $(this).closest(".panel-heading").next().slideToggle({duration: 200});
        $(this).closest(".panel-heading").toggleClass('rounded-bottom');
        return false;
    });

    // -------------------------------
    // Quick Start
    // -------------------------------
    $('#headerbardropdown').click(function() {
        $('#headerbar').css({'top':0, 'bottom': 0, 'height': '100%'});
         
        return false;
    });

    $('#headerbardropdown').click(function(event) {
      $('html').one('click',function() {
        $('#headerbar').css('top','-1000px');
      });

      event.stopPropagation();
    });

    $('#headerbar .yamm-content').click(function(e){
        e.preventDefault();
    });

   /* $("#headerbardropdownleft").click(function(){
         $('#headerbarleft').css('top',0);
         $(".acc-menu").hide();
         $('#headerbarleft').css('display',"block");
         return false;
    })

    $('#headerbardropdownleft').click(function(event) {
      $('html').one('click',function() {
        $('#headerbarleft').css('display',"none");
        $(".acc-menu").show();
        //alert("");
        //$('#headerbarleft').css('top','-1000px');
      });

      event.stopPropagation();
    });*/




    // -------------------------------
    // Project Switcher
    // -------------------------------

    // ADD SLIDEDOWN ANIMATION TO DROPDOWN //
    $('.project-switcher').on('show.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(200);
    });

    // ADD SLIDEUP ANIMATION TO DROPDOWN //
    $('.project-switcher').on('hide.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
    });


    // -------------------------------
    // FireFox Shim
    // FireFox is the *only* browser that doesn't support position:relative for
    // block elements with display set to table-cell, which is needed for the footer.
    // TODO: Replace $.browser with Modernizer.
    // -------------------------------
    if ($.browser.mozilla) {
        $('footer').css('width',$('footer').parent().width());

        $(window).on('resize', function() {
            $('footer').css('width',$('footer').parent().width());
        });
    }

    // ---------------------------------
    // Faux Off-cavas effect on collapse
    // ---------------------------------
    if (!(vFSLayout)) {
        enquire.register("screen and (max-width: 767px)", {
            match : function() {  //smallscreen
                $('body').addClass('leftbar-collapsed');

                if ($('body').hasClass('leftbar-collapsed')) {
                    setWidthtoContent();
                }
                $(window).on('resize', setWidthtoContent);
            },
            unmatch : function() {  //bigscreen
                $('body').removeClass('leftbar-collapsed');

                $('.static-content').css('width','');
                $(window).off('resize', setWidthtoContent);
            }
        });
    }
        
    function setWidthtoContent() {
        var w = $('#wrapper').innerWidth();
        $('.static-content').css('width',(w)+'px');
    }

    // -------------------------------
    // Search on Top
    // -------------------------------
    $('.search-toggler').click( function() {
        $(this).siblings('#leftbar-search').toggleClass('open');
        $(this).find('i').toggleClass('fa-times fa-search');
    });


    $('#widget-search').click(function(event) {
      $('html').one('click',function() {
        $('#leftbar-search').removeClass('open');
        $('.search-toggler i').removeClass('fa-times').addClass('fa-search');
      });

      event.stopPropagation();
    });

    // Autocollapse
    Utility.autocollapse();

});
// ------------------------------
// =/D No more D for you.
// ------------------------------


// ------------------------------
// Keyup
// ------------------------------
$(document).keyup(function(e) {

    // Infobar Close on Keypress Esc
    if (e.keyCode == 27) { // esc key
        try {
            vFSLayout.close('east');
        } catch (e) {
            if ($('body').hasClass('infobar-active')) {
                Utility.toggle_rightbar();
            }

        }
    }
});

// nav doc scroll
$(function () {
    var scrollLocked = false;
    var lastHoverItem = -1;
    var navWidth = $('nav').width();
    var navItemsWidth = $('nav > .acc-menu')[0].scrollWidth;
    var leftHotZoneTimer = -1;
    var rightHotZoneTimer = -1;
    $(window).resize(function () {
        navWidth = $('nav').width();
        navItemsWidth = $('nav > .acc-menu')[0].scrollWidth;
    })
    // var lastMousePos = 0;
    $('nav').on('mousemove', function(e) {
        if (!$('body').hasClass('layout-horizontal') || scrollLocked) return true;
        // var navHoverPc = (e.pageX-200)/navWidth;
        // // if (Math.abs(e.pageX-lastMousePos)>64) {
        // // if (e.pageX>200 && e.pageX<(navWidth-200)) {
        // var ml = 0;
        // if (navHoverPc>=0.0 && navHoverPc <= 1.0) {
        //     ml = (navItemsWidth-navWidth-400)*navHoverPc;
        // }
        // if (navHoverPc<0.0) {
        //     ml = 0;
        // }
        // if (navHoverPc>1.0) {
        //     ml = (navItemsWidth-navWidth-400);
        // }
        // .css('margin-left', '-'+ml+'px');
        // }
        // lastMousePos = e.pageX;
        if($('body').hasClass('rtl')) {
            var navMenu = $('nav > .acc-menu');
            var currentMl = parseInt(navMenu.css('margin-right').replace('px', ''));
            var navHoverPc = 100*(e.pageX)/navWidth;
            if (navHoverPc<10.0) {
                if (rightHotZoneTimer) clearInterval(rightHotZoneTimer);
                if (leftHotZoneTimer) clearInterval(leftHotZoneTimer);
                leftHotZoneTimer = setInterval(function () {
                    // console.log(currentMl);
                    currentMl-=10;
                    if (currentMl<-(navItemsWidth-navWidth)) {
                        currentMl = -navItemsWidth+navWidth;
                        navMenu.css('margin-right', currentMl+'px');
                        clearInterval(leftHotZoneTimer);
                    }
                    navMenu.css('margin-right', currentMl+'px');
                   //console.log(currentMl);
                }, 10);
            } else if (navHoverPc>90.0) {
                if (leftHotZoneTimer) clearInterval(leftHotZoneTimer);
                if (rightHotZoneTimer) clearInterval(rightHotZoneTimer);
                rightHotZoneTimer = setInterval(function () {
                    // console.log(currentMl);
                    currentMl+=10;
                    if (currentMl>0) {
                        currentMl = 0;
                        //currentMl = -navItemsWidth+navWidth;
                        navMenu.css('margin-right', currentMl+'px');
                        clearInterval(rightHotZoneTimer);
                    }
                    navMenu.css('margin-right', currentMl+'px');

                }, 10);
            } else {
                if (rightHotZoneTimer) clearInterval(rightHotZoneTimer);
                if (leftHotZoneTimer) clearInterval(leftHotZoneTimer);
            }
            return true;
        }
        var navMenu = $('nav > .acc-menu');
        var currentMl = parseInt(navMenu.css('margin-left').replace('px', ''));
        var navHoverPc = 100*(e.pageX)/navWidth;
        if (navHoverPc<10.0) {
            if (rightHotZoneTimer) clearInterval(rightHotZoneTimer);
            if (leftHotZoneTimer) clearInterval(leftHotZoneTimer);
            leftHotZoneTimer = setInterval(function () {
                // console.log(currentMl);
                currentMl+=10;
                if (currentMl>0) {
                    currentMl = 0;
                    navMenu.css('margin-left', currentMl+'px');
                    clearInterval(leftHotZoneTimer);
                }
                navMenu.css('margin-left', currentMl+'px');
            }, 10);
        } else if (navHoverPc>90.0) {
            if (leftHotZoneTimer) clearInterval(leftHotZoneTimer);
            if (rightHotZoneTimer) clearInterval(rightHotZoneTimer);
            rightHotZoneTimer = setInterval(function () {
                // console.log(currentMl);
                currentMl-=10;
                if (currentMl<-(navItemsWidth-navWidth)) {
                    currentMl = -navItemsWidth+navWidth;
                    navMenu.css('margin-left', currentMl+'px');
                    clearInterval(rightHotZoneTimer);
                }
                navMenu.css('margin-left', currentMl+'px');
            }, 10);
        } else {
            if (rightHotZoneTimer) clearInterval(rightHotZoneTimer);
            if (leftHotZoneTimer) clearInterval(leftHotZoneTimer);
        }
    });
    $('nav').on('mouseleave', function(e) {
        if (rightHotZoneTimer) clearInterval(rightHotZoneTimer);
        if (leftHotZoneTimer) clearInterval(leftHotZoneTimer);
    });
    // $('nav>ul.acc-menu>li>a').on('mouseenter', function () {
    //     if (lastHoverItem !== this) {
    //         scrollLocked = false;
    //         lastHoverItem = this;
    //     }
    //     setTimeout(function () {
    //         scrollLocked = true;
    //         console.log(scrollLocked, lastHoverItem);
    //     }, 100);
    // });
});

// ------------------------------
// DOM Loaded
// ------------------------------
$(window).bind("load", function() { 
    try {
        $('body').scrollleftbar();
        $(window).trigger('resize');
    } catch (e) {
        // nada
    }
});


$(window).scroll(function(){
    Utility.leftbar_resizing();
});

$(window).resize(function(){
    //Utility.resizePageHeight();
    Utility.autocollapse();

    Utility.leftbar_resizing();
    // Utility.initScroller();
});

$(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).innerHeight();
    $('.infobar-wrapper.scroll-pane.fixedHeight').css('height', windowHeight - 56);
  }
  setHeight();
  $(window).resize(function() {
    setHeight();
  });
});