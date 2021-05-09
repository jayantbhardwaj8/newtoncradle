class Bob{
    constructor(x,y){
    var options = {
        restitution:1,
        friction:0,
        density:0.8,
        isStatic: false
        
    }
    this.body = Bodies.circle(x,y,25,options);
this.radius = 25;
    World.add(world,this.body);
    
    }


display(){
var pos = this.body.position;
push();
ellipseMode(RADIUS);
fill("green");
strokeWeight(4);
stroke("orange");
ellipse(pos.x,pos.y,this.radius,this.radius);


pop();
}
 
}
