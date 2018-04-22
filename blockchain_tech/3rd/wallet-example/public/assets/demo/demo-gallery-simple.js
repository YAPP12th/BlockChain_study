/* Initialize Image Filter and Sort Plugin for Gallery */

$(function(){
    $('.gallery').mixitup();
});

/* Bind filter with selectbox */

$("#galleryfilter").change(function(e) {
    var cat = $("#galleryfilter option:selected").data('filter');
    $('.gallery').mixitup('filter', cat);
});

/* Switch between grid and list view */

$('#GoList').click(function(e) {
    $('.gallery').mixitup('toList');
    $(this).addClass('active');
    var delay = setTimeout(function(){
        $('.gallery').addClass('full-width');
        $('#GoGrid').removeClass('active');
    });
});

$('#GoGrid').click(function(e) {
    $('#GoList').removeClass('active');
    $(this).addClass('active');
    var delay = setTimeout(function(){
        $('.gallery').mixitup('toGrid');
        $('.gallery').removeClass('full-width');
    });
});




//On click of img
$('.mix a').click(function(e){
    e.preventDefault();
    $('.modal-title').empty();
    $('.modal-body').empty();

    var title = $(this).siblings('h4').html();
    $('.modal-title').html(title);

    var img= '<img class="img-responsive" src=' +$(this).attr("href")+ '></img>';
    $(img).appendTo('.modal-body');

    $('#gallarymodal').modal({show:true});
});