const numbers = document.querySelectorAll('#number');
const display = document.querySelector('.display');
const operators = document.querySelectorAll('#operator');
const clear = document.querySelector('#clear');
const equal = document.querySelector('#equal');
const backSpace = document.querySelector('.back');

let displayValue;
let arrNum = [];
let operator = '';
let isNewNumber = false;

function operate(sign, arr) {
  let result;

  if (sign === '+') {
    result = arr.reduce((acc, curr) => acc + curr);
  } else if (sign === '-') {
    result = arr.reduce((acc, curr) => acc - curr);
  } else if (sign === '*') {
    result = arr.reduce((acc, curr) => acc * curr);
  } else if (sign === '/') {
    result = arr.reduce((acc, curr) => acc / curr);
  }

  if (!Number.isInteger(result)) {
    result = Math.round(result * 100) / 100;
  }

  return result;
}

numbers.forEach((num) => {
  num.addEventListener('click', showDisplay);
});

operators.forEach((opr) => {
  opr.addEventListener('click', () => {
    if (arrNum.length === 0 && operator === '') {
      arrNum.push(+display.innerText);
      isNewNumber = true;
    } else if (arrNum.length === 1 && operator) {
      arrNum.push(+display.innerText);
      display.innerText = operate(operator, arrNum);
      arrNum = [+display.innerText];
      isNewNumber = true;
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

  if (val === '.') {
    if (display.innerText === '' || display.innerText === '0' || isNewNumber) {
      display.innerText = '0.';
      isNewNumber = false;
      return;
    } else if (display.innerText.includes('.')) {
      return;
    }
  }

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

backSpace.addEventListener('click', () => {
  let res = display.innerText;
  if (res === '0' && arrNum.length === 1) {
    arrNum = [];
    display.innerText = 0;
  }
  if (res.length === 1) {
    display.innerText = res.slice(0, res.length - 1);
    display.innerText = 0;
  } else if (res.length > 1) {
    display.innerText = res.slice(0, res.length - 1);
  }
});
