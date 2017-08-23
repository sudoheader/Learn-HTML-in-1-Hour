$(document).ready(function() {
    //(HTML object). action (do something)
    $("#button1").click(function() {
        //(HTML object). action
        $(".fadeouttag").fadeOut();
    });
    $(".otherbutton").click(function() {
        $(".fadeouttag").fadeIn();
    });
});
