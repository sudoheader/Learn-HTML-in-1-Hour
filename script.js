$(document).ready(function() {
    //(HTML object). action (do something)
    $("#button1").click(function() {
        //(HTML object). action
        // $(".fadeouttag").fadeOut();
        $("h1").fadeOut();
        $("h2").fadeOut();

    });
    $(".otherbutton").click(function() {
        $(".fadeouttag").fadeIn(3000);
    });
    $("#togglebutton").click(function() {
        $(".fadeouttag").toggle();
    });
});
