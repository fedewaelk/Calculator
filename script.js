let firstNumber = '';
let secondNumber = '';
let operator = '';

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b===0) {
        return 'ERROR'
    }
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
      case '+':
        return add(a, b);
      case '-':
        return subtract(a, b);
      case '*':
        return multiply(a, b);
      case '/':
        return divide(a, b);
    }
  }

let currentDisplayValue = '';

function updateDisplay() {
    const display = document.querySelector('.display');
    display.textContent = currentDisplayValue || '0';
}

function appendDigit(digit) {
  currentDisplayValue += digit;
  updateDisplay();
}

const digitButtons = document.querySelectorAll('.number');
digitButtons.forEach(button => {
  button.addEventListener('click', () => {
    appendDigit(button.textContent);
  });
});
