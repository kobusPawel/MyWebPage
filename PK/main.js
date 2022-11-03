const nav = document.querySelector('.nav');
const menuArea = document.querySelector('#menu')
const menuBars = document.querySelectorAll('.menu_bar')
let showMenu = false

menu.addEventListener('click',()=>{
    if (!showMenu) {
        nav.classList.add('nav_open')
        showMenu = true; 
    }else{
        nav.classList.remove('nav_open')
        showMenu = false; 
    }
})

menu.addEventListener('mouseover',()=>{
    menuBars.forEach((bar)=>{
        bar.classList.add('pointerActive');
    })
}) 

menu.addEventListener('mouseout',()=>{
    menuBars.forEach((bar)=>{
        bar.classList.remove('pointerActive');
    })
}) 
