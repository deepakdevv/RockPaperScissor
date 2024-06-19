let userscore = 0;
let compuscore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let uscore = document.querySelector("#urscore");
let cscore = document.querySelector("#compuscore");


let gencopuchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

let playgame = (userchoice) => {
    console.log("user choice =", userchoice);
    const compuchoice = gencopuchoice();
    console.log("compu choice =", compuchoice);

    let rock;
    let paper;
    let scissor;
    rock > scissor;
    rock < paper;

    paper > rock;
    paper < scissor;

    scissor > paper;
    scissor < rock;

    if (userchoice === compuchoice) {
        console.log("Match Draw!");
        msg.innerText = "Game Draw!";
        msg.style.backgroundColor = "white";

    } else if (userchoice > compuchoice) {
        console.log("You win!");
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green";
        userscore++;
        uscore.textContent = userscore;
        return uscore;
    } else {
        console.log("Computer Win!");
        msg.innerText = "Computer Win!";
        msg.style.backgroundColor = "red";
        cscore.textContent = '1';
        compuscore++;
        cscore.textContent = compuscore;
        return cscore;
    }

}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);

    })
})