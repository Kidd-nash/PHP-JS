// document.addEventListener("DOMContentLoaded", function() {

window.addEventListener( 'load', function() {
    const myHeading = document.querySelector("h1");
    myHeading.textContent = "Greetings";


    let variableChange = "initial value 101";
    let initialSpan = this.document.getElementById('initial');
    initialSpan.textContent = variableChange;


    variableChange = "changed value 101"
    let changedSpan = this.document.getElementById('changed');
    changedSpan.textContent = variableChange;

    //it reads chronologically and displays variables based on its value at a given place and time
  });