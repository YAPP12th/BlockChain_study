/**
 * Version: 0.1
 * Updated: 2015-12-28
 *
 * jQuery plugin for modal Font Awesome spin loading icons
 *
 * Copyright (c) 2015 Alê Monteiro (contato@alemonteiro.com.br, https://github.com/alemonteiro/jquery-fa-loading)
 *
 * Licensed under the MIT (LICENSE.txt)
 **/

/**
 * Requirements:
 * - jQuery (John Resig - http://www.jquery.com/)
 * - Font Awesome (davegandy - http://fontawesome.io)
 **/

(function($){
	
	$.faLoadingDefaultIcon = 'fa-refresh';
	
	$.fn.extend({
		
		// Creates the loading and return the last object set
        faLoading: function (loadType) {
			if ( loadType === undefined || loadType.indexOf("fa-") == -1) {
				loadType = $.faLoadingDefaultIcon;
			}
            return $(this).each(function() {
                var $t = $(this),
					pos = $t.css('position');
				
                $t.append('<div class="fa-loading-wrapper">'+
                    '<div class="fa-loading-bg">&nbsp;</div>'+
                    '<div class="fa-loading-icon-wrapper">'+
                     '   <i class="fa '+loadType+' fa-spin fa-loading-icon"></i>'+
                    '</div>'+
                '</div>');
            });
        },
		
		// Creates the loading and return it
		faLoadingAdd: function(loadType) {
			return $('<div>') // create holder of loading
					.faLoading(loadType) // create loading
					.appendTo($(this));
		},
		
		// Remove loading 
		faLoadingStop: function() {
            return $(this).each(function() {
				$(this).find('div.fa-loading-wrapper').remove();
			});
		}
	});
	
}(jQuery));