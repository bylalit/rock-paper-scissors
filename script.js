let userScore = 0
let compScore = 0 

let userCount = document.querySelector("#user");
let compCount = document.querySelector("#comp");
let masBox = document.querySelector("#btn");

let reset = document.querySelector("#reset");


let boxes = document.querySelectorAll(".box");




const compGen = () => {
    let option = ["rock", "paper", "scissors"]
    let randomChoice = Math.floor(Math.random() * 3);
    return option[randomChoice];
}

const draws = () => {
    // console.log("Game was draw!");
    masBox.innerText = "Draw Match!";
    masBox.style.backgroundColor = "#081b31";
}


const showWinner = (userWin) => {
    
    if (userWin){
        userScore++;
        userCount.innerText = userScore;
        masBox.innerText = "You Win!";
        masBox.style.backgroundColor = "green";
        // console.log("User win.",);
    }else{
        compScore++
        compCount.innerText = compScore;
        masBox.innerText = "You Loss!";
        masBox.style.backgroundColor = "red";
        // console.log("Comp win.", compScore);
    }
}


const playGame = (userChoice) => {
    // console.log("userchoice: ", userChoice);
    let compChoice = compGen();
    // console.log("compChioce: ", compChoice);

    if (userChoice === compChoice){
        draws();
    }else{
        let userWin = true;

        if (userChoice == "rock"){
            //paper, scissors
            if (compChoice == "paper"){
                userWin = false;
            }else{
                userWin = true;
            }
        }else if (userChoice == "paper"){
            //rock, scissors
            if (compChoice == "rock"){
                userWin = true;
            }else{
                userWin = false;
            }
        }else{
            if (compChoice == "rock"){
                userWin = false;
            }else{
                userWin = true;
            }
        }

        showWinner(userWin);
    };
};


boxes.forEach((box) =>{
    box.addEventListener("click", () => {
        // console.log("boxes was click.", box);
        const userChoice = box.getAttribute("id");
        // console.log(userChoice);
        playGame(userChoice);
    })
});




const restart = () => {
    userScore = 0;
    userCount.innerText = userScore;
    compScore = 0;
    compCount.innerText = compScore;
    masBox.innerText = "Play Your Move";
    masBox.style.backgroundColor = "#081b31";
}


reset.addEventListener("click", ()=>{
    restart();
});