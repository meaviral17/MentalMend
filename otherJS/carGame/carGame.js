


var startGame=false;
var userInteraction=true;
var score=document.querySelector('.score');
var finalScore=document.querySelector('.finalScore');
var actualScore=0;


var road;
var car;
var roadStroke=[];
var centerLines=[];
var otherCars=[];


var carImg;
var otherCarimg=[];

function preload(){

    carImg=loadImage('img/car03.png');
    otherCarimg[0]=loadImage('img/truck01.png');
    otherCarimg[1]=loadImage('img/truck02.png');
    otherCarimg[2]=loadImage('img/truck03.png');

}


function setup() {
    createCanvas(windowWidth,windowHeight);
    background(0,255,0);
    road = new Road();
    roadStroke.push(new RoadStroke());
    centerLines.push(new CenterLine());
    car = new Car();

    otherCars.push(new OtherCars());

}



function draw() {

    if(startGame){
        road.render();

        if(frameCount%10==0){
            roadStroke.push(new RoadStroke());
        }

        if(frameCount%30==0){
            centerLines.push(new CenterLine());
        }


        if(frameCount>300){
            if(frameCount%40==0){
                let randomNum=Math.floor(Math.random()*3);
                otherCars.push(new OtherCars());
                otherCars[otherCars.length-1].imgNum=randomNum;
    
            }
        }



        addStrokes();
        addCenterLines();
        addOtherCars();

        car.update();
        car.render();
        
        if(car.x<road.x || ((car.x+car.width)>(road.x+road.width))){
            gameOver();
        }
    }
}



// //////////////////////////////////////// CAR CONTROLS //////////



const rightControl=document.querySelector('.right-control');
const leftControl=document.querySelector('.left-control');


if(userInteraction){
    function keyPressed() {
        if (keyCode === LEFT_ARROW || keyCode===65) {
            car.setvelocity(-8);
    
        } else if (keyCode === RIGHT_ARROW || keyCode==68) {
            car.setvelocity(8);
        }
    }
}


rightControl.addEventListener('pointerdown',()=>{
    if(userInteraction){
        car.setvelocity(-6);
    }

})



rightControl.addEventListener('pointerup',()=>{
    car.setvelocity(0);

})


leftControl.addEventListener('pointerdown',()=>{
    if(userInteraction){
        car.setvelocity(6);
    }

})


leftControl.addEventListener('pointerup',()=>{
    car.setvelocity(0);
})




function keyReleased(){
    car.setvelocity(0);
}


// ADDING SIDELINES TO THE ROAD

function addStrokes(){

    for(let i=roadStroke.length-1;i>0;i--){
        roadStroke[i].render();
        roadStroke[i].update();

        if(roadStroke[i].y>height){
            roadStroke.splice(i,1);
        }

    }

}


// ADDING CENTER LINE TO THE ROAD


function addCenterLines(){

    for(let i=centerLines.length-1;i>0;i--){

        centerLines[i].render();
        centerLines[i].update();

        if(centerLines[i].y>height){
            centerLines.splice(i,1);
        }

    }

}



// ADDING OTHER CARS


function addOtherCars(){

    for(let i=otherCars.length-1;i>0;i--){
        otherCars[i].render();
        otherCars[i].update();
    
        if(otherCars[i].y>height){
            otherCars.splice(i,1);

            actualScore+=10;
            score.innerHTML=actualScore;

        }

        if(otherCars[i].y>=(car.y-car.height-45) && otherCars[i].y<(car.y+car.height)){
            if(otherCars[i].x<car.x && car.x<otherCars[i].x+67){

                gameOver();
            }else if(otherCars[i].x>car.x && (car.x+67>otherCars[i].x)){

                gameOver();
            }
        }

    }

}





// ///////////////////  GAME OVER FUNCTION 


const gameOverCont=document.querySelector('.game-over-cont');

const retryBtn=document.querySelector('.retry-btn');
const stopBtn=document.querySelector('.stop-btn');


const controlsCont=document.querySelector('.controls-cont');

function gameOver(){
    
    userInteraction=false;
    noLoop();
    startGame=false;
    gameOverCont.style.display="block";

    finalScore.innerHTML=actualScore;

}


retryBtn.addEventListener('click',()=>{
    otherCars=[];
    roadStroke=[];

    car=new Car();
    road=new Road();

    gameOverCont.style.display="none";

    loop();
    userInteraction=true;
    startGame=true;
    
    actualScore=0;
    score.innerHTML=0;

})


stopBtn.addEventListener('click',()=>{
    loop();
    otherCars=[];
    roadStroke=[];

    startGame=false;
    gameOverCont.style.display="none";
    noLoop();

    car=new Car();
    road=new Road();

    actualScore=0;
    score.innerHTML=0;
    clear();

    controlsCont.style.opacity="0";
    controlsCont.style.pointerEvents="none";

    window.scrollTo(0,0);
})


// //////////////// START GAME



const startBtn=document.querySelector('.start-btn');
const body=document.querySelector('body');



startBtn.addEventListener('click',()=>{
    
    background(0,255,0);
    
    controlsCont.style.opacity="1";
    controlsCont.style.pointerEvents="all";

    userInteraction=true;
    startGame=true;
    loop();

    window.scrollTo(0,body.clientHeight);
})

