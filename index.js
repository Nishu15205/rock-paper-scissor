let resultDisplay = document.querySelector(".result");

let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");

let userScore = 0;
let computerScore = 0;

let rockcount = 0;
let papercount = 0;
let scissorcount = 0;


function play(userChoice) {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    if (userChoice === computerChoice) {
        resultDisplay.innerText = `Tie! Both chose ${userChoice}.`;
    } else if (
        (userChoice === 'Rock' && computerChoice === 'Scissors') ||
        (userChoice === 'Paper' && computerChoice === 'Rock') ||
        (userChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        userScore++;
        document.querySelector("#count1").innerText = userScore;
        resultDisplay.innerText = `You win! ${userChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        document.querySelector("#count2").innerText = computerScore;
        resultDisplay.innerText = `You lose! ${computerChoice} beats ${userChoice}.`;
    }
}


rock.addEventListener("click", () => {
    rockcount++;
   // document.querySelector(".rockScore").innerHTML = `<h4>${rockcount}</h4>`;
    play('Rock');
});

paper.addEventListener("click", () => {
    papercount++;
   // document.querySelector(".paperScore").innerHTML = `<h4>${papercount}</h4>`;
    play('Paper');
});

scissor.addEventListener("click", () => {
    scissorcount++;
    // document.querySelector(".scissorScore").innerHTML = `<h4>${scissorcount}</h4>`;
    play('Scissors');
});
