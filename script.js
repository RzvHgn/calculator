let display = document.getElementById('display');
let currentNumber = '';
let firstNumber = null;
let operator = null;

function appendToDisplay(value) {
    currentNumber += value;
    display.value = currentNumber;
}

function clearDisplay() {
    display.value = '';
    currentNumber = '';
    firstNumber = null;
    operator = null;
}

function calculate() {
    if (firstNumber !== null && operator !== null && currentNumber !== '') {
        operate();
        operator = null;
    }
}

function operate() {
    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(currentNumber);

    switch (operator) {
        case '+':
            display.value = roundResult(num1 + num2);
            break;
        case '-':
            display.value = roundResult(num1 - num2);
            break;
        case '*':
            display.value = roundResult(num1 * num2);
            break;
        case '/':
            if (num2 !== 0) {
                display.value = roundResult(num1 / num2);
            } else {
                display.value = 'Error: Divide by zero';
            }
            break;
        default:
            display.value = 'Error';
    }

    firstNumber = display.value;
    currentNumber = '';
}

function setOperator(selectedOperator) {
    if (firstNumber === null) {
        firstNumber = currentNumber;
        currentNumber = '';
        operator = selectedOperator;
    } else {
        calculate();
        operator = selectedOperator;
    }
}

function roundResult(value) {
    // Round to 4 decimal places
    return Math.round(value * 10000) / 10000;
}

function addDecimal() {
    if (!currentNumber.includes('.')) {
        currentNumber += '.';
        display.value = currentNumber;
    }
}

function applyPercentage() {
    if (currentNumber !== '') {
        currentNumber = roundResult(parseFloat(currentNumber) / 100);
        display.value = currentNumber;
    }
}

function toggleNegative() {
    if (currentNumber !== '') {
        currentNumber = roundResult(parseFloat(currentNumber) * -1);
        display.value = currentNumber;
    }
}