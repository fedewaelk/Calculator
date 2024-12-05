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
  if (currentDisplayValue && !isNaN(currentDisplayValue) && !currentDisplayValue.includes('.')) {
    currentDisplayValue = parseFloat(currentDisplayValue)
      .toFixed(12)
      .replace(/\.?0+$/, '');
  }
  display.textContent = currentDisplayValue || '0';
}

function appendDigit(digit) {
  if (digit === '.' && currentDisplayValue.includes('.')) return;
  if (currentDisplayValue === '' && digit === '.') {
    currentDisplayValue = '0';
  }
  if (currentDisplayValue.length >= 14) return;
  currentDisplayValue += digit;
  updateDisplay();
}

function handleOperator(key) {
  if (firstNumber === '') {
    firstNumber = currentDisplayValue;
    operator = key;
    currentDisplayValue = '';
  } else if (operator) {
    secondNumber = currentDisplayValue;
    currentDisplayValue = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber)).toString();
    updateDisplay();
    firstNumber = currentDisplayValue;
    operator = key;
    currentDisplayValue = '';
  }
}

function handleEquals() {
  if (firstNumber !== '' && operator !== '' && currentDisplayValue !== '') {
    secondNumber = currentDisplayValue;
    currentDisplayValue = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber)).toString();
    updateDisplay();
    firstNumber = '';
    secondNumber = '';
    operator = '';
  }
}

function handleBackspace() {
  if (currentDisplayValue.length > 0) {
    currentDisplayValue = currentDisplayValue.slice(0, -1);
    updateDisplay();
  }
}

function handleClear() {
  firstNumber = '';
  secondNumber = '';
  operator = '';
  currentDisplayValue = '';
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
    handleOperator(button.textContent);
  });
});

const equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click', handleEquals);

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', handleClear);

const backspaceButton = document.querySelector('.backspace');
backspaceButton.addEventListener('click', handleBackspace);

const signToggleButton = document.querySelector('.sign-toggle');
signToggleButton.addEventListener('click', () => {
  if (currentDisplayValue !== '') {
    currentDisplayValue = (parseFloat(currentDisplayValue) * -1).toString();
    updateDisplay();
  }
});

document.addEventListener('keydown', (event) => {
  const key = event.key;

  if (!isNaN(key)) {
    appendDigit(key);
  } else if (key === '.') {
    appendDigit(key);
  } else if (['+', '-', '*', '/'].includes(key)) {
    handleOperator(key);
  } else if (key === 'Enter' || key === '=') {
    handleEquals();
  } else if (key === 'Backspace') {
    handleBackspace();
  } else if (key === 'Escape' || key === 'Delete') {
    handleClear();
  }
});



