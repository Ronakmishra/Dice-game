// for  dice 1

var randomNumber1 = Math.floor(Math.random() *6) +1 ; // this will pick random number b/w 1-6

var randomDiceImage= "dice" + randomNumber1 + ".png"; // dice1  - dice6

var randomImageSource = "images/" + randomDiceImage; //images/ dice1-dice6

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


// for dice 2

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage2 = "dice" + randomNumber2 +".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);


// Now setting the winning conditions

if ( randomImageSource > randomImageSource2){
  document.querySelector("h1").innerHTML="🚩Player 1 wins";
}
else if (randomImageSource < randomImageSource2){
  document.querySelector("h1").innerHTML = "Player 2 wins🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}
