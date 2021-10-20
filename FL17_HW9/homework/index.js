/* START TASK 1: Your code goes here */
const three = 3,
      five = 5,
      six = 6
let tbl = document.querySelector('.table')
let tr = document.querySelectorAll('tr');
let td = document.querySelectorAll('td');
for (let i = 0; i < td.length; i++) {
  if (i === 0 || i === three || i === six) {
    td[i].addEventListener('click', function () {
      td[i].closest('tr').classList.toggle('bgblue');
    }, false);

  } else if (i === five) {
    td[i].addEventListener('click', function () {
      tbl.classList.toggle('bggreen');
    }, false);
  } else {
    td[i].addEventListener('click', function () {
      this.classList.toggle('bgyellow');
    }, false);
  }
}
/* END TASK 1 */

/* START TASK 2: Your code goes here */
const div = document.getElementById('alert');
const btn = document.querySelector('.btn');
const inputPhone = document.getElementById('phone');
const invalidPrg = document.getElementById('invalid');
const validPrg = document.getElementById('valid');
const regx = /^[+][3][8][0]\d{9}$/im;

function isValidPhone() {
  let text = inputPhone.value;
  if (regx.test(text) === false) {
    inputPhone.setAttribute('onkeyup', 'myFunction()');
    div.classList = 'invalid';
    validPrg.classList = 'non'
    invalidPrg.classList = '';
    inputPhone.classList = 'invalidPhoneInput';
    inputPhone.value = '';
    btn.disabled = true;
  } else {
    invalidPrg.classList = 'non'
    validPrg.classList = ''
    div.classList = 'valid'
    inputPhone.value = '';
    btn.disabled = false;
  }
}
function myFunction() {
  let text = inputPhone.value;
  if (regx.test(text) === true) {
    invalidPrg.classList = 'non'
    inputPhone.classList = '';
    div.classList = '';
    btn.disabled = false;
  } else {
    invalidPrg.classList = ''
    inputPhone.classList = 'invalidPhoneInput';
    div.classList = 'invalid';
    btn.disabled = true;
  }
}
/* END TASK 2 */

/* START TASK 3: Your code goes here */
const basketRefs = {
    cort: document.querySelector('.basketball-cort'),
    ball: document.querySelector('.ball__wrapper'),
    scoreA: document.querySelector('.score-a'),
    scoreB: document.querySelector('.score-b'),
    display: document.querySelector('.display')
  };
  const { cort, ball, scoreA, scoreB, display } = basketRefs;
  const threeSeconds = 3000;
  
  let counterA = 0;
  let counterB = 0;
  
  const ballMoveHandler = e => {
    const { target } = e;
    const { style } = ball;
    if (target.classList.contains('left_basket')) {
      counterA += 1;
      scoreA.textContent = counterA;
      scoreHandler('Team A', 'red');
      style.left = '300px';
      style.top = '165px';
      return;
    }
    if (target.classList.contains('right_basket')) {
      counterB += 1;
      scoreB.textContent = counterB;
      scoreHandler('Team B', 'blue');
      style.left = '300px';
      style.top = '165px';
      return;
    } else {
      style.left = `${e.offsetX}px`;
      style.top = `${e.offsetY}px`;
    }
  };
  
  function removeScore() {
    display.style.color = 'white';
  }
  
  function scoreHandler(t, c) {
    const event = new CustomEvent('changeScore', {
      detail: { team: t, color: c }
    });
    display.dispatchEvent(event);
  }
  
  cort.addEventListener('mouseenter', () => {
    cort.addEventListener('click', ballMoveHandler);
  });
  cort.addEventListener('mouseleave', () => {
    cort.removeEventListener('click', ballMoveHandler);
  });
  display.addEventListener('changeScore', function (e) {
    const { team, color } = e.detail;
    display.textContent = `${team} score`;
    display.style.color = `${color}`;
    setTimeout(removeScore, threeSeconds);
  });
/* END TASK 3 */
