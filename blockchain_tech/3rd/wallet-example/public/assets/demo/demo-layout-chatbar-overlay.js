$(function () {

    $('.chat-users>li').click(function(){
    	$('.infobar .widget').hide();
    	$('.chat-area').show();
    });

    $('#hidechatbtn').click(function(){
    	$('.infobar .widget').show();
    	$('.chat-area').hide();
    });

    // -------------------------------
    // Demo: Chatbar
    // -------------------------------

    $('.chat-input textarea').keypress(function (e) {
      if (e.which == 13) {

        var chatmsg = $(".chat-input textarea").val();
        var oo=$(".chat-history").html();

        var d=new Date();
        var n=d.toLocaleTimeString();


        if (!!$(".chat-input textarea").val()) {
            $(".chat-history").html(oo+ "<div class='chat-msg'><p>"+chatmsg+"</p><span class='timestamp'>"+n+"</span></div>");
        	chatResizer($('.chat-history'));

            $('.chat-history').animate({scrollTop: $('.chat-history').height()}, 500);

        	$(this).val(''); // empty textarea

        	return false;
      	}
      }
    });

});



function chatResizer(menu) { //change height of scroll based on leftbar viewport height
    menu.height(getChatbarViewportHeight);
}

var getChatbarViewportHeight = function () {
    var h;

    t=$('.chat-user').position().top;
    w=$(window).height();

    h=w-t-218;

    return h;
}