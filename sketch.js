var bullet,wall,thickness;
var speed,weight;

function setup() {

  createCanvas(1600,400);

  thickness = random(22,83);
  speed = random(223.321);
  weight = random(30,52);

  bullet = creatSprite(50,200,20,40);
  bullet.velocityX = speed;
  bullet.shapeColour=colour(255);

  wall = creatSprite(1200,200,thickness,height/2);
  wall.shapeColour=colour(80,80,80);

}

function hasCollided(Lbullet,Lwall){
  bulletRightEdge= Lbullet.x + Lbullet.width;
  wallLeftEdge= Lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
  return true;
  }
  return false;
}
 
if (hasCollided(bullet,wall)){
  bullet.velocityX = 0;
  var damage= 0.5 * speed * speed/(thickness *thickness *thickness);
  if(damage>10){
    wall.shapeColour = colour(255,0,0);
  }
  if(damage<10){
    wall.shapeColour = colour(0,255,0);
  }
}

function draw() {
  background(0);  

if(wall.x-bullet.x < (bullet.width+wall.width)/2){

  bullet.velocityX=0;

  var deformation=0.5 * weight * speed * speed/22509;

  if(deformation>180){
    bullet.shapeColour = colour(255,0,0);
  }
  if(deformation<180 && deformation>100){
    bullet.shapecolour = colour(230,230,0);
  }
  if(deformation<100){
    bullet.shapeColour = colour(0,255,0);
  }
}
  drawSprites();
}