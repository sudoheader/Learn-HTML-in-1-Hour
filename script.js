function changeTheText() {
    work();
}

function work() {
    // Change the paragraph text
    var changeTextVariable = document.getElementById('changeUserText').value;
    document.getElementById('paragraphText').innerHTML = changeTextVariable;

}
