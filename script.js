var coolNumber = 2;

function changeTheText() {

    if (coolNumber == 1) {
        var changeTextVariable = document.getElementById('changeUserText').value;
        document.getElementById('paragraphText').innerHTML = changeTextVariable;
    }
    else {
        var changeTextVariable1 = "Else statem fired";
        document.getElementById('paragraphText').innerHTML = changeTextVariable1;
    }
}
