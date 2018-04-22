/**
 * Version: 0.2
 * Updated: 2016-01-06
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
			if (loadType === "remove" || loadType === false) {
				return $(this).each(function() {
					$(this).find('div.fa-loading-wrapper').remove();
				});	
			}
			if ( loadType === undefined || loadType.indexOf("fa-") == -1) {
				loadType = $.faLoadingDefaultIcon || 'fa-refresh';
			}
            return $(this).each(function() {
                $('<div class="fa-loading-wrapper">'+
                    '<div class="fa-loading-bg">&nbsp;</div>'+
                    '<div class="fa-loading-icon-wrapper">'+
                     '   <i class="fa '+loadType+' fa-spin fa-loading-icon"></i>'+
                    '</div>'+
                '</div>').appendTo(this);
            });
        }
	});
	
}(jQuery));