

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


// get all the calculator's buttons

let seven = document.querySelector('#seven');
let eight = document.querySelector('#eight');
let nine = document.querySelector('#nine');
let delLastNumber = document.querySelector('#del');
let four = document.querySelector('#four');
let five = document.querySelector('#five');
let six = document.querySelector('#six');
let plus = document.querySelector('#plus');
let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');
let minus = document.querySelector('#minus');
let period = document.querySelector('#period');
let zero = document.querySelector('#zero');
let divide = document.querySelector('#divide');
let mulitply = document.querySelector('#mulitply');
let clear = document.querySelector('#clear');
let sum = document.querySelector('#sum');

// the calculator's screen

let innerScreen = document.querySelector('.innerScreen');

let cal = document.createTextNode('');



let sumAll;

//number one 

one.addEventListener('click', addOne);

function addOne() {
    innerScreen.textContent += '1';
}

//number two

two.addEventListener('click', addTwo);

function addTwo() {
    innerScreen.textContent += '2';
}


//number three

three.addEventListener('click', addThree);

function addThree() {
    innerScreen.textContent += '3';
}

//number four 

four.addEventListener('click', addFour);

function addFour() {
    innerScreen.textContent += '4';
}

//number five

five.addEventListener('click', addFive);

function addFive() {
    innerScreen.textContent += '5';
}

//number six

six.addEventListener('click', addSix);

function addSix() {
    innerScreen.textContent += '6';
}

//number seven

seven.addEventListener('click', addSeven);

function addSeven() {
    innerScreen.textContent += '7';
}


//number eight

eight.addEventListener('click', addEight);

function addEight() {
    innerScreen.textContent += '8';
}


//number nine

nine.addEventListener('click', addNine);

function addNine() {
    innerScreen.textContent += '9';
}



//number zero

zero.addEventListener('click', addZero);

function addZero() {
    innerScreen.textContent += '0';
}


//delete the last entrie

delLastNumber.addEventListener('click', deleteLastNum)

function deleteLastNum() {

    if(innerScreen.textContent != '') {
       let newInnerScreen = innerScreen.textContent.slice(0, -1);
       innerScreen.textContent = newInnerScreen;

    }
   
}

//the plus sign

plus.addEventListener('click', addition);

function addition() {
    innerScreen.textContent += '+';
};

//the minus sign

minus.addEventListener('click', substraction);

function substraction() {
    innerScreen.textContent += '-';
};


//the mulitplication sign

mulitply.addEventListener('click', muulti);

function muulti() {
    innerScreen.textContent += '*';
};

//the division sign

divide.addEventListener('click', divideTheNum);

function divideTheNum() {
   
        innerScreen.textContent += '/';
    
}


//the point

period.addEventListener('click', periodSign);

function periodSign() {
    innerScreen.textContent += '.';
}

//the reset button

clear.addEventListener('click', deleteAll);

function deleteAll() {
    
    if(innerScreen.textContent !='') {
        innerScreen.textContent = '';
    }
}

//the sumup button

sum.addEventListener('click', sumItUp);

function sumItUp() {
    if(innerScreen.textContent !='') {
        let sumup = eval(innerScreen.textContent);
        innerScreen.textContent = sumup;
    }
    
}



alert(parseInt('3/3'))