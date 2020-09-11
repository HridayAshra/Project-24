var paper, ground, box;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1325, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper();
	ground = new Ground();
    box=new Dust_bin();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
box.display();
ground.display();
paper.display();
jump();
  drawSprites();
 
}

function jump(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(
			paper.body,
			 paper.position,
			  {x:85,y:85});
	}
}


