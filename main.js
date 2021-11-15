const Hamburger=document.querySelector('.hamburger');
const Close=document.querySelector('.close');
const Menu=document.querySelector('.header__menu');



Hamburger.addEventListener('click',()=>{
    Hamburger.classList.add('active')
    Close.classList.add('active')
    Menu.classList.add('open')
})

Close.addEventListener('click',()=>{
    Hamburger.classList.remove('active')
    Close.classList.remove('active')
    Menu.classList.remove('open')
})