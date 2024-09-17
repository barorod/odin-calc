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
  if (arrNum.length > 0) {
    displayValue = operate(operator, arrNum);
    display.innerText = displayValue;
    arrNum = [];
    arrNum.push(displayValue);
  }
});

function showDisplay() {
  let val = parseInt(this.innerText);
  display.innerText = val;

  if (arrNum.length === 0) {
    arrNum.push(val);
    console.log(arrNum, val);
  } else if (arrNum.length === 1 && operator === '') {
    arrNum.shift();
    arrNum.push(val);
    console.log(arrNum, val, '=== 1');
  } else if (arrNum.length > 2) {
    arrNum = [];
  } else {
    console.log(arrNum, val, 'else');
    arrNum.push(val);
    console.log(arrNum, val, 'else');
  }
}

clear.addEventListener('click', () => {
  display.innerText = 0;
  displayValue = 0;
  operator = '';
  arrNum = [];
});
