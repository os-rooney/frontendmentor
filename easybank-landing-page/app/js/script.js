<<<<<<< HEAD
const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

header.addEventListener('click', () => {
    if(header.classList.contains('open')){ // Close Hamburger Menu
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElems.forEach( (element) => {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    } 
    else {  // Open Hamburger Menu
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach( (element) => {
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        });
        
    }

=======
const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

header.addEventListener('click', () => {
    if(header.classList.contains('open')){ // Close Hamburger Menu
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElems.forEach( (element) => {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    } 
    else {  // Open Hamburger Menu
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach( (element) => {
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        });
        
    }

>>>>>>> 78825cc64cc84587745eb88236c49c21b707cd19
});