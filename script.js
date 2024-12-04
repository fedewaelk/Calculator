let currentNumber = '';
let previousNumber = '';
let operation = '';

function calculate() {
    if (previousNumber === '' || currentNumber === '' || operation === '') return;
  
    const num1 = parseFloat(previousNumber);
    const num2 = parseFloat(currentNumber);
    let result = 0;

    switch (operation) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '*':
            result = a * b;
            break;  
        default:
            return;
    }
}