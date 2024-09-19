let gameSeq = [];
let userSeq = [];

let btns = ["pink","blue","orange","voilet"];

let started = false;
let level = 0;

let h2 =document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started== false){
        console.log("game is started");
        started=true;

        levelUp();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText=`level is:${level}`;
    
    let randIdx =Math.floor(Math.random()* 3);
    let randColor = btns[randIdx];
    let randbtn =document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    gameFlash(randbtn);

}



function checkAns(idx){
    // console.log("current level:",level);
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
           setTimeout(levelUp,1000);
        }
        
    }else{
        h2.innerHTML = `Game Over!Your score was ${level}<br>Press any key to start.`;
        document.querySelector("body").style.backgroudColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";},150);
        reset();
    }
    }
function btnPress(){
    console.log(this);
    let btn= this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}