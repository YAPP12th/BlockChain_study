jQuery(document).ready(function() {

    //Todo 1

    $("#sortable-todo, #completed-todo").sortable({
          connectWith: ".connectedSortable",
          receive: function (event, ui) {
            $(ui.item[0]).find('.tectonic')[0].dropped = true;
            $(ui.item[0]).find('.tectonic').prop('checked', !$(ui.item[0]).find('.tectonic').prop('checked'));
          }
        }).disableSelection();

    $('#sortable-todo .tectonic, #completed-todo .tectonic').on('click', function () {
        if ($(this).closest('#sortable-todo').length) {
            $(this).closest('li').appendTo('#completed-todo');
        } else {
            $(this).closest('li').appendTo('#sortable-todo');
        }
    });

    var newLiHtml = '<li class="item-success">\
        <span class="drag-todo">\
            <span class="input pt-sm">\
                <input type="checkbox" class="tectonic" id="checked5" value="1" name="ham">\
                <label for="checked5"></label>\
            </span>\
        </span>\
        <p class="todo-description">\
            TODOTEXT\
        </p>\
    </li>';

    $('#openTodoModal').click(function(){
        bootbox.prompt("Add new To-Do", function(result) {
            if (result === null) {
            } else {
                var newLi = $(newLiHtml.replace('TODOTEXT', result));
                $('#sortable-todo').append(newLi);
            }
        });
    });
});