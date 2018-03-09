//Sidebar
$(document).ready(function(){
    //Side bar animation
    $("#navButton").click(function(){
        if($("#sidebar").css("display") === "none")
            $("#sidebar").fadeIn("slow");
        else
            $("#sidebar").fadeOut("slow");
    });
});