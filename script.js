$(document).ready(function() {
    //(HTML object). action (do something)
    $("#button1").click(function() {
        $("div").animate({left: '100px'}, "slow");
    });
    $("#button2").click(function() {
        $("div").animate({left: '0px'}, "fast");
    });
    $("#button3").click(function() {
        $("div").animate({height: '200px', width: '200px'}, "fast");
    });
});
