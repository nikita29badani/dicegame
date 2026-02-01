var n1=Math.floor(Math.random()*6)+1;
var randomDiceImage1="dice"+n1+".png";
var randomSource1="./images/"+randomDiceImage1;

var n2=Math.floor(Math.random()*6)+1;
var randomDiceImage2="dice"+n2+".png";
var randomSource2="./images/"+randomDiceImage2;



var image1=document.querySelectorAll("img")[0].setAttribute("src",randomSource1);
var image2=document.querySelectorAll("img")[1].setAttribute("src",randomSource2);

if(n1>n2){
    var win1=document.querySelector("h1").innerText="Player 1 won";
}
else if(n2>n1){
   var win2=document.querySelector("h1").innerText="Player 2 won";
}
else{
    var draw=document.querySelector("h1").innerText="DRAW!"
}


