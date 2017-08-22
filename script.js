var coolNumber = 3;

function changeTheText() {

    if (coolNumber == 1) {
        var changeTextVariable = document.getElementById('changeUserText').value;
        document.getElementById('paragraphText').innerHTML = changeTextVariable;
    } else if (coolNumber == 2) {
        alert("pop");
    } else if (coolNumber == 3) {
        alert("Awesome");
    } else {
        var changeTextVariable1 = "Else statem fired";
        document.getElementById('paragraphText').innerHTML = changeTextVariable1;
    }
}
