class Vaccine{
    constructor(x,y,r){
        var options={   
            isStatic:true
        }
        this.x=x;
        this.y=y;
        this.r=r;
       // this.image=loadImage("");
       this.body=Bodies.circle(this.x,this.y,(this.r)/2,options);
       World.add(world,this.body);
       
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        fill("blue");
        //imageMode(CENTER)
        //image(thisw.image,0,0,this.r,this.r)
        ellipse(0,0,this.r,this.r)
        pop();

        
    }
}