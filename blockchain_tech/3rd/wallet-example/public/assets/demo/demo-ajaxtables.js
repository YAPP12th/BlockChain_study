$(document).ready(function(){
	change_content=function(content,page,row){
       $.ajax({ 
            url:page, 
            success: function (data) {
              //  console.log(data);
                $(content).html("");
                $.each(data,function(index,obj) {
                    platform=obj.Platform;
                    browser=obj.browser;
                    css_grade=obj.cssgrade;
                    engine_version=obj.engineversion;
                    rendering_engine=obj.renderingengine;
                    $(content).append("<tr><td>"+rendering_engine+"</td><td>"+browser+"</td><td>"+platform+"</td><td>"+engine_version+"</td><td>"+css_grade+"</td></tr>");
                    if(index==row){
                        return false;
                    }
                });
            }
        });
    };
    $("#select-number").on('change',function(){
    	row=parseInt($(this).val())-1;
        $("#ajax-table").html("");
    	page="json/ajax-data.json";
    	change_content("#ajax-table",page,row);
    })
})