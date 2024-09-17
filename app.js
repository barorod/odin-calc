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
    arrNum.push(+display.innerText);
    if (arrNum.length === 1) {
      operator = opr.innerText;
      isNewNumber = true;
    }

    if (arrNum.length === 2) {
      display.innerText = operate(operator, arrNum);
      arrNum = [];
      arrNum.push(+display.innerText);
      operator = opr.innerText;
      isNewNumber = true;
    }
  });
});

equal.addEventListener('click', () => {
  arrNum.push(+display.innerText);
  if (arrNum.length === 2) {
    display.innerText = operate(operator, arrNum);
    arrNum = [];
    arrNum.push(+display.innerText);
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

  //   if (arrNum.length === 0 || (arrNum.length === 1 && operator.length === 1)) {
  //     arrNum.push(val);
  //     console.log(arrNum, val, 'first');
  //   } else if (
  //     (arrNum.length === 1 && operator === '') ||
  //     (arrNum.length === 2 && operator === '')
  //   ) {
  //     arrNum.shift();
  //     arrNum.push(val);
  //     console.log(arrNum, val, '2nd');
  //   }
}

clear.addEventListener('click', () => {
  display.innerText = 0;
  displayValue = 0;
  operator = '';
  arrNum = [];
});
