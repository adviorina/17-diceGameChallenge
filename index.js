let n = Math.random();
n = Math.floor((n * 6) + 1);
let randomNumber1 = n;

let x = Math.random();
x = Math.floor((x * 6) + 1);
let randomNumber2 = x;

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
function diceGame(){
    if(randomNumber1 < randomNumber2){
        document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
    }
    else if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
    }
    else{
        document.querySelector("h1").innerHTML = "It's a Draw!";
    }
}

diceGame();