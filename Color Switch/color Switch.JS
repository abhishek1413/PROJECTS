let grey= document.querySelector("#grey");
grey.addEventListener("click", function(e){
    if(e.target.id=="grey"){
        document.querySelector("body").style.backgroundColor="grey";
    }
});
let white= document.querySelector("#white");
white.addEventListener("click", function(e){
    if(e.target.id=="white"){
        document.querySelector("body").style.backgroundColor="white";
    }
});
let blue= document.querySelector("#blue");
blue.addEventListener("click", function(e){
    if(e.target.id=="blue"){
        document.querySelector("body").style.backgroundColor="blue";
    }
});
let yellow= document.querySelector("#yellow");
yellow.addEventListener("click", function(e){
    if(e.target.id=="yellow"){
        document.querySelector("body").style.backgroundColor="yellow";
    }
});