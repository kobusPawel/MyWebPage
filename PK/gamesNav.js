const frogger = document.querySelector('#frogger');
const spaceInvaders = document.querySelector('#spaceInvaders');
const memory = document.querySelector('#memory');
const mole = document.querySelector('#mole');

frogger.addEventListener(
    'click',()=>{
        window.open("games/frogger/frogger.html");
    }
);
spaceInvaders.addEventListener(
    'click',()=>{
        window.open("games/spaceInvaders/spaceInvaders.html");
    }
);
memory.addEventListener(
    'click',()=>{
        window.open("games/memory/memory.html");
    }
);
mole.addEventListener(
    'click',()=>{
        window.open("games/mole/mole.html");
    }
);