

function Cloud(){

    this.randomNum=random(20,70)

    this.x=width+20;
    this.y=height-height+this.randomNum;
    this.width=90;
    this.height=80;

    this.speed=-3;
    
    this.imgNum=0;

    this.render=function(){

      
        image(cloudImgs[this.imgNum],this.x,this.y,this.width,this.height);

    }

    this.update =function(){
        this.x+=this.speed;
    }

}