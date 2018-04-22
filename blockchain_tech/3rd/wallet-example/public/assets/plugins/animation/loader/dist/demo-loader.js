var loading_time = 3000;

$(function() {

    $("#btnBodyLoading").click(function() {
        $("body").faLoading('fa-cog');

        setTimeout(function() {
            $("body").faLoading(false);
        }, loading_time);
    });

    $("#btnDivLoading").click(function() {

        $("#faLoadingContainer").faLoading();

        setTimeout(function() {
            $("#faLoadingContainer").faLoading("remove");
        }, loading_time);

    });
});
            
            
            
function testHoldon(themeName){
    HoldOn.open({
        theme:themeName,
        message:"<h4>"+themeName+" Demo. Closing in 2 seconds</h4>"
    });
                                
    setTimeout(function(){
        HoldOn.close();
    },2000);
}
            
$(document).ready(function(){
    $('.demo-text').spindle({
        text: 'X'
    });
    $('.spindle-button').click(function() {
        $(this).spindle({
            text: '*'
        });
    });

    $('.spindle-button-ajax').click(function() {
        var $el = $(this);
        $el.spindle('start', {
            text: '@'
        });
        $el.prop('disabled', true);
        setTimeout(function() {
            $el.spindle('stop');
            $el.prop('disabled', false);
        }, 1500);
    });
})

$(document).ready(function(){
    Ladda.bind( '.button-demo button', {
        timeout: 2000
    } );

    // Bind progress buttons and simulate loading progress
    Ladda.bind( '.progress-demo button', {
        callback: function( instance ) {
            var progress = 0;
            var interval = setInterval( function() {
                progress = Math.min( progress + Math.random() * 0.1, 1 );
                instance.setProgress( progress );

                if( progress === 1 ) {
                    instance.stop();
                    clearInterval( interval );
                }
            }, 200 );
        }
    } );
})