var randomNum1 = Math.ceil((Math.random()*6));
var randomNum2 = Math.ceil((Math.random()*6));
// var diceOne = "dice"+randomNum1+".png";
document.querySelector(".img1").setAttribute("src","./images/dice"+randomNum1+".png");
document.querySelector(".img2").setAttribute("src","./images/dice"+randomNum2+".png");
if(randomNum1 > randomNum2){
    document.querySelector("h1").textContent="🚩Player 1 wins";
}else if(randomNum2 > randomNum1){
    document.querySelector("h1").textContent="Player 2 wins🚩";
}
else{
    document.querySelector("h1").textContent="Draw!";
}