var avadakedavra=new Audio("Audio/avadakedavra.mp3");
var expecto=new Audio("Audio/expecto.mp3")
document.querySelector("#avk").addEventListener("click",buttonClick);
function buttonClick(){
    avadakedavra.play();
}
document.querySelector("#ep").addEventListener("click",exp);
function exp(){
    expecto.play();
}