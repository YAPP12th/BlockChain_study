/**
 * https://github.com/alemonteiro/jquery-fa-loading
 * Version: 0.1 
 **/
!function(a){a.faLoadingDefaultIcon="fa-refresh",a.fn.extend({faLoading:function(i){return(void 0===i||-1==i.indexOf("fa-"))&&(i=a.faLoadingDefaultIcon),a(this).each(function(){var n=a(this);n.css("position");n.append('<div class="fa-loading-wrapper"><div class="fa-loading-bg">&nbsp;</div><div class="fa-loading-icon-wrapper">   <i class="fa '+i+' fa-spin fa-loading-icon"></i></div></div>')})},faLoadingAdd:function(i){return a("<div>").faLoading(i).appendTo(a(this))},faLoadingStop:function(){return a(this).each(function(){a(this).find("div.fa-loading-wrapper").remove()})}})}(jQuery);