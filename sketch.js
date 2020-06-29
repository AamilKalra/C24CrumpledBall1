var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var side1, side2,side3;
function preload()
{
	
}

function setup() {
	var canvas=createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(600,590,1200,20);
	paperball = new Paper(1100,200,70);
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);

	side1= createSprite(800,500,20,170)
	side2= createSprite(950,500,20,170)
	side3= createSprite(875,570,170,20)
	
	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine); 
  background(0);
  
  ground.display();
  paperball.display();
  drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperball.body,paperball.body.pos,{x:85,y:-85});
	}
}



