var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1000,400);
  thickness=random(22,83);
  speed=random(100,175);
  weight=random(30,52);
  bullet=createSprite(50,200,50,50);
  bullet.shapeColor=color("blue");
  bullet.velocityX=speed;
  wall=createSprite(900,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(0);  
  bullet.collide(wall);
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=(0.5*weight*speed^2)/thickness^3;
      if(damage>10){
        wall.shapeColor=color(255,0,0);
      }else if(damage<10){
        wall.shapeColor=color(0,255,0 );
      }
  }
  drawSprites();
}

function hasCollided(lbullet,lwall){
  if(lbullet.x+lbullet.width>=lwall.x){
    return true;
  }
  return false;
}