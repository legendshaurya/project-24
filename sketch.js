
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var line1,line2,line3,ball,ground
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	line1=createSprite(650,height-50,200,20)
line1.shapeColor=color("red")
	line2=createSprite(560,610,20,100)
	line2.shapeColor=color("red")
	line3=createSprite(760,610,20,100)
	line3.shapeColor=color("red")
	engine = Engine.create();
	world = engine.world;



 var options = {
isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2


 }




	ball = Bodies.circle(100, 640 ,10, options)
	World.add(world,ball);


	ground = Bodies.rectangle(width/2 , 665, 810,10, {isStatic:true});
	World.add(world,ground);

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
ellipse(ball.position.x,ball.position.y,20)

rect(ground.position.x,ground.position.y,810,10)
  
  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
console.log("hello")
}
}








