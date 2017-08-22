var coolNumber = 1;

function changeTheText() {

    if (coolNumber == 1) {
        var changeTextVariable = document.getElementById('changeUserText').value;
        document.getElementById('paragraphText').innerHTML = changeTextVariable;
    }
}
