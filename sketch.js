
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobobject1,bobobject2,bobobject3,bobobject4,bobobject5;
var roof,rope1;
var line1,line2,line3,line4,line5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof = new Roff(400,250,250,20);
bobobject1 = new Bob(400,550);//middlebob
bobobject2 = new Bob(450,550);//right1
bobobject3 = new Bob(500,550);//right2
bobobject4 = new Bob(350,550);//left1
bobobject5 = new Bob(300,550);//left2
rope1 = new Chain(bobobject1.body,roof.body,0);
rope2 = new Chain(bobobject2.body,roof.body,50);
rope3 = new Chain(bobobject3.body,roof.body,100);
rope4 = new Chain(bobobject4.body,roof.body,-50);
rope5 = new Chain(bobobject5.body,roof.body,-100);








	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,0,254);
  

  roof.display();
bobobject1.display();
bobobject2.display();
bobobject3.display();
bobobject4.display();
bobobject5.display(); 
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

 





  drawSprites();
 
}


function keyPressed(){

	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(bobobject5.body,bobobject5.body.position,{x:-30,y:-25});
		}


}

