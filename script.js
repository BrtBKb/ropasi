let player;             //declared player for prompt's input
    while (!player || !("rock, paper, scissor").toLowerCase().includes(player.toLowerCase()))  {   //used a while loop to prevent user from inputting anything else besides what the prompt is asking for
        player = prompt("Choose from rock, paper, scissor:", "rock") ;       //This will prompt the user between three choices.
        player = player.toLowerCase();   //inputs from user will make the strings all lower case
    }  
let arrRandom = ["rock", "paper", "scissor"];     //create an array for the computer to choose its three choices.
let computer = arrRandom[(Math.floor(Math.random() * arrRandom.length))];  // SET computer's input to be random using array's index



function play(playerSelection, computerSelection){   // OBTAIN inputs from player and computers
         computerSelection = computerSelection.toLowerCase();   //all string will be lower case with this method. This method will help further later when comparing strings. 
         playerSelection = playerSelection.toLowerCase();       //player's input will format strings into lowercase.
         let userCount = 0;                         //declared a variable to tally user's win
         let computerCount = 0 ;                     //declared a variable to tally computer's win
         let result ;
         
         switch(true){
         
         case playerSelection === "rock" &&  computerSelection === "scissor":
         case playerSelection === "paper" &&  computerSelection === "rock":
         case playerSelection === "scissor" &&  computerSelection === "paper":
         userCount += 1;
         result = "User win";
         break;
         case computerSelection === "rock" &&  playerSelection === "scissor":
         case computerSelection === "paper" &&  playerSelection === "rock":
         case computerSelection === "scissor" &&  playerSelection === "paper":
         computerCount += 1;
         result = "computer win";
         break;
         default:        //compare both input, using an if statement. if both are the same it will be a tie  
         userCount += 1;                               //increment the user tally to one
         computerCount += 1;                           //increment the computer tally to one
         result = "tie";
         break;
        }
        return {userCount, computerCount, result};
      }
        

    function playRound(playerSelection) {
        let userCount = 0;
        let computerCount = 0;
        let result;
        for (let round = 0; round <= 5; round++) {
            let arrRandom = ["rock", "paper", "scissor"];
            let computerSelection = arrRandom[Math.floor(Math.random() * arrRandom.length)];
            let roundResult = play(playerSelection, computerSelection);
            userCount += roundResult.userCount;
            computerCount += roundResult.computerCount;
            result = roundResult.result;
        }
        alert(`After 5 rounds: ${result}, User: ${userCount}, Computer: ${computerCount}`);
    }
    

        
              
playRound(player);                                                 //add the two variable I declared in the beginning as the arguments. These variable has stored user's input and computer's input


