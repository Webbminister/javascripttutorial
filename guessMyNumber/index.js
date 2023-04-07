'use strict'; 

// const reStart = document.querySelector('.again');
const number = document.querySelector('.number');
const check = document.querySelector('.check');
// const message = document.querySelector('.message');
 
//  document.querySelector('.highscore');

let secretNumber =Math.trunc(Math.random() * 20) + 1;

console.log(secretNumber);
let trialNumber = 0;    
let score =20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

check.addEventListener('click', function(){
const guess = Number(document.querySelector('.guess').value);
console.log(guess);
if (!guess){
    displayMessage("No number");
    }else if (guess === secretNumber){
    number.textContent = secretNumber;
    displayMessage("You won");
    document.querySelector('body').style.backgroundColor = 'green';


    if (score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }else {document.querySelector('.score').textContent = score;}
    //Number too High

} else if (guess !== secretNumber){
    if(score > 1){
        displayMessage( guess > secretNumber ? "Number too High" : "Number too low");
    //  document.querySelector('.message').textContent = guess > guessNumbers ? "Number too High" : "Number too low"; 
    score--;
    document.querySelector('.score').textContent = score;
    }else{
                displayMessage('You lost the game'); 
                document.querySelector('body').style.backgroundColor = "red";
                document.querySelector('.score').textContent = 0;
             }
}
});
//     }else if (guess > guessNumbers){
//     if(score > 1){
//         const message = document.querySelector('.message').textContent = "Number too High"; 
//         score--;
//         document.querySelector('.score').textContent = score;
    
//     }else{
//         const message = document.querySelector('.message').textContent = "Game over!"; 
//         document.querySelector('body').style.backgroundColor = "red";
//     }
    
//     }else if (guess < guessNumbers){
//         const message = document.querySelector('.message').textContent = "Number too low";  
//         score--;
//         document.querySelector('.score').textContent = score;
//     }
    
// })

// adding the reset function
document.querySelector('.again').addEventListener('click', function(){
displayMessage("Start guessing . . .")
number.textContent = '?';
document.querySelector('body').style.backgroundColor = 'black';
document.querySelector('.score').textContent = 20;
document.querySelector('.guess').value = '';
});
