let mode = document.querySelector(".mode");
let button = document.querySelector("button");
let initial = "dark";
/*
button.addEventListener("click", () => {
  if (initial === "dark") {
    initial = "light";
    mode.classList.add("light");
    mode.classList.remove("dark");
    button.textContent = "Dark";
  } else {
    initial = "dark";
    mode.classList.add("dark");
    mode.classList.remove("light");
    button.textContent = "Light";
  }
});

*/

let computerselected = 0;
let userselected = 0;

let userRock = document.querySelector(".imagerock");
let userPaper = document.querySelector(".imagepaper");
let userSizer = document.querySelector(".imagesizer");

let computerscore = 0;
let userscore = 0;

const getComputerMove = () => {
    return Math.floor(Math.random() * 3) + 1;
};

const determineWinner = (user, computer) => {
    if (user === computer) {
        return "Draw you and the computer selected same";
    }
    if (
        (user === 1 && computer === 2) ||
        (user === 2 && computer === 3) || 
        (user === 3 && computer === 1) 
    ) {
        computerscore += 1;
        return `Computer Won! ${computer === 1 ? "Rock" : computer === 2 ? "Paper" : "Scissors"} beats ${user === 1 ? "Rock" : user === 2 ? "Paper" : "Scissors"}`;
    } else {
        userscore += 1;
        return `You Won! ${user === 1 ? "Rock" : user === 2 ? "Paper" : "Scissors"} beats ${computer === 1 ? "Rock" : computer === 2 ? "Paper" : "Scissors"}`;
    }
};

const updateScores = () => {
    you.textContent = `Your Score: ${userscore}`;
    comp.textContent = `Computer Score: ${computerscore}`;
};

const updateText = (result) => {
    text.textContent = result;
};

let you = document.querySelector(".you");
let comp = document.querySelector(".comp");
let text = document.querySelector(".text-area");

userRock.addEventListener("click", () => {
  userselected = 1;
  let computerMove = getComputerMove();
  let result = determineWinner(userselected, computerMove);
  updateText(result);
  updateScores();
});

userPaper.addEventListener("click", () => {
  userselected = 2;
  let computerMove = getComputerMove();
  let result = determineWinner(userselected, computerMove);
  updateText(result);
  updateScores();
});

userSizer.addEventListener("click", () => {
  userselected = 3;
  let computerMove = getComputerMove();
  let result = determineWinner(userselected, computerMove);
  updateText(result);
  updateScores();
});
let reset=document.querySelector(".rest");
reset.addEventListener("click",()=>{
    computerscore = 0;
    userscore = 0;
    updateScores();
})