// A dice game by Spidycodes</> 💖

// create random number(.floor to make it whole , +1 to cover the 1-6 range)
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// Get image name
var randomDiceImage = "dice" + randomNumber1 + ".png";
// random img source
var randomImageSource = "images/" + randomDiceImage;
// setting img1 attribute
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

// Image2 steps(similar to previous)
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/" + "dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

// Small logic to decide which one wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🤖A.I wins";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "You win🔱";
} else {
    document.querySelector("h1").innerHTML = "Draw😉";
}

// score board
document.getElementById("aiscore").value = randomNumber1;
document.getElementById("yourscore").value = randomNumber2;