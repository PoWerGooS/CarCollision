var car,wall;
var speed, weight;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  speed = random(55,90)
  weight = random(400,1500)
  car = createSprite(50,200,50,50)
  wall = createSprite(1500,200,60,height/2)
  wall.shapeColor(80,80,80)
  car.velocityX = speed
}

function draw() {
  background(255,255,255);  
  drawSprites();
}