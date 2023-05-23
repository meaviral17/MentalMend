

function Car(){

    this.width=80;
    this.height=120;
    this.x=(width/2-(this.width/2));
    this.y=height/2+150;

    this.speed=0;

    this.render=function (){

        noStroke()
        fill(255,0,0);
        image(carImg,this.x,this.y,this.width,this.height);

    }


    this.setvelocity=function (momentum){
        this.speed=momentum;
    }

    this.update=function (){
        this.x+=this.speed;
    }

    
}