$(document).ready(function(){
    var $wrapper = $('.testWrapper');

$wrapper.find('.test').sort(function (a, b) {
    return +a.getAttribute('data-percentage') - +b.getAttribute('data-percentage');
})
.appendTo( $wrapper );
})