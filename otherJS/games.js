


// ////////////////// POP UP MSG ***********'


const moreBtn=document.querySelector('.more-games-btn');
const popUpMsg=document.querySelector('.pop-up-msg');


moreBtn.addEventListener('mouseover',()=>{
    popUpMsg.style.color="#1C2B2D";
    popUpMsg.style.fontWeight="500";
    popUpMsg.style.clipPath="polygon(0 0,100% 0,100% 100%,0 100%)";

})

moreBtn.addEventListener('mouseleave',()=>{
    popUpMsg.style.clipPath="polygon(0 0,0% 0,0% 100%,0 100%)";
})



// ////////////////////// PREVENTING USER FROM USE ARROW KEYS TO SCROLL PAGE

window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight",13].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);


// ///////////////// GAME BTN


const game1btn=document.querySelector('.game1');
const game2btn=document.querySelector('.game2');


game1btn.addEventListener('click',()=>{
    window.location.href="#GAMESECTION";
})

game2btn.addEventListener('click',()=>{

    window.location.href="../Blockson/Blockson.html";

})






