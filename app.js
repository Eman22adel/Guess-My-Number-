'use strict';
let again = document.getElementById('again');
let check = document.getElementById('check');
let outinput = document.getElementById('outinput');
let input = document.getElementById('input');
let body = document.querySelector('html');
let cassinput = document.getElementById('cassinput');
let score = document.getElementById('score');
let highscore = document.getElementById('highscore');

let count = 0;
let total = 20;

again.disabled = true;  // to prervent defult of button again
cassinput.textContent = 'start gussing ...';
score.textContent = total;
highscore.textContent = count;
    
let numCheck = Math.round(Math.random() * 20);


//////// check if the num true ////////
check.addEventListener('click', () => {

    if (input.value != '' && total != 0 && input.value <= 20){
        if (Number(input.value) === numCheck) {
            body.style.background = 'green';
            outinput.setAttribute("placeholder", numCheck);
            cassinput.textContent = '🥳 correct number';
            highscore.textContent = ++count;
            setTimeout(() => {
                body.style.background = 'black';
                outinput.setAttribute("placeholder", '?');
                input.value = '';
                cassinput.textContent = 'start gussing ...';
            }, '1500')
            numCheck = Math.round(Math.random() * 20);
        }
        else if (Number(input.value) > numCheck) {
            score.textContent = --total;
            cassinput.textContent = 'too high !';
        } else {
            score.textContent = --total;
            cassinput.textContent = 'too low !';
            
        }
    }
    if (input.value == '') {
        cassinput.textContent = '⛔ no number';
    }
    if (input.value > 20) {
        cassinput.textContent = '❌ enter number between 1 and 20 ';
    }
    if (total == 0) { 
        cassinput.textContent = '🥲 you lost the game!';
        check.disabled = true;
        again.disabled = false;
        input.value = '';
        input.setAttribute('readonly', true);

    }
})
again.addEventListener('click', () => {
    count = 0;
    total = 20;
    check.disabled = false;
    again.disabled = true;
    outinput.setAttribute("placeholder", '?');
    input.value = '';
    cassinput.textContent = 'start gussing ...';
    score.textContent = total;
    highscore.textContent =  count;
    input.removeAttribute('readonly');
})