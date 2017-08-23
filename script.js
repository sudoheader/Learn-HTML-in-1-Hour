$(document).ready(function() {
    //(HTML object). action (do something)
    $("#button1").click(function() {
        //(HTML object). action
        $("h1").fadeOut();
        $("h2").fadeOut();
    });
    $("#button2").click(function() {
        $("h1").fadeIn();
        $("h2").fadeIn();
    });
});
