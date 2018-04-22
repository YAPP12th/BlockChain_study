/*! 
 * wijets v0.1.2
 * http://ndevrstudios.com
 * 
 * by Shifat Adnan
 * adnan.pri@gmail.com
 *
 * Copyright (c) 2014, Ndevr Studios Ltd.
 * All rights reserved 
 * 
 */

$.wijets = function () {
	var self = this;

	this.actionDefinitions = {};

	this.registerAction = function (definition) {
		self.actionDefinitions[definition.handle] = definition;
	};

	$.fn.pushWidgetControls = function () {
		var controlsContainer = $(this).closest('[data-widget]').find('[data-widget-controls]');
		// console.log(controlsContainer.data('currentControls'), $(this).data('actionDefinition').handle);
		if (controlsContainer.data('currentControls') == $(this).data('actionDefinition').handle) return null;

		var controlsHtml = $($(this).data('actionDefinition').controls);
		controlsContainer.data('currentControls', $(this).data('actionDefinition').handle);

		if (controlsContainer.children().length) {
			var controlsHtml = $($(this).data('actionDefinition').controls);
			controlsHtml.hide();
			controlsContainer.append(controlsHtml);
			controlsHtml.show();
			// .slideDown(null, 'linear', function () {
			// });
				controlsContainer.parent().toggleClass('editbox-open');

			controlsHtml.siblings().hide();//.slideUp(null, 'linear', function () {
				// $(this).remove();
			// });
		} else {
			controlsHtml.show();
			controlsContainer.append(controlsHtml);
			controlsContainer.slideDown(0, 'linear', function () {
				controlsContainer.parent().toggleClass('editbox-open');
			});
		}


		return controlsHtml;
	};

	$.fn.hideWidgetControls = function (withEffect) {
		var controlsContainer = $(this).closest('[data-widget]').find('[data-widget-controls]');
		if (withEffect) {
			controlsContainer.slideUp(0, 'linear', function () {
				controlsContainer.empty();
				controlsContainer.data('currentControls', "");
				controlsContainer.parent().toggleClass('editbox-open');
			});
		} else {
			controlsContainer.empty();
			controlsContainer.hide();
			controlsContainer.data('currentControls', "");
			controlsContainer.parent().toggleClass('editbox-open');
		}
	};

	$.fn.getWidgetState = function (state) {
		var currentState = undefined;
		var widgetParameters = $($(this).data('parentWidget')).data('widgetParameters');
		if (widgetParameters) { // there are parameters
			// check in localStorage
			if (widgetParameters.id) {
				// console.log($($(this).data('parentWidget')).data('widgetId')+'.'+state);
				currentState = localStorage.getItem($($(this).data('parentWidget')).data('widgetId')+'.'+state);
			} else {
				currentState = widgetParameters[state];
			}
		}
		return currentState;
	};

	$.fn.setWidgetState = function (state, value) {
		var widgetParameters = $($(this).data('parentWidget')).data('widgetParameters');
		if (widgetParameters) { // there are parameters
			// has persistence
			if (widgetParameters.id) {
				localStorage.setItem($($(this).data('parentWidget')).data('widgetId')+'.'+state, value);
				return true;
			} else {
				return false;
			}
		}
		return false;
	};

	// default actions
	this.registerAction( {
		handle: "collapse",
		html: '<span class="icon"><i class="ion-chevron-down"></i></span>',
		onClick: function () {
			$(this).find('i').toggleClass('ion-chevron-down').toggleClass('ion-chevron-up');
			var params = $(this).data('actionParameters');
			if (!params.target) params.target = '.panel-body';
			var visible = $(this).closest('[data-widget]').find(params.target).is(':visible');

        	$(this).closest('[data-widget]').find(params.target).slideToggle(100, 'linear', function () {
        		$(this).closest('[data-widget]').toggleClass('panel-collapsed');
        	});

			$(this).setWidgetState('collapsed', visible);
		},
		onInit: function () {
			var params = $(this).data('actionParameters');
			if (params.containerClass == "true") {
				$(this).addClass(params.containerClass);
			}
			if ($(this).getWidgetState('collapsed') == "true") {
				if (!params.target) params.target = '.panel-body';
				$(this).find('i').toggleClass('ion-chevron-down').toggleClass('ion-chevron-up');
				$(this).closest('[data-widget]').find(params.target).hide();
				$(this).closest('[data-widget]').addClass('panel-collapsed');
			}
		}
	});

	this.registerAction( {
		handle: "edit",
		html: '<span class="icon"><i class="ion-android-create"></i></span>',
		controls: '<div><input type="text" class="form-control mt-sm mb-sm"><input type="text" class="form-control mb-sm" style="display:none"></div>',
		onClick: function () {
			var button = $(this);
			var controls = button.pushWidgetControls();
			if (controls) {
				var firstInput = controls.find('input').eq(0);
				var secondInput = controls.find('input').eq(1);
				firstInput.val(button.closest('[data-widget]').find('h2')[0].firstChild.nodeValue);
				secondInput.val(button.closest('[data-widget]').find('h2 small').html());
				controls.find('input').eq(0).bind('keyup', function (e) {
					button.closest('[data-widget]').find('h2').html($(this).val()+'<small>'+secondInput.val()+'</small>');
					button.setWidgetState('headerTitle', $(this).val());
					if (e.keyCode == 13) {
						button.hideWidgetControls();
					}
				});
				if (button.closest('[data-widget]').find('h2 small').length > 0) {
					controls.find('input').eq(1).bind('keyup', function (e) {
						button.closest('[data-widget]').find('h2').html(firstInput.val()+'<small>'+$(this).val()+'</small>');
						button.setWidgetState('subheaderTitle', $(this).val());
						if (e.keyCode == 13) {
							button.hideWidgetControls();
						}
					}).slideDown(0);
				}
			} else {
				button.hideWidgetControls(true);
			}
		},
		onInit: function () {
			var headerTitle = $(this).getWidgetState('headerTitle');
			var subheaderTitle = $(this).getWidgetState('subheaderTitle');
			if (headerTitle) {
				$(this).closest('[data-widget]').find('h2').html(headerTitle+'<small></small>');
				$(this).closest('[data-widget]').find('h2 small').html(subheaderTitle);
			}
		}
	});

	this.registerAction( {
		handle: "colorpicker",
		html: '<span class="icon"><i class="ion-paintbucket"></i></span>',
		controls: '<ul class="panel-color-list dropdown-menu">'+
			'<li><span data-style="panel-default"></span></li>'+
			'<li><span data-style="panel-inverse"></span></li>'+
			'<li><span data-style="panel-primary"></span></li>'+
			'<li><span data-style="panel-success"></span></li>'+
			'<li><span data-style="panel-warning"></span></li>'+
			'<li><span data-style="panel-danger"></span></li>'+
			'<li><span data-style="panel-info"></span></li>'+
			'<li><span data-style="panel-brown"></span></li>'+
			'<li><span data-style="panel-indigo"></span></li>'+
			'<li><span data-style="panel-orange"></span></li>'+
			'<li><span data-style="panel-purple"></span></li>'+
			'<li><span data-style="panel-deep-purple"></span></li>'+
			'<li><span data-style="panel-green"></span></li>'+
			'<li><span data-style="panel-pink"></span></li>'+
			'<li><span data-style="panel-blue"></span></li>'+
			'<li><span data-style="panel-teal"></span></li>'+
			'<li><span data-style="panel-lime"></span></li>'+
			'<li><span data-style="panel-amber"></span></li>'+
			'<li><span data-style="panel-deep-orange"></span></li>'+
			'<li><span data-style="panel-blue-gray"></span></li>'+
			'<li><span data-style="panel-default-alt"></span></li>'+
			'<li><span data-style="panel-inverse-alt"></span></li>'+
			'<li><span data-style="panel-primary-alt"></span></li>'+
			'<li><span data-style="panel-success-alt"></span></li>'+
			'<li><span data-style="panel-warning-alt"></span></li>'+
			'<li><span data-style="panel-danger-alt"></span></li>'+
			'<li><span data-style="panel-info-alt"></span></li>'+
			'<li><span data-style="panel-brown-alt"></span></li>'+
			'<li><span data-style="panel-indigo-alt"></span></li>'+
			'<li><span data-style="panel-orange-alt"></span></li>'+
			'<li><span data-style="panel-purple-alt"></span></li>'+
			'<li><span data-style="panel-deep-purple-alt"></span></li>'+
			'<li><span data-style="panel-green-alt"></span></li>'+
			'<li><span data-style="panel-pink-alt"></span></li>'+
			'<li><span data-style="panel-blue-alt"></span></li>'+
			'<li><span data-style="panel-teal-alt"></span></li>'+
			'<li><span data-style="panel-lime-alt"></span></li>'+
			'<li><span data-style="panel-amber-alt"></span></li>'+
			'<li><span data-style="panel-deep-orange-alt"></span></li>'+
			'<li><span data-style="panel-blue-gray-alt"></span></li>'+

		'</ul>',
		onClick: function () {
			var button = $(this);
			var controls = button.pushWidgetControls();
			if (controls) {
				controls.find('li span').bind('click', function (e) {
					var widget = button.closest('[data-widget]');
					widget.removeClass('panel-green-alt panel-default panel-inverse panel-primary panel-success panel-warning panel-danger panel-info panel-brown panel-indigo panel-orange panel-purple panel-deep-purple panel-green panel-pink panel-blue panel-teal panel-lime panel-amber panel-deep-orange panel-blue-gray panel-default-alt panel-inverse-alt panel-primary-alt panel-success-alt panel-warning-alt panel-danger-alt panel-info-alt panel-brown-alt panel-indigo-alt panel-orange-alt panel-purple-alt panel-deep-purple-alt panel-green-alt panel-pink-alt panel-blue-alt panel-teal-alt panel-lime-alt panel-amber-alt panel-deep-orange-alt panel-blue-gray-alt')
						.addClass($(this).attr('data-style'));
					$(button).setWidgetState('headerStyle', $(this).attr('data-style'));
				});
			} else {
				button.hideWidgetControls(true);
			}
		},
		onInit: function () {
			var headerStyle = $(this).getWidgetState('headerStyle');
			if (headerStyle) {
				var widget = $(this).closest('[data-widget]');
				widget.removeClass('panel-green-alt panel-default panel-inverse panel-primary panel-success panel-warning panel-danger panel-info panel-brown panel-indigo panel-orange panel-purple panel-deep-purple panel-green panel-pink panel-blue panel-teal panel-lime panel-amber panel-deep-orange panel-blue-gray panel-default-alt panel-inverse-alt panel-primary-alt panel-success-alt panel-warning-alt panel-danger-alt panel-info-alt panel-brown-alt panel-indigo-alt panel-orange-alt panel-purple-alt panel-deep-purple-alt panel-green-alt panel-pink-alt panel-blue-alt panel-teal-alt panel-lime-alt panel-amber-alt panel-deep-orange-alt panel-blue-gray-alt')
					.addClass(headerStyle);
			}
		}
	});

this.registerAction( {
    handle: "colorpicker",
    html: '<span class="dropdown"><span class="icon dropdown-toggle" data-toggle="dropdown"><i class="ion-paintbucket"></i></span>'+
    '<ul class="panel-color-list dropdown-menu arrow" role="menu">'+
		    '<li><span data-style="panel-default"></span></li>'+
		    '<li><span data-style="panel-inverse"></span></li>'+
		    '<li><span data-style="panel-primary"></span></li>'+
		    '<li><span data-style="panel-success"></span></li>'+
		    '<li><span data-style="panel-warning"></span></li>'+
		    '<li><span data-style="panel-danger"></span></li>'+
		    '<li><span data-style="panel-info"></span></li>'+
		    '<li><span data-style="panel-brown"></span></li>'+
		    '<li><span data-style="panel-indigo"></span></li>'+
		    '<li><span data-style="panel-orange"></span></li>'+
		    '<li><span data-style="panel-purple"></span></li>'+
		    '<li><span data-style="panel-deep-purple"></span></li>'+
		    '<li><span data-style="panel-green"></span></li>'+
		    '<li><span data-style="panel-pink"></span></li>'+
		    '<li><span data-style="panel-blue"></span></li>'+
		    '<li><span data-style="panel-teal"></span></li>'+
		    '<li><span data-style="panel-lime"></span></li>'+
		    '<li><span data-style="panel-amber"></span></li>'+
		    '<li><span data-style="panel-deep-orange"></span></li>'+
		    '<li><span data-style="panel-blue-gray"></span></li>'+
		    '<li><span data-style="panel-default-alt"></span></li>'+
		    '<li><span data-style="panel-inverse-alt"></span></li>'+
		    '<li><span data-style="panel-primary-alt"></span></li>'+
		    '<li><span data-style="panel-success-alt"></span></li>'+
		    '<li><span data-style="panel-warning-alt"></span></li>'+
		    '<li><span data-style="panel-danger-alt"></span></li>'+
		    '<li><span data-style="panel-info-alt"></span></li>'+
		    '<li><span data-style="panel-brown-alt"></span></li>'+
		    '<li><span data-style="panel-indigo-alt"></span></li>'+
		    '<li><span data-style="panel-orange-alt"></span></li>'+
		    '<li><span data-style="panel-purple-alt"></span></li>'+
		    '<li><span data-style="panel-deep-purple-alt"></span></li>'+
		    '<li><span data-style="panel-green-alt"></span></li>'+
		    '<li><span data-style="panel-pink-alt"></span></li>'+
		    '<li><span data-style="panel-blue-alt"></span></li>'+
		    '<li><span data-style="panel-teal-alt"></span></li>'+
		    '<li><span data-style="panel-lime-alt"></span></li>'+
		    '<li><span data-style="panel-amber-alt"></span></li>'+
		    '<li><span data-style="panel-deep-orange-alt"></span></li>'+
		    '<li><span data-style="panel-blue-gray-alt"></span></li>'+
    '</ul></span>',
    onClick: function () {
    },
    onInit: function () {
        var headerStyle = $(this).getWidgetState('headerStyle');
        if (headerStyle) {
            var widget = $(this).closest('[data-widget]');
            widget.removeClass('panel-green-alt panel-default panel-inverse panel-primary panel-success panel-warning panel-danger panel-info panel-brown panel-indigo panel-orange panel-purple panel-deep-purple panel-green panel-pink panel-blue panel-teal panel-lime panel-amber panel-deep-orange panel-blue-gray panel-default-alt panel-inverse-alt panel-primary-alt panel-success-alt panel-warning-alt panel-danger-alt panel-info-alt panel-brown-alt panel-indigo-alt panel-orange-alt panel-purple-alt panel-deep-purple-alt panel-green-alt panel-pink-alt panel-blue-alt panel-teal-alt panel-lime-alt panel-amber-alt panel-deep-orange-alt panel-blue-gray-alt')
                .addClass(headerStyle);
        }
        var button = $(this);
        $(this).find('.dropdown-menu').bind('click', function (e) {
            e.stopPropagation();
        });
        $(this).find('li span').bind('click', function (e) {
            var widget = button.closest('[data-widget]');
            widget.removeClass('panel-green-alt panel-default panel-inverse panel-primary panel-success panel-warning panel-danger panel-info panel-brown panel-indigo panel-orange panel-purple panel-deep-purple panel-green panel-pink panel-blue panel-teal panel-lime panel-amber panel-deep-orange panel-blue-gray panel-default-alt panel-inverse-alt panel-primary-alt panel-success-alt panel-warning-alt panel-danger-alt panel-info-alt panel-brown-alt panel-indigo-alt panel-orange-alt panel-purple-alt panel-deep-purple-alt panel-green-alt panel-pink-alt panel-blue-alt panel-teal-alt panel-lime-alt panel-amber-alt panel-deep-orange-alt panel-blue-gray-alt')
                .addClass($(this).attr('data-style'));
            $(button).setWidgetState('headerStyle', $(this).attr('data-style'));
            e.stopPropagation();
        });
    }
});

	// dummy actions - coming soon
	this.registerAction( {
	    handle: "expand",
	    html: '<span class="icon"><i class="ion-arrow-resize"></i></span>',
	    onClick: function () {
	    	var widget = $(this).closest('[data-widget]');
        	widget.toggleClass('wijets-full-screen');
	    }
	});

	this.registerAction( {
	    handle: "refresh",
	    html: '<span class="icon"><i class="ion-android-sync"></i></span>',
	    onClick: function () {
	        // bootbox.alert("Coming Soon at Tectonic! Load and reload panel contents with the help of AJAX!")
			var params = $(this).data('actionParameters');
	        var widget = $(this).closest('[data-widget]');
			widget.append('<div class="panel-loading"><div class="panel-loader-' + params.type + '"></div></div>');
	        widget.find('.panel-body').load(params.url, function () {
	        	widget.find('.panel-loading').remove();
	        });
	    }
	});

	this.registerAction( {
	    handle: "separator",
	    html: '<i class="separator">'
	});

	this.registerAction( {
	    handle: "close",
	    html: '<span class="icon"><i class="ion-android-close"></i></span>',
	    onClick: function () {
	    	var widget = $(this).closest('[data-widget]');
	        bootbox.confirm("Delete this panel?", function (choice) {
	        	if (choice) {
	        		widget.remove();
	        	}
	        });
	    }
	});

	// helpers
	var getUniques = function (arr) {
	    var u = {}, a = [];
	    for(var i = 0, l = arr.length; i < l; ++i){
			if(u.hasOwnProperty(arr[i])) {
				continue;
			}
			a.push(arr[i]);
			u[arr[i]] = 1;
	    }
	    return a;
	};

	// primary entrypoint
	this.make = function (settings) {
		settings = settings? settings:{};

		var widgetGroups = $('[data-widget-group]').map(function() {
			return $(this).data('widget-group');
		}).get();

		var uniqueWidgetGroups = getUniques (widgetGroups);

		$.each($('[data-widget]'), function () {
			var widgetGroup = $(this).closest('[data-widget-group]').attr('data-widget-group');
			try {
				var params = $(this).attr('data-widget');
				var widgetId = undefined;
				if (params.length>0) {
					params = $.parseJSON(params);
					$(this).data('widgetParameters', params);

					if (params && params.id) {
						widgetId = widgetGroup+'.'+params.id;
						$(this).data('widgetId', widgetId);
					}

					if (params.draggable == "false") {
						$(this).attr('data-widget-static', '');
					} else {
						$(this).removeAttr('data-widget-static');
					}

					if (params.id) { // there is persistence to deal with
						for (var prop in params) {
							if (prop == "id") continue;
							if (params.hasOwnProperty(prop)) {
								if (localStorage.getItem(widgetId+'.'+prop) == undefined) {
									// store parameter from mark up for the first time
									localStorage.setItem(widgetId+'.'+prop, params[prop]);
									console.log(widgetId+'.'+prop, params[prop]);
								}
							}
						}
					}
				}
			} catch (e) {
				console.log(e);
			}
		});

		// make sortable
		for (var i = uniqueWidgetGroups.length - 1; i >= 0; i--) {
			$('[data-widget-group="'+uniqueWidgetGroups[i]+'"]').sortable( {
				connectWith: '[data-widget-group="'+uniqueWidgetGroups[i]+'"]',
				items: '[data-widget]:not([data-widget-static])',
				placeholder: "panel-placeholder",
				handle: settings.handle? settings.handle:'.panel-heading',
				start: function(e, ui) {
					ui.placeholder.height(ui.helper.outerHeight()-4);
					// ui.placeholder.width(ui.helper.outerWidth());
				},
			});
		};

		$('[data-actions-container]')
		.each( function () {
			var elem = $(this);
			var attrs = [];
			$.each( this.attributes, function () {
				attrs.push(this);
			});
			if(!(/Chrome/.test(navigator.userAgent) || /Safari/.test(navigator.userAgent))) attrs.reverse();
			$.each( attrs, function () {
				// console.log( this.name.substr(11) );
				if (this.name.substr(0, 12) == "data-action-") {
					var actionName = this.name.substr(12);
					// console.log( actionName );
					if (self.actionDefinitions[actionName] !== undefined) {
						var btn = $(self.actionDefinitions[actionName].html);
						elem.append(btn);
						try {
							var params = elem.attr('data-action-'+actionName);
							if (params.length==0) {
								params = '{}'; // empty object
							}
							btn.data('actionParameters', $.parseJSON(params));
						} catch (e) {
							console.log(e);
						}
						btn.data('actionDefinition', self.actionDefinitions[actionName]);
						btn.data('parentWidget', btn.closest('[data-widget]'));
						if (self.actionDefinitions[actionName].onClick) {
							btn.click( function () {
								self.actionDefinitions[actionName].onClick.call(this);
							});
						}
						if (self.actionDefinitions[actionName].onInit) {
							self.actionDefinitions[actionName].onInit.call(btn);
						}
					}
				}
			});
		});
	};

	return this;
};
