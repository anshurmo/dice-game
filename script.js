'use strict';

//defining elements//
const player0 = document.querySelector('.player--0')
const player1 = document.querySelector('.player--1')
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl =document.querySelector('.dice');
const btnNew =document.querySelector('.btn--new');
const btnRoll =document.querySelector('.btn--roll');
const btnHold =document.querySelector('.btn--hold');

//switch player const //
const switchPlayer=function(){document.getElementById(`current--${activePlayer}`).textContent=0;
        activePlayer= activePlayer===0?1:0;
        currentScore=0;
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active');};
    
//game start
let activePlayer =0;
const scores= [0,0]
let currentScore = 0 ;
let playing = true;


const init = function(){
let activePlayer =0;
const scores= [0,0]
let currentScore = 0 ;
let playing = true;
score0.textContent= 0;
score1.textContent=0;
current0El.textContent=0;
current1El.textContent=0;
player0.classList.remove('player--winner')
player1.classList.remove('player--winner')
player0.classList.add('player--active')
player1.classList.remove('player--active')
score0.textContent= 0;
score1.textContent=0;
diceEl.classList.remove('hidden')

}

init();


score0.textContent= 0;
score1.textContent=0;
diceEl.classList.add('hidden')
//rolling dice

btnRoll.addEventListener('click',function(){
    //generate random number
    if (playing){
    const dice = Math.trunc(Math.random() * 6) + 1;

    //display on dice

    diceEl.classList.remove('hidden')

    //manipulatre src to displace dice image
    diceEl.src =`dice-${dice}.png`;


    //check if its one

    if(dice !== 1){
        //add dice to score
        currentScore= currentScore +dice;
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;

    
    } else{

        //switch player
    //     document.getElementById(`current--${activePlayer}`).textContent=0;
    //     activePlayer= activePlayer===0?1:0;
    //     currentScore=0;
    //     player0.classList.toggle('player--active');
    //     player1.classList.toggle('player--active');

    // }
    switchPlayer();
    }
    }});



/// hold score rather than going to zero  and when it reaches 100 player wins

btnHold.addEventListener('click',function(){
    
    if (playing){
    //add current players score
scores[activePlayer] += currentScore;
document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];


    //check if score is >= 100

    if(scores[activePlayer]>=100){
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
    //stop working
    playing= false;
    //remove dice
    diceEl.classList.add('hidden')
    
    
}else {switchPlayer();
    switchPlayer();
        diceEl.classList.add('hidden')
    }

switchPlayer();
    
   
}});


//new game

btnNew.addEventListener('click',init)





