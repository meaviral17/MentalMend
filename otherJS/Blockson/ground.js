

function Ground(){

    this.x=0;
    this.y=height-20;
    
    this.width=width;
    this.height=10;


    this.render=function (){

        noStroke();
        fill(255);
        rect(this.x,this.y,this.width,this.height);

    }

}