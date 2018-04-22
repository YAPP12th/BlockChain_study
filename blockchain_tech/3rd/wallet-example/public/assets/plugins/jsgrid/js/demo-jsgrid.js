  $(document).ready(function(){
   
    $("#jsGrid").jsGrid({
                // height: "1000px",
                width: "100%",
                filtering: true,
                editing: true,
                inserting: true,
                sorting: true,
                paging: true,
                autoload:true,
                pageSize: 15,
                pageButtonCount: 5,
                deleteConfirm: "Do you really want to delete the client?",
                controller: db,
                fields: [
                    { name: "Name", type: "text", width: 150 },
                    { name: "Age", type: "number", width: 50 },
                    { name: "Address", type: "text", width: 200 },
                    { name: "Country", type: "select", items: db.countries, valueField: "Id", textField: "Name" },
                    { name: "Married", type: "checkbox", title: "Is Married", sorting: false },
                    { type: "control" }
                ]
            });


        $("#jsGrid2").jsGrid({
                width: "100%",
                filtering: true,
                editing: true,
                sorting: true,
                paging: true,
                autoload: true,
                pageSize: 15,
                pageButtonCount: 5,
                controller: db,
                fields: [
                    { name: "Name", type: "text", width: 150 },
                    { name: "Age", type: "number", width: 50 },
                    { name: "Address", type: "text", width: 200 },
                    { name: "Country", type: "select", items: db.countries, valueField: "Id", textField: "Name" },
                    { name: "Married", type: "checkbox", title: "Is Married", sorting: false },
                    { type: "control", modeSwitchButton: false, editButton: false }
                ]
            });

            $(".config-panel input[type=checkbox]").on("click", function() {
                var $cb = $(this);
                $("#jsGrid").jsGrid("option", $cb.attr("id"), $cb.is(":checked"));
            });

  })