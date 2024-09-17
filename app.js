const numbers = document.querySelectorAll('#number');
const display = document.querySelector('.display');
const operators = document.querySelectorAll('#operator');
const clear = document.querySelector('#clear');
const equal = document.querySelector('#equal');

let displayValue;
let arrNum = [];
let operator = '';
let isNewNumber = false;

function operate(sign, arr) {
  if (arr.length === 2 && sign === '+') {
    return arr.reduce((acc, curr) => acc + curr);
  }
  if (arr.length === 2 && sign === '-') {
    return arr.reduce((acc, curr) => acc - curr);
  }
  if (arr.length === 2 && sign === '*') {
    return arr.reduce((acc, curr) => acc * curr);
  }
  if (arr.length === 2 && sign === '/') {
    return arr.reduce((acc, curr) => acc / curr);
  }
}

numbers.forEach((num) => {
  num.addEventListener('click', showDisplay);
});

operators.forEach((opr) => {
  opr.addEventListener('click', () => {
    if (arrNum.length === 0 && operator === '') {
      arrNum.push(+display.innerText);
      isNewNumber = true;
      console.log(arrNum, operator, display.innerText);
    } else if (arrNum.length === 1 && operator) {
      arrNum.push(+display.innerText);
      display.innerText = operate(operator, arrNum);
      arrNum = [+display.innerText];
      isNewNumber = true;
      console.log(arrNum, operator, display.innerText);
    }

    operator = opr.innerText;
  });
});

equal.addEventListener('click', () => {
  if (operator === '') return;

  if (arrNum.length === 1) {
    arrNum.push(+display.innerText);
    display.innerText = operate(operator, arrNum);
    arrNum = [+display.innerText];
    isNewNumber = true;
    operator = '';
  }
});

function showDisplay() {
  let val = this.innerText;

  if (isNewNumber || display.innerText === '0') {
    display.innerText = val;
    isNewNumber = false;
  } else {
    display.innerText += val;
  }
}

clear.addEventListener('click', () => {
  display.innerText = '0';
  operator = '';
  arrNum = [];
});
