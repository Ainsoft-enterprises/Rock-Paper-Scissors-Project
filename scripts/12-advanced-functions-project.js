const score=JSON.parse(localStorage.getItem('score'))||{
  Wins: 0,
  Losses: 0,
  Ties: 0

};
updateScoreElement();


let isAutoPlaying=false;
let intervalId;
function autoPlay(){
  if(!isAutoPlaying){
    intervalId=setInterval(function(){
      const playerMove=pickComputerMove();
      playGame(playerMove);
    },1000);
    document.querySelector('.auto-play-button').innerHTML='Stop playing';

    isAutoPlaying=true;
  }

  else{
    document.querySelector('.auto-play-button').innerHTML='Auto play';
    clearInterval(intervalId);
    isAutoPlaying=false;
  }
}

document.querySelector('.js-rock-button').addEventListener('click',()=>{
  playGame('rock');
});

document.querySelector('.js-paper-button').addEventListener('click',()=>{
  playGame('paper');
});

document.querySelector('.js-scissors-button').addEventListener('click',()=>{
  playGame('scissors');
});

document.querySelector('.js-auto-play-button').addEventListener('click',()=>{
  autoPlay();
});

document.body.addEventListener('keydown',(event)=>{
if(event.key==='r'){
  playGame('rock');
}
else if(event.key==='p'){
  playGame('paper');
}
else if(event.key==='s'){
  playGame('scissors');
}
else if(event.key==='a'){
  autoPlay();
}
});

function playGame(playerMove){
 
const computerMove=pickComputerMove();
let result='';


if(playerMove==='rock'){
  if(computerMove==='rock'){
    result='Tie.';
  }
  else if(computerMove==='paper'){
    result='You lose.';
  }
  else{
    result='You win.';
  }
}
else if(playerMove==='paper'){
  if(computerMove==='rock'){
    result='You win.';
  }
  else if(
    computerMove==='paper'
  ){
    result='Tie.';
  }
  else{
    result='You lose.';
  }
}
else{
  if(computerMove==='rock'){result='You lose.';}
  else if(computerMove==='paper'){result='You win.';}
  else{result='Tie';}
}

if(result==='You win.'){
  score.Wins++;
}
else if(result==='You lose.'){
  score.Losses++;
}
else{
  score.Ties++;
}
localStorage.setItem('score',JSON.stringify(score));
updateScoreElement();
document.querySelector('.js-result').innerHTML= result;

document.querySelector('.js-moves').innerHTML= `You
<img class="move-icon" src="images/${playerMove}-emoji.png">
<img class="move-icon" src="images/${computerMove}-emoji.png">
Computer`;

return computerMove;

}

let resetScore='';



document.querySelector('.js-reset').addEventListener('click',()=>{

      const html=`Are you sure you want to reset the score? <button onclick="
   
      score.Wins= 0;
       score.Losses= 0;
       score.Ties= 0;
       localStorage.removeItem('score')
       updateScoreElement();
      
       document.querySelector('.js-confirmation').innerHTML='';
       
      " class="js-yes-button yes-button">Yes</button>
      <button onclick="
      document.querySelector('.js-confirmation').innerHTML='';
      " class="
      js-no-button no-button
      ">No</button>`;
       resetScore=html;
       document.querySelector('.js-confirmation').innerHTML=resetScore;
  
      
 

 
   
});

document.body.addEventListener('keydown',(event)=>{
  if(event.key==='Enter'){
    const html=`Are you sure you want to reset the score? <button onclick="
   
    score.Wins= 0;
     score.Losses= 0;
     score.Ties= 0;
     localStorage.removeItem('score')
     updateScoreElement();
    
     document.querySelector('.js-confirmation').innerHTML='';
     
    " class="js-yes-button yes-button">Yes</button>
    <button onclick="
    document.querySelector('.js-confirmation').innerHTML='';
    " class="
    js-no-button no-button
    ">No</button>`;
     resetScore=html;
     document.querySelector('.js-confirmation').innerHTML=resetScore;}
});


function updateScoreElement(){
document.querySelector('.js-score')
.innerHTML=`Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
}

function pickComputerMove(){
  const randomNumber=Math.random();
  let computerMove='';
  if(randomNumber>=0&&randomNumber<1/3){computerMove='rock'}
  else if(randomNumber>=1/3&&randomNumber<2/3){computerMove='paper'}
  else{computerMove='scissors'}

  return computerMove;
}

