var randomNumber = Math.floor(Math.random()*6)+1;

var imageNumber = "dice" + randomNumber + ".png";

var loveImage = "images/" + imageNumber;

var diceImage = document.querySelectorAll("img")[0];

var finalImage = diceImage.setAttribute("src",loveImage);

var randomnNumber2 = Math.floor(Math.random()*6)+1;

var imageNumber2 = "dice" + randomnNumber2 + ".png";

var loveImage2 = "images/"+ imageNumber2;

var diceImage2 = document.querySelectorAll("img")[1];

var finalImage2 = diceImage2.setAttribute("src",loveImage2);

if (loveImage > loveImage2) {
    document.querySelector("h1").innerHTML="player1 wins!";
}
else if (loveImage2 > loveImage) {
    document.querySelector("h1").innerHTML ="player2 wins!";
}
else {
    document.querySelector("h1").innerHTML ="draw!"
}