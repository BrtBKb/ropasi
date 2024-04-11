let player;             //declared player for prompt's input
    while (!player || !("rock, paper, scissor").toLowerCase().includes(player.toLowerCase()))  {   //used a while loop to prevent user from inputting anything else besides what the prompt is asking for
        player = prompt("Choose from rock, paper, scissor:", "rock") ;       //This will prompt the user between three choices.
        player = player.toLowerCase();   //inputs from user will make the strings all lower case
    }  
let arrRandom = ["rock", "paper", "scissor"];     //create an array for the computer to choose its three choices.
let computer = arrRandom[(Math.floor(Math.random() * arrRandom.length))];  // SET computer's input to be random using array's index
let userCount = 0;                         //declared a variable to tally user's win
let computerCount = 0 ;                     //declared a variable to tally computer's win
function playRound (playerSelection, computerSelection){   // OBTAIN inputs from player and computers
         computerSelection = computerSelection.toLowerCase();   //all string will be lower case with this method. This method will help further later when comparing strings. 
         playerSelection = playerSelection.toLowerCase();       //player's input will format strings into lowercase.
            if(playerSelection === computerSelection){           //compare both input, using an if statement. if both are the same it will be a tie
                 userCount += 1;                               //increment the user tally to one
                 computerCount += 1;                           //increment the computer tally to one
                 alert("tie");
            }
          else if(playerSelection === "rock" &&  computerSelection === "scissor"){    //from here down it will go over the rules of the game.
             userCount += 1;                                                          //add an increment to whichever wins inside the condition
             alert("You win");                                                        //temp solution to see who is winning when trying it on the google chrome browser
          }
         else if(playerSelection === "paper" &&  computerSelection === "rock"){
             userCount += 1;
             alert("you win");
            }
          else if(playerSelection === "scissor" &&  computerSelection === "paper"){
             userCount += 1;
             alert("you win");
            }
          else if(playerSelection === "rock" &&  computerSelection === "paper"){
             computerCount += 1;
             alert("you lose");
            }
          else if(playerSelection === "paper" &&  computerSelection === "scissor"){
             computerCount += 1;
             alert("you lose");
            }
          else if(playerSelection === "scissor" &&  computerSelection === "rock"){
             computerCount += 1;
             alert("you lose");
            }
        }
playRound(player,computer);                                                 //add the two variable I declared in the beginning as the arguments. These variable has stored user's input and computer's input


