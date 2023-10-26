let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;



function generateTarget(){
  return Math.floor(Math.random() * 10);
}

console.log(generateTarget());

function compareGuesses(humanGuess,computerGuess,targetGuess){
  const humanDiff = Math.abs(targetGuess - humanGuess);
  const computerDiff = Math.abs(targetGuess - computerGuess);

  if(humanDiff <= computerDiff){
    return true;
  }else{
    return false;
  }
}


function updateScore(score){

if(score==="human"){
    humanScore++;
  } else if(score==="computer"){
    computerScore++;
  }
}

function advanceRound(){
  currentRoundNumber++;
}


