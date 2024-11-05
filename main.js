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

    function average() {
        let value1 = document.getElementById('value_1').value;
        let value2 = document.getElementById('value_2').value;

        let displayValue = document.getElementById('average_value');
        let average = (value1 + value2) / 2;

        displayValue.textContent = average;
        // return average

    }

    // window.onload = function() {
    //     function average() {
    //         let value1 = parseFloat(document.getElementById('value_1').value);
    //         let value2 = parseFloat(document.getElementById('value_2').value);
    
    //         let displayValue = document.getElementById('average_value');
    //         let average = (value1 + value2) / 2;
    
    //         displayValue.textContent = average;
    //     }
    //     window.average = average; // Make it globally accessible
    // }

    // console.log(average(88, 95));
    //it reads chronologically and displays variables based on its value at a given place and time
});

function average() {
    // let value1 = document.getElementById('value_1').value;
    // let value2 = document.getElementById('value_2').value;
    let value1 = parseFloat(document.getElementById('value_1').value);
    let value2 = parseFloat(document.getElementById('value_2').value);

    let displayValue = document.getElementById('average_value');
    let average = (value1 + value2) / 2;

    displayValue.textContent = average;
    // return average

}

function yen() {
    let value1 = parseFloat(document.getElementById('value_yen').value);
    let displayValue = document.getElementById('yen_value');
    let yen = (value1 / 100) * 39;

    displayValue.textContent = yen;
}

function mall() {
    let value1 = parseFloat(document.getElementById('value_mall').value);
    let displayValue = document.getElementById('mall_value');
    let mall = (value1 / 100) * 56;

    displayValue.textContent = mall;
}

function pounds() {
    let value1 = parseFloat(document.getElementById('value_kg').value);
    let displayValue = document.getElementById('kg_value');
    let pounds = value1 * 2.205;

    displayValue.textContent = pounds;

}