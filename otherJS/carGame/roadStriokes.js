

function RoadStroke(){

    this.x1=width/2-180;
    this.x2=width/2+170;

    this.y=-60;

    this.width=8;
    this.height=15;


    this.render=function(){

        noStroke();
        fill(255,193,34);
        rect(this.x1,this.y,this.width,this.height);
        rect(this.x2,this.y,this.width,this.height);
    }

    this.update=function(){
        this.y+=20;
    }
}


function CenterLine(){

    this.width=20;
    this.height=150;

    this.x=width/2-(this.width/2);
    this.y=-180;

    this.render=function (){

        noStroke();
        fill(255);
        rect(this.x,this.y,this.width,this.height);

    }

    this.update=function(){
        this.y+=20;
    }


}