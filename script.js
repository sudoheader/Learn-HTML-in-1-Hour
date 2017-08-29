var aCanvas = document.getElementById("aCanvas"));
var context = aCanvas.getContext("2d");
var aGradient = context.createRadialGradient(10, 10, 3, 50, 50, 70);
aGradient.addColorStop(0, "orange");
aGradient.addColorStop(1,"blue");
context.fillStyle = "red";
context.fillRect(0, 0, 150, 150);
