var car, wall;
var speed, weight;


function setup() {
  createCanvas(1366,400);
  wall=createSprite(1200,200,60,height/2)
 car=createSprite(50, 200, 50, 50);


 speed=random(55,90)
 car.velocityX = speed;
weight=random(400,1500)
}

function draw() {
  background(0);  
if (wall.x-car.x<(car.width+wall.width)/2){

  car.velocityX=0;

var deformation=0.5 * speed * weight* speed/22500;
if (deformation>180)
{
  car.shapeColor=color(255,0,0);
}
if (deformation<180 && deformation>100){
  car.shapeColor=color(230,230,0)
}
if (deformation<100)
{
  car.shapeColor=color(0,255,0)
}
}

  drawSprites();
}