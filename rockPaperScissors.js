const getUserChoice=(userInput)=>{
userInput=userInput.toLowerCase();
if(userInput==='rock'||userInput==='paper'||userInput==='scissors'||userInput==='bomb'){
  return userInput;
}else{
  console.log('Input error!')
  
}
}
const getComputerChoice=()=>{
  let randomNum=Math.floor(Math.random()*3);
  switch(randomNum){
    case 0:return "rock";
    break;
    case 1:return "scissors";
    break;
    case 2:return "paper";
    break;
  }
}

const determineWinner = (userChoice,computerChoice)=>{
 if(userChoice===computerChoice){
   return "draw"
 }
 else if(userChoice==="paper" && computerChoice==="rock"){
   return "user"
 }
 else if(userChoice==="rock"&&computerChoice==="scissors"){
   return "user"
 }
 else if(userChoice==="scissors" && computerChoice==="paper"){
   return 'user'
 }else if(userChoice==="bomb"){
   return "user";
 }else{
   return "computer"
 }
}
 
const playGame=()=>{
  let userChoice = getUserChoice('bomb');
 
  let computerChoice = getComputerChoice();
 
  console.log(determineWinner(userChoice,computerChoice));
}
playGame();

