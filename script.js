$(document).ready(function() {
    //(HTML object). action (do something)
    $("#button1").click(function() {
        $("#orangediv").animate({height: '250px'});
    });
    $("#button2").click(function() {
        $("#bluediv").animate({height: '250px'});
    });
});
