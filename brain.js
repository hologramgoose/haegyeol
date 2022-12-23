var sr = document.getElementById("sr");
var message = document.getElementById("message");

var audio = new Audio("sea.mp3");
audio.load();
audio.play();
audio.loop = true;
audio.autoplay = true;



function animate(){
    message.style.animation= "mssg 5s";
}
sr.addEventListener('click',animate);