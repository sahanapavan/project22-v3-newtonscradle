const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob;
var bob2;
var bob3;
var bob4;
var bob5;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;

function setup() {
	createCanvas(800, 600);
	

	engine = Engine.create();
	world = engine.world;
	
	var bob_options={
		isStatic:false,
		restitution:1,
		friction:0,
		density:0.8	
	}	
	/*//testing the movement of the constraint for one specific bob
	var test_options = {
		isStatic:false
	}*/


	bob=Bodies.circle(320,380,20,bob_options)
	World.add(world,bob);

	bob2=Bodies.circle(360,380,20,bob_options)
	World.add(world,bob2);

	bob3=Bodies.circle(400,380,20,bob_options)
	World.add(world,bob3);

	bob4=Bodies.circle(440,380,20,bob_options)
	World.add(world,bob4);

	bob5=Bodies.circle(480,380,20,bob_options)
	World.add(world,bob5);

	var roof_options={
		isStatic:true
	}

	

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	/*rope1=new Rope(bob.body,roof.body);
	rope2=new Rope(bob2.body,roof.body);
	rope3=new Rope(bob3.body,roof.body);
	rope4=new Rope(bob4.body,roof.body);
	rope5=new Rope(bob5.body,roof.body);*/

	/*var rope1_options = {
		bodyA:roof,
		bodyB:bob,
		length:200,
		stiffness:0.2
	}
	var rope2_options = {
		//bodyA:roof,
		pointA:{x:300,y:90},
		bodyB: bob2,
		length:200,
		stiffness:0.2
	}
	var rope3_options = {
		//bodyA:roof,
		pointA:{x:350,y:90},
		bodyB: bob3,
		length:200,
		stiffness:0.2
	}
		var rope4_options = {
		//bodyA:roof,
		pointA:{x:400,y:90},
		bodyB: bob4,
		length:200,
		stiffness:0.2
	}
	var rope5_options = {
		//bodyA:roof,
		pointA:{x:450,y:90},
		bodyB: bob5,
		length:200,
		stiffness:0.2
	}


	rope1 = Constraint.create(rope1_options);
	World.add(world, rope1);

	rope2 = Constraint.create(rope2_options);
	World.add(world, rope2);

	rope3 = Constraint.create(rope3_options);
	World.add(world, rope3);
	
	rope4 = Constraint.create(rope4_options);
	World.add(world, rope4);

	rope5 = Constraint.create(rope5_options);
	World.add(world, rope5);*/

	rope1=new Rope(bob,roof,-80, 0)
	rope2=new Rope(bob2,roof,-40, 0)
	rope3=new Rope(bob3,roof,0, 0)
	rope4=new Rope(bob4,roof,40, 0)
	rope5=new Rope(bob5,roof,80, 0)

	Engine.run(engine);
	
	
}

function draw() {
  rectMode(CENTER);
  background("#99004d");


  rect(roof.position.x,roof.position.y,230,20);

 //call display() to show ropes here
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
 
  //create ellipse shape for multiple bobs here
ellipse(bob.position.x,bob.position.y,40,40);
ellipse(bob2.position.x,bob2.position.y,40,40); 
ellipse(bob3.position.x,bob3.position.y,40,40);
ellipse(bob4.position.x,bob4.position.y,40,40);
ellipse(bob5.position.x,bob5.position.y,40,40);

}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob,bob.position,{x:-50,y:-45});
	}
}
