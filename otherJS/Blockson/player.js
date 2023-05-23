

function Player(){


    this.width=100;
    this.height=150;

    
    this.x=100;
    this.y=height-(this.height+20);


    this.gravity=2;
    this.velocity=0;


    if(screen.width<800){
        this.width=50;
        this.height=80;
        this.x=30;
    }

    this.render=function (){

        noStroke();
        fill(255,0,0);
        image(playerImg,this.x,this.y,this.width,this.height);

    }

    this.setVelocity=function(){
        if(this.y===height-(this.height+20)){
            if(screen.width>800){
                this.velocity=-28;
            }else{
                this.velocity=-24;
            }
            
        }
        
    }


    this.jump=function(){
       this.y+=this.velocity;
       this.velocity+=this.gravity;

       this.y=constrain(this.y,0,height-this.height-20)
    }

}