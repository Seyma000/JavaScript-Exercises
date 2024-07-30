let randomNumber1 = Math.floor(Math.random()*6 + 1);
let diceImages1 = document.getElementById("dice1");
diceImages1.setAttribute("src", "images/dice" + randomNumber1 + ".png");

let randomNumber2 = Math.floor(Math.random()*6 + 1);
let diceImages2 = document.getElementById("dice2");
diceImages2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

let title= document.getElementById("title");

if(randomNumber1 > randomNumber2){
    title.textContent = "🚩 Player 1 Wins!";
} else if(randomNumber1 < randomNumber2){
    title.textContent = "Player 2 Wins! 🚩";
} else{
    title.textContent = "It's a Draw";
}