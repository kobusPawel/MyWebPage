const squares = document.querySelectorAll('.square'); 
const result = document.querySelector('#result'); 
const time = document.querySelector('#time');
let scoreCounter = 0;

function randomSquare() {
   squares.forEach(square => { square.classList.remove('mol')})
   let pointer = Math.floor(Math.random()*9); 
   squares[pointer].classList.add('mol');
   squares.forEach(square => { square.addEventListener('mousedown',()=>{
       console.log(square.id,pointer);
       if (square.id == pointer){
        scoreCounter++
       }
   })})
  console.log(scoreCounter);
} 

let moveSquare 
let measureTime 
let gameTime = 7;
moveSquare = setInterval(randomSquare,1000); 
measureTime = setInterval(timer,1000)

function timer (){
    gameTime--;
    time.innerText = gameTime;
    result.innerText = scoreCounter;
    if (gameTime == 0){
        clearInterval(moveSquare);
        clearInterval(measureTime);
        alert('Game over');
    }
}


