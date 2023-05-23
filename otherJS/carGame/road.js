

function Road(){

    this.width=400;
    this.height=height;
    this.x=(width/2-(this.width/2));
    this.y=0;
    

    this.render=function(){

        noStroke();
        fill(0);
        rect(this.x,this.y, this.width,this.height);

    }
    
}