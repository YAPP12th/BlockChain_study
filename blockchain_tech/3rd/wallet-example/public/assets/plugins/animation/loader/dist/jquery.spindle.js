
(function($) {
'use strict';

$.fn.spindle = function(action, userOpts) {
  if(typeof action === 'object') {
    userOpts = action;
    action = 'toggle';
  }

  return this.each(function() {
    var $el = $(this)
      , $s = $el.find('.spindle-wrapper');

    var elOpts = {
      text: $el.data().spindleText
    };
    
    var opts = $.extend({}, $.fn.spindle.defaults, elOpts, userOpts)
      , text = opts.text
      , css = opts.css;

    if('toggle' === action || typeof action === 'undefined') {
      action = $s.length ? 'stop' : 'start';
    }

    if('start' === action) {
      if($s.length) { return; }
      var $s = $('<span></span>')
        .text(text)
        .addClass('spindle')
        .addClass('spindle-active');
      var $w = $('<span></span>')
        .addClass('spindle-wrapper')
        .css(css);
      $w.append($s);
      $el.prepend($w);
    }

    if('stop' === action) {
      $s.remove();
    }
  });

};

$.fn.spindle.defaults = {
  text: 'Z',
  css: {
    paddingRight: '5px'
  }
}

}(jQuery));
