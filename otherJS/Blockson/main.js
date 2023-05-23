

var screenWidth=screen.width;

var ground;
var player;
var obstacles=[];
var clouds=[];

var startGame=false;
var addMonstersAt;
var blockSonGameScore=0;



if(screenWidth>800){
    addMonstersAt=90;
}else{
    addMonstersAt=110;
}


var playerImg;
var monsterImg;
var cloudImgs=[];

function preload(){

    playerImg=loadImage('img/player01.png');
    monsterImg=loadImage('img/monster01.png');

    cloudImgs[0]=loadImage('img/cloud01.png');
    cloudImgs[1]=loadImage('img/cloud02.png');

}





function setup(){
    let cnv=createCanvas(windowWidth,windowHeight-250);
    cnv.position(0,200);

    ground=new Ground();
    player=new Player();
    obstacles.push(new Obstacles());
    clouds.push(new Cloud());
}


function draw(){

    if(startGame){
        background(100,13,200);

        ground.render();
    
        if(frameCount%140 === 0){
            let randomNum=Math.floor(Math.random()*2);
            clouds.push(new Cloud());
            clouds[clouds.length-1].imgNum=randomNum;

        }

        addCould();

        player.jump();
        player.render();   


        if(frameCount>200){
            if(frameCount%addMonstersAt === 0){
                obstacles.push(new Obstacles());
    
            }
        }


        addMonster();
    

    }


}


function addCould(){

    for(let i=clouds.length-1;i>0;i--){

        clouds[i].update();
        clouds[i].render();

        if(clouds[i].x+clouds[i].width<0){
            clouds.splice(i,1);
        }
    }

}


function addMonster(){
    for(let i=obstacles.length-1;i>0;i--){
        obstacles[i].render();

        if(checkCollide(obstacles[i])){
            gameOver();
            return;
        }
        

        if(obstacles[i].x<-50){
            obstacles.splice(i,1);

            addScore();
        }

    }
}



function checkCollide(obstacle){
    let playerXpos;

    if(screenWidth>800){
        playerXpos=player.x-25;
    }else{
        playerXpos=player.x-10;
    }
    

    return collideRectRect(playerXpos,player.y, player.width,player.height,obstacle.x, obstacle.y, obstacle.width, obstacle.height);
}


function keyPressed(){

    if(keyCode===UP_ARROW){
            player.setVelocity();
        
    }
    
}



function mousePressed(){
    player.setVelocity();
}





// //////////////// START GAME and GAME OVER 

const gameOverCont=document.querySelector('.game-over-cont');

const retryBtn=document.querySelector('.retry-btn');
const stopBtn=document.querySelector('.stop-btn');



const finalScore=document.querySelector('.finalScore');

function gameOver(){

    startGame=false;
    obstacles=[];
    noLoop();
    obstacles=[];
    clouds=[];
    gameOverCont.style.display="block";

    finalScore.innerHTML=blockSonGameScore;
    
    blockSonGameScore=0;

}


retryBtn.addEventListener('click',()=>{

    gameOverCont.style.display="none";

    player=new Player();
    obstacles=[];
    clouds=[];

    startGame=true;

    loop();

    scoreCont.innerHTML=0;

})

stopBtn.addEventListener('click',()=>{
    gameOverCont.style.display="none";

    startGame=false;
    background(100,13,200);
    noLoop();
    player=new Player();
    obstacles=[];
    clouds=[];

    startGame=false;

    scoreCont.innerHTML=0;
})



const startBtn=document.querySelector('.start-btn');


startBtn.addEventListener('click',()=>{
    startGame=true;

    loop();
    gameOverCont.style.display="none";
})




// ///////////////// ADDING SCORE


const scoreCont=document.querySelector('.blockson-score');


function addScore(){

    blockSonGameScore++;

    scoreCont.innerHTML=blockSonGameScore;

}




// ////////////////////// PREVENTING USER FROM USE ARROW KEYS TO SCROLL PAGE

window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight",13].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);
