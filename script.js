let firstNumber = '';
let secondNumber = '';
let operator = '';
let currentDisplayValue = '';

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
  if (b === 0) {
    return 'ERROR';
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
    default:
      return null;
  }
}

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

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (firstNumber === '') {
      firstNumber = currentDisplayValue;
      operator = button.textContent;
      currentDisplayValue = '';
    } else if (operator) {
      secondNumber = currentDisplayValue;
      currentDisplayValue = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber)).toString();
      updateDisplay();
      firstNumber = currentDisplayValue;
      operator = button.textContent;
      currentDisplayValue = '';
    }
  });
});

const equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click', () => {
  if (firstNumber !== '' && operator !== '' && currentDisplayValue !== '') {
    secondNumber = currentDisplayValue;
    currentDisplayValue = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber)).toString();
    updateDisplay();
    firstNumber = '';
    secondNumber = '';
    operator = '';
  }
});

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
  firstNumber = '';
  secondNumber = '';
  operator = '';
  currentDisplayValue = '';
  updateDisplay();
});
