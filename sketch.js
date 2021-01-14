
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var roof, rope1,rope2,rope3,rope4,rope5;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(160,600,200);
	bob2 = new Bob(260,600,200);
	bob3 = new Bob(360,600,200);
	bob4 = new Bob(460,600,200);
	bob5 = new Bob(560,600,200);

	roof = new Roof(398,50,750,50);

  //rope1 = new Rope(bob1.body,roof.body,-60,0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  drawSprites();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();

  //rope1.dsiplay();
 
}



