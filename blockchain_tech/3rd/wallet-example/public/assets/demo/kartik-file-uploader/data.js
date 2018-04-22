 $(".btn-warning").on('click', function() {
    if ($('#file-4').attr('disabled')) {
        $('#file-4').fileinput('enable');
    } else {
        $('#file-4').fileinput('disable');
    }
});    
$(".btn-info").on('click', function() {
    $('#file-4').fileinput('refresh', {previewClass:'bg-info'});
});