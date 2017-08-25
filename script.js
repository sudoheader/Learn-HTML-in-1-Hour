$(document).ready(function() {
    //(HTML object). action (do something)
    $("#button1").click(function() {
        $("div").animate({left: '100px'});
    });
    $("#button2").click(function() {
        $("div").animate({left: '0px'});
    });
});
