var aCanvas = document.getElementById("aCanvas"));
var context = aCanvas.getContext("2d");
var aGradient = context.createLinearGradient(10, 11, 100, 0);
aGradient.addColorStop(0, "orange");
aGradient.addColorStop(1, "blue");
context.fillStyle = aGradient;
context.fillRect(0, 0, 150, 150);
