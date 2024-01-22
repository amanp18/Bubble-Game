let timer=60;
let score=0;
let rn=0;
let start_again_btn = document.getElementById('startAgain')
let reset_btn = document.getElementById('Reset')
let Startbtn = document.getElementById('startButton')

function scorer() {
    score +=10
    document.querySelector("#scoreval").textContent= score;
}
document.querySelector("#clicks").addEventListener("click",function(dets) {
    let clickin= Number(dets.target.textContent);
    if (clickin == rn) {
        newhit();
        scorer();
        makebubble(); }

})

function newhit() {
    rn= Math.floor(Math.random()*10);
   document.querySelector("#ghodu").textContent=rn;
}

function makebubble(){
    
var clutter= " ";

for (var i = 1; i <=189; i++){
    var rn=Math.floor(Math.random()*10)
    clutter+=`<div class="bubble">${rn}</div>`;
}
document.querySelector("#clicks").innerHTML= clutter;
}

function runtimer(){
let timeinterval= setInterval(() => {
    if(timer>0){
    timer--;
    document.querySelector("#time").textContent= timer;
    }
    else{
        clearInterval(timeinterval);
        document.querySelector("#clicks").innerHTML=`<h1> GAME OVER <h1/>`
        show_btn()
    }
}, 1000);}

function startGame() {
    timer = 60;
    Startbtn.style.display = "none";
    runtimer();
    makebubble();
    newhit();
}

function reset(){
    Startbtn.style.display = "block";
    reset_btn.style.display = "none";
    start_again_btn.style.display = "none";
}

function startAgain(){
    startGame();
    timer = 60;
    reset_btn.style.display = "none";
    start_again_btn.style.display = "none";
}

function show_btn() {
    Startbtn.style.display = "none"
    reset_btn.style.display = "block";
    start_again_btn.style.display = "block";
    

}

