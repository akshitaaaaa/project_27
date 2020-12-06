
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var roof;
var object1, object2, object3, object4, object5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Ground(350,200,400,40)

    object1 = new Bob(200,500,70)
	object2 = new Bob(280,500,70)
	object3 = new Bob(360,500,70)
	object4 = new Bob(440,500,70)
	object5 = new Bob(520,500,70)

	rope1 = new Rope(object1.body, roof.body, 40, 0)
	rope2 = new Rope(object2.body, roof.body, 40, 0)
	rope3 = new Rope(object3.body, roof.body, 40, 0)
	rope4 = new Rope(object4.body, roof.body, 40, 0)
	rope5 = new Rope(object5.body, roof.body, 40, 0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");

  keyPressed();
    
  roof.display();
  object1.display();
  object2.display();
  object3.display();
  object4.display();
  object5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
   
    rope5.attach(object5.body);
    Matter.Body.setPosition(object5.body,{x:600, y:500})

  
    
    
  }
}




