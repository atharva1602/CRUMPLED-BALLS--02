var dustbin1,dustbin2,dustbin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ballSprite,groundSprite;
var stick1,stick2,stick3;




function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER)
	stick1 = createSprite(width/2,700,170,10);
	stick1.shapeColor = ("red")

	stick2 = createSprite(295,500,10,320);
    stick2.shapeColor = ("green")

	stick3 = createSprite(500,500,10,320);
    stick3.shapeColor = ("green")


	dustbin1 = createSprite(width/2,655,170,10);
	dustbin1.shapeColor = ("yellow") 
	

	dustbin2 = createSprite(310,610,10,100);
    dustbin2.shapeColor = ("white") 
	
	dustbin3 = createSprite(480,610,10,100);
    dustbin3.shapeColor = ("white") 




	ballSprite=createSprite(width/50,625, 10,10);
	ballSprite.scale=3
    ballSprite.shapeColor=color(255)



	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 
	
	ballSpriteBody = Bodies.circle(width/2 , 200 , 5 , {restitution:2, isStatic:true});
	World.add(world, ballSpriteBody);

	Engine.run(engine);
  
}



function draw() {
	rectMode(CENTER);
	background(0);

	drawSprites();
   
  }
  function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	  Matter.Body.setStatic(ballSprite,false);
	   
	 }
   }
   

  