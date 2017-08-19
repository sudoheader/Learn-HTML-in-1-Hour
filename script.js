var variableNumber = 2;
var secondNumber = 2;
var variableName = 'John ';
var secondString = 'Awesome';

function changeTheText() {
    // Change the paragraph text
    var changeTextVariable = document.getElementById('changeUserText').value;
    document.getElementById('paragraphText').innerHTML = changeTextVariable;
}
