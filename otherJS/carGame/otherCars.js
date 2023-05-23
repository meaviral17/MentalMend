


function OtherCars(){

    this.width=80;
    this.height=170;
    this.x=random((width/2-200),(width/2)+200-this.width);
    this.y=-150;

    this.speed=0;


    this.imgNum=0;

    this.render=function (){

        noStroke()
        noFill();
        rect(this.x,this.y,this.width,this.height);
        image( otherCarimg[this.imgNum] ,this.x,this.y,this.width,this.height);

    }

    this.update=function (){

        this.y+=10;
    }

    
}