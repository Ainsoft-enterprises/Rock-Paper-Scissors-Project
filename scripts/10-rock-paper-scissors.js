const score=JSON.parse(localStorage.getItem('score'))||{
  Wins: 0,
  Losses: 0,
  Ties: 0

};
updateScoreElement();
function playGame(playerMove){

  const randomNumber=Math.random();
  let computerMove='';
  if(randomNumber>=0&&randomNumber<1/3){computerMove='rock'}
  else if(randomNumber>=1/3&&randomNumber<2/3){computerMove='paper'}
  else{computerMove='scissors'}
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
function updateScoreElement(){
document.querySelector('.js-score')
.innerHTML=`Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
}

