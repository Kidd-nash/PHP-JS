// document.addEventListener("DOMContentLoaded", function() {

window.addEventListener( 'load', function() {
    const myHeading = document.querySelector("h1");
    myHeading.textContent = "Greetings";


    let variableChange = "initial value 101";
    let numberValue = 1;
    let booleanValue = false;
    let initialSpan = this.document.getElementById('initial');
    let initialBoolSpan = this.document.getElementById('initial_bool');
    initialSpan.textContent = variableChange;
    if (booleanValue != true) {
        initialBoolSpan.textContent = "false".concat(numberValue);
    }


    variableChange = "changed value 101"
    numberValue = numberValue + 1;
    booleanValue = true;
    let changedSpan = this.document.getElementById('changed');
    let changedBoolSpan = this.document.getElementById('changed_bool');
    changedSpan.textContent = variableChange;
    if (booleanValue = true) {
        changedBoolSpan.textContent = "true".concat(numberValue);
    }
    //it reads chronologically and displays variables based on its value at a given place and time
  });