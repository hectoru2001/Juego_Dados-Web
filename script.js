var imageArray = [  
"img/cara-uno.webp",  
"img/cara-dos.webp",  
"img/cara-tres.webp",  
"img/cara-cuatro.webp",  
"img/cara-cinco.webp",  
"img/cara-seis.webp",];

var img = document.getElementById("imageAl");
var img1 = document.getElementById("imageAl1");
var randomNumber = Math.floor(Math.random() * 6) + 1;
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  img.src = imageArray[randomNumber - 1];
  img1.src = imageArray[randomNumber1 - 1];

function generar(){
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  img.src = imageArray[randomNumber - 1];
  img1.src = imageArray[randomNumber1 - 1];

  if (randomNumber > randomNumber1){
    var gana = document.getElementById("j1");
    gana.innerHTML = "Jugador 1"
  } else {
    var gana = document.getElementById("j1");
    gana.innerHTML = "Jugador 2"
  }

  if (randomNumber == randomNumber1){
    var gana = document.getElementById("j1");
    gana.innerHTML = "Empate"
  }
}

