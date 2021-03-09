let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const score_div = document.querySelector(".score");
const result_p = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const container_div = document.querySelector(".container");


function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNamber =(Math.floor(Math.random() * 3));
    return choices[randomNamber];
    
}
function convertToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(user,computer){
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(user) + " beats " +convertToWord(computer) + ". you win!";
    userScore_span.classList.add("score-glow");
   
    
}
    


function lose(user, computer){
    computerScore++;
    computerScore_span.innerHTML=computerScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = convertToWord(user) + " beats " +convertToWord(computer) + ". you lost! ";
    computerScore_span.classList.add("red-glow");
  
   
    

}
function noOne(user,computer){
    result_p.innerHTML = convertToWord(user) + " equals " +convertToWord(computer) + ". it's a draw.";

}

function game(userChoice){
   const computerChoice = getComputerChoice();
   switch (userChoice + computerChoice){
       case "rs" :
       case "pr" :
       case "sp" :
           win(userChoice,computerChoice);
           break;
        case "rp" :      
        case "ps" :      
        case "sr" :
            lose(userChoice,computerChoice); 
            break;
        case "rr" :      
        case "pp" :      
        case "ss" :
            noOne(userChoice,computerChoice); 
            break;
    


   }
   
}


function main(){
rock_div.addEventListener('click',function(){
    game("r");
})

paper_div.addEventListener('click',function(){
    game("p");
})

scissors_div.addEventListener('click',function(){
    game("s");
})

}
main();