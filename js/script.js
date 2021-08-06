const navButton = document.querySelector('.nav_button');
const navBar = document.querySelector('.navbar');
const navLinks = document.querySelector('.nav-links');
const body = document.querySelector('.body');
const humburgers = document.querySelectorAll('.humburgers');
const emailInput = document.querySelector('.inbox_input');
const goButton = document.querySelector('.submit');
const errMsg = document.querySelector('.err_p');

let clicked = true;

navButton.addEventListener('click', () => {
    
    navButton.classList.toggle('changeBg');
    navBar.classList.toggle('disp_none');
    
    for (i = 0; i < humburgers.length; i++ ){
       humburgers[i].classList.toggle('clicked');
    } 
    body.classList.toggle('disable_scroll');
    
    setTimeout(()=>{
        navLinks.classList.toggle('isOpen');
    }, 0.01);
});

goButton.addEventListener('click', ()=>{
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)){
        if(errMsg.classList.contains('noErr_msg')){
            errMsg.classList.remove('noErr_msg');
        }
    } else{
        errMsg.classList.add('noErr_msg');
    }
});
