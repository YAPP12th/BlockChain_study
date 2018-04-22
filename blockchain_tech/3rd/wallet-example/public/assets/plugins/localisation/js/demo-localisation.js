
setlocalisation=function(language){
    var opts = {
        language:language, 
        pathPrefix: "assets/plugins/localisation/js/lang"
    };
    $("[data-localize]")
    .localize("topnav", opts)
    .localize("navigation", opts)
    .localize("demo-switcher", opts);
    if(language=="ar"){
        $("#rtlli").addClass('pulse');
    }
    else{
        $("#rtlli").removeClass('pulse');
    }
    $("."+language).addClass("active");
    $("."+language).children().css("color","#424242");
}

$(".select_local").click(function(){
    language=$(this).attr("lang");
    localStorage.setItem("language",language);
    $(".select_local").each(function(index,obj){
        $(this).parent().removeClass("active");
        $(this).css("color","#424242");
    });
    setlocalisation(language);
});


if(localStorage.getItem("language")==null){
    localStorage.setItem("language","en");

}
setlocalisation(localStorage.getItem("language"));

