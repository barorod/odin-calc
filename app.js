const numbers = document.querySelectorAll('#number');
const display = document.querySelector('.display');
const operators = document.querySelectorAll('#operator');
const clear = document.querySelector('#clear');
const equal = document.querySelector('#equal');

let displayValue = 0;
let arrNum = [];
let operator = '';

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
    operator = opr.innerText;
    if (arrNum.length === 2) {
      displayValue = operate(operator, arrNum);
      display.innerText = displayValue;
      arrNum = [];
      arrNum.push(displayValue);
    }
  });
});

equal.addEventListener('click', () => {
  displayValue = operate(operator, arrNum);
  display.innerText = displayValue;
  arrNum = [];
  arrNum.push(displayValue);
});

function showDisplay() {
  display.innerText = this.innerText;
  if (arrNum.length > 2) {
    arrNum.unshift;
  } else {
    arrNum.push(parseInt(this.innerText));
  }
}

clear.addEventListener('click', () => {
  display.innerText = 0;
  displayValue = 0;
  operator = '';
});
