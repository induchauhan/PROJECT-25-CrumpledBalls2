
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var g,ball,myengine,myworld,mybody,b1,b2,b3,img;
function preload()
{
	img=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);
	myengine= Engine.create();
	myworld= myengine.world;
	
    ground=new Ground(400,650,800,20);
	//Create the Bodies Here.
	b1=new Bin(550,540,20,200);
	b2=new Bin(750,540,20,200);
//	b3=new Bin(650,650,180,20);
	ball=new Paper(100,600,30);
	Engine.run(myengine);

}


function draw() {
  rectMode(CENTER);
  background("white");
  ground.display();
 
  ball.display();
  b1.display();
  b2.display();
 // b3.display();
  imageMode(CENTER);
  image(img,650,520,250,250);
  
  drawSprites();
 
}
function keyPressed()
{
	if (keyCode===UP_ARROW)
	{
		Matter.Body.applyForce(ball.body,ball.body.position,{x:150,y:-170});
	}
}



