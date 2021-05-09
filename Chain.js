class Chain{
    constructor(body1, body2,offsetX){
        this.offsetX = offsetX
        
var options = {
bodyA:body1,
bodyB:body2,
pointB:{x:offsetX,y:0},
stiffness:0.0,
length:150

}


this.rope = Constraint.create(options);
World.add(world,this.rope);

    }


display(){
var pointA = this.rope.bodyA.position;
var pointB = this.rope.bodyB.position;
strokeWeight(2);
fill(0);
stroke("yellow");
// Anchor




line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y);
}






}