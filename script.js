$(document).ready(function() {
    //(HTML object). action (do something)
    $("#button1").click(function() {
        $("div").animate({left: '100px'}, "slow");
    });
    $("#button2").click(function() {
        $("div").animate({left: '0px'}, "fast");
    });
    $("#button3").click(function() {
        $("div").animate({height: '+=20px', width: '+=20px'}, "fast");
    });
    $("#button4").click(function() {
        $("div").animate({height: '-=10px', width: '-=10px'}, "fast");
    });
});
