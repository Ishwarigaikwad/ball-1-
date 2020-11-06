const World = Matter.World
const Bodies = Matter.Bodies
const Engine = Matter.Engine

var myWorld, myEngine;
var object1,object2,object3,object4;
var ground;


function setup() {
  createCanvas(800, 400);
  myEngine = Engine.create()
  myWorld = myEngine.world;

  object1 = Bodies.circle(200, 200, 10, { restitution: 0.8 })
  
  World.add(myWorld, object1);
  
  object2 = Bodies.circle(100,100,10,{restitution:0.8})
  
  World.add(myWorld, object2);
  
  object3 = Bodies.circle(100,100,10,{restitution:0.8})
  
  World.add(myWorld,object3);
  
  object4 = Bodies.circle(100,100,10,{restitution:0.8})
  
  World.add(myWorld,object4);
  
  console.log(object1)
 



  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(400, 400, 800, 20, options)

  World.add(myWorld, ground);


}





function draw() {
  Engine.update(myEngine)
  background(255, 255, 255);
  ellipseMode(RADIUS)
  rectMode(CENTER)
  ellipse(object1.position.x, object1.position.y, 10, 10);
  fill("blue")
  rect(ground.position.x, ground.position.y, 800, 20);
  fill("brown")
  ellipse(object2.position.x, object2.position.y, 10, 10);
  fill("red")
  ellipse(object3.position.x, object3.position.y, 10, 10);
  fill("yellow")
  ellipse(object4.position.x, object4.position.y, 10, 10);
  fill("black")

}