var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");

var h1Text = "";

if (randomNumber1 > randomNumber2) {
    h1Text = "🚩 Player 1 Wins!";
}  else if (randomNumber1 < randomNumber2) {
    h1Text = "Player 2 Wins! 🚩";
} else {
    h1Text = "Draw!";
}
document.querySelector("h1").textContent = h1Text;