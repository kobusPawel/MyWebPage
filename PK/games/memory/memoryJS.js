const board = document.querySelector('#cards'); 
const cardsArray = [
    {
        name : 'vanDijk',
        img :'img/vanDijk.jpg',
    },
    {
        name : 'Fab',
        img :'img/Fab.jpg',
    },
    {
        name : 'Trent',
        img :'img/Trent.jpg',
    },
    {
        name : 'Thiago',
        img :'img/Thiago.jpg',
    },
    {
        name : 'Mane',
        img :'img/Mane.jpg',
    },
    {
        name : 'Salah',
        img :'img/Salah.jpg',
    },
    {
        name : 'vanDijk',
        img :'img/vanDijk.jpg',
    },
    {
        name : 'Fab',
        img :'img/Fab.jpg',
    },
    {
        name : 'Trent',
        img :'img/Trent.jpg',
    },
    {
        name : 'Thiago',
        img :'img/Thiago.jpg',
    },
    {
        name : 'Mane',
        img :'img/Mane.jpg',
    },
    {
        name : 'Salah',
        img :'img/Salah.jpg',
    },
];
cardsArray.sort(()=>{return 0.5 - Math.random()}) 

let numberArray = [];
let nameArray = [];
let scoreCounter = 0;
const score = document.querySelector('#score');
const message = document.querySelector('#text');
const background = document.querySelector('#background');
const closePopUp = document.querySelector('#closePopUp');

closePopUp.addEventListener('click',()=>{
    background.style.visibility = 'hidden';
});
function displayMessage(text){
    background.style.visibility = 'visible';
    message.innerHTML = text;
}

function createBoard(){
for(let i=0; i<cardsArray.length;i++){
    const card = document.createElement('img');
    card.setAttribute('src','img/blank.jpg');
    card.setAttribute('number',i);
    card.addEventListener('click',flipCard);
    board.appendChild(card);
}
} 

function flipCard(){
    let number = this.getAttribute('number');
    this.setAttribute('src',cardsArray[number].img);
    numberArray.push(number);
    let name = cardsArray[number].name;
    nameArray.push(name);
    if (numberArray.length >= 2 && numberArray[0] != numberArray[1]) {
        setTimeout(checkMatch,500)
    } else if(numberArray[0] == numberArray[1]){
        displayMessage('You clicked the same card');
        nameArray.pop(name);
        numberArray.pop(name);
    }
}
function checkMatch() {
    const cardsCollection = document.querySelectorAll('img');

    if (nameArray[0] == nameArray[1]){
        scoreCounter = scoreCounter +1; 
        console.log(scoreCounter);
        score.innerHTML = scoreCounter;
        displayMessage('You found a match');
        cardsCollection[numberArray[0]].setAttribute('src','img/white.jpg');
        cardsCollection[numberArray[1]].setAttribute('src','img/white.jpg');
        cardsCollection[numberArray[0]].removeEventListener('click',flipCard);
        cardsCollection[numberArray[1]].removeEventListener('click',flipCard);
    } else if (nameArray[0] != nameArray[1]) {
        cardsCollection[numberArray[0]].setAttribute('src','img/blank.jpg');
        cardsCollection[numberArray[1]].setAttribute('src','img/blank.jpg');
        displayMessage('Keep searching')
    } else if (result == 6) {
        displayMessage('You found them all')
    } 
    nameArray=[];
    numberArray=[];
}
createBoard();
//checkMatch();