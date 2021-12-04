

let theme1 = document.querySelector('#theme1');

let theme2 = document.querySelector('#theme2');

let theme3 = document.querySelector('#theme3');

let screen = document.querySelector('.screen');

let CalContainer = document.querySelector('.cal-container');

let key = document.querySelectorAll('.key');

let del = document.querySelector('.del');

let rest = document.querySelector('.rest');

let igual = document.querySelector('.igual');

let theSwitch = document.querySelector('.switch');

let theCircle = document.querySelector('.cirlce');



function checkoutTheOthers(checkbox) {
    let checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

theme1.addEventListener('click', switchToOne);

function switchToOne() {

    if(theme1.checked) {
        document.body.style.color = 'white';
        document.body.classList.remove('bg2');
        document.body.classList.remove('bg3');
        document.body.classList.add('bg1');
        screen.classList.remove('screen2');
        screen.classList.remove('keypad3');
        screen.classList.add('screen1');
        CalContainer.classList.remove('keypad2');
        CalContainer.classList.remove('keypad3');
        CalContainer.classList.add('keypad1');
        rest.style.backgroundColor = 'var(--del-rest1)';
        rest.style.boxShadow = '0 5px var(--del-shadow1)';
        igual.style.color = 'white';
        igual.style.backgroundColor = 'var(--igual-red)';
        igual.style.boxShadow = '0 5px var(--red-shadow)';
        del.style.backgroundColor = 'var(--del-rest1)';
        del.style.boxShadow = '0 5px var(--del-shadow1)';
        theSwitch.style.backgroundColor = 'var(--keypad1)';
        theCircle.style.backgroundColor = 'var(--igual-red)';
        theCircle.style.left = ' 0.2rem';
        

        key.forEach(x => {
            x.style.color = 'hsl(221, 14%, 31%)';
            x.style.backgroundColor = 'hsl(30, 25%, 89%)';
            x.style.boxShadow = '0 5px var(--keyshadow1)';
        })
    }
}



theme2.addEventListener('click', switchToTwo);

function switchToTwo() {

    if(theme2.checked) {
        document.body.style.color = 'hsl(60, 10%, 19%)';
        document.body.classList.remove('bg1');
        document.body.classList.remove('bg3');
        document.body.classList.add('bg2');
        screen.classList.remove('screen1');
        screen.classList.remove('keypad3');
        screen.classList.add('screen2');
        CalContainer.classList.remove('keypad1');
        CalContainer.classList.remove('keypad3');
        CalContainer.classList.add('keypad2');
        rest.style.backgroundColor = 'var(--del-rest2)';
        rest.style.boxShadow = '0 5px var(--del-shadow2)';
        rest.style.color = 'white';
        igual.style.backgroundColor = 'var(--igual2)';
        igual.style.color = 'white';
        igual.style.boxShadow = '0 5px var(--igual-shadow2)';
        del.style.backgroundColor = 'var(--del-rest2)';
        del.style.boxShadow = '0 5px var(--del-shadow2)';
        del.style.color = 'white';
        rest.style.color = 'white';
        theSwitch.style.backgroundColor = 'var(--keypad-toggle2)';
        theCircle.style.backgroundColor = 'var(--igual2)';
        theCircle.style.left = ' 2rem';
       
       

        key.forEach(x => {
            x.style.color = 'hsl(60, 10%, 19%)';
            x.style.backgroundColor = 'hsl(30, 25%, 89%)';
            x.style.boxShadow = '0 5px hsl(35, 11%, 61%)';
        })
    }
}


theme3.addEventListener('click', switchToThree);

function switchToThree() {

    if(theme3.checked) {
        document.body.style.color = 'hsl(52, 100%, 62%)';
        document.body.classList.remove('bg1');
        document.body.classList.remove('bg2');
        document.body.classList.add('bg3');
        screen.classList.remove('screen1');
        screen.classList.remove('screen2');
        screen.classList.add('keypad3');
        CalContainer.classList.remove('keypad1');
        CalContainer.classList.remove('keypad2');
        CalContainer.classList.add('keypad3');
        rest.style.backgroundColor = 'var(--del-rest3)';
        rest.style.color = 'white';
        rest.style.boxShadow = '0 5px var(--del-shadow3)';
        igual.style.backgroundColor = 'var(--igual3)';
        igual.style.boxShadow = '0 5px var(--igual-shadow3)';
        igual.style.color = 'hsl(198, 20%, 13%)';
        del.style.backgroundColor = 'var(--del-rest3)';
        del.style.boxShadow = '0 5px var(--del-shadow3)';
        del.style.color = 'white';
        theSwitch.style.backgroundColor = 'var(--toggle-keypad3)';
        theCircle.style.backgroundColor = 'var(--igual3)';
        theCircle.style.left = ' 3.8rem';

        key.forEach(x => {
            x.style.color = 'hsl(52, 100%, 62%)';
            x.style.backgroundColor = 'hsl(268, 47%, 21%)';
            x.style.boxShadow = '0 5px hsl(290, 70%, 36%)';
        })
       
    }
}