var aCanvas = document.getElementById("aCanvas");
var context = aCanvas.getContext("2d");
context.beginPath();
context.arc(100, 100, 50, 0, 2 * Math.PI);
context.stroke();
