import { Calculator } from './calculator.js';

const calculator = new Calculator();
const numberButtons = document.querySelectorAll('.calculator-grid button:not(.operator):not(.clear):not(.delete):not(.equals)');
const operationButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const deleteButton = document.querySelector('.delete');
const clearButton = document.querySelector('.clear');
const previousOperandTextElement = document.querySelector('.previous-operand');
const currentOperandTextElement = document.querySelector('.current-operand');

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay(currentOperandTextElement, previousOperandTextElement);
  });
});

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay(currentOperandTextElement, previousOperandTextElement);
  });
});

equalsButton.addEventListener('click', () => {
  calculator.compute();
  calculator.updateDisplay(currentOperandTextElement, previousOperandTextElement);
});

clearButton.addEventListener('click', () => {
  calculator.clear();
  calculator.updateDisplay(currentOperandTextElement, previousOperandTextElement);
});

deleteButton.addEventListener('click', () => {
  calculator.delete();
  calculator.updateDisplay(currentOperandTextElement, previousOperandTextElement);
});