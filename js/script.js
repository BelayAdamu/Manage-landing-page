const navButton = document.querySelector('.nav_button');
const navBar = document.querySelector('.navbar');
const navLinks = document.querySelector('.nav-links');
const body = document.querySelector('.body');
const humburgers = document.querySelectorAll('.humburgers');

let clicked = true;

navButton.addEventListener('click', () => {
    navButton.classList.toggle('changeBg');
    navBar.classList.toggle('disp_none');
    for (i=0; i < humburgers.length; i++ ){
       humburgers[i].classList.toggle('clicked');
    } 
    body.classList.toggle('disable_scroll');
    setTimeout(()=>{
        navLinks.classList.toggle('isOpen');
    }, 0.01);
})
