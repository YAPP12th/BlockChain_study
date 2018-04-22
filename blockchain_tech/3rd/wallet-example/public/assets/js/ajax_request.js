$(document).ready(function(){
    change_content=function(content,page){
        $.ajax({
            url:page,
            success: function(data){
                if(data!=""){
                    $(content).html(data);
                }
            }
        })
    };
    change_alert=function(page){
        $.ajax({
            url:page,
            success: function(data){
                if(data!=""){
                    alert(data);
                }
            }
        })
    };
    page_refresh=function(page){
        $.ajax({
            url:page,
            success: function(data){
                if(data!=""){
                    nl1=$(location).attr('href');
                    nl2=nl1.replace("#","");
                    window.location=nl2;
                }
            }
        })
    }
    
    $(".link").click(function(){
        page=$(this).attr('page');
        //alert(page);
        change_content("#main_container",page);
    });
    $(document).on('submit','.change_content_by_post',function(e)
    {
        var formObj =$(this);
        var formURL =formObj.attr("action");
        var formData = new FormData(this);
        //var content=$(this).attr('content');
        $.ajax({
            url: formURL,
            type: 'POST',
            data:formData,
            mimeType:"multipart/form-data",
            contentType: false,
            cache: false,
            processData:false,
            success: function(data, textStatus, jqXHR)
            {
                if(data!=""){
                    $("#alert_modal_body").html(data);
                }
            },
            error: function(jqXHR, textStatus, errorThrown)
            {
                alert(errorThrown);
            }
                        
        });
        e.preventDefault();
    });
    $(document).on('submit','.change_content_by_post2',function(e)
    {
        var formObj =$(this);
        var formURL =formObj.attr("action");
        var formData = new FormData(this);
        $.ajax({
            url: formURL,
            type: 'POST',
            data:formData,
            mimeType:"multipart/form-data",
            contentType: false,
            cache: false,
            processData:false,
            success: function(data, textStatus, jqXHR)
            {
                if(data!=""){
                    alert(data);
                }
            },
            error: function(jqXHR, textStatus, errorThrown)
            {
                alert(errorThrown);
            }
                        
        });
        e.preventDefault();
    });
    
})