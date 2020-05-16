var bullet,wall,speed,weight,thickness,damage,collision;

function setup(){
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  fill(80,80,80);
  bullet = createSprite(0,200,60,20);
  wall = createSprite(1200,200,thickness,200);

  bullet.shapeColor = "white";

  bullet.velocityX = speed;

  collision = false;
}
function draw(){
  background(0,0,0);
  if(wall.x-bullet.x<wall.width/2+bullet.width/2){
    bullet.velocityX = 0;
    bullet.visible = false;
    bullet = createSprite(bullet.x,bullet.y,20,60);
    bullet.shapeColor = "white";
    bullet.velocityY = 19;
    bullet.x = wall.x-(bullet.width/2+wall.width/2);
    damage = (1/2*weight*speed*speed)/(thickness*thickness*thickness);
    collision = true;
  }
  if(collision===true){
    if(damage>10){
      wall.shapeColor = "red";
      fill(255,255,255);
      textSize(20);
      text("extensive damage was taken by the wall,test failed",700,350);
    }
    else{
      wall.shapeColor = "green";
      fill(255,255,255);
      textSize(20);
      text("wall witheld bullet, test passed",700,350);
    }
  }
  fill(255,255,255);
  textSize(20);
  text("bullet speed: "+Math.round(speed)+"km/hr",700,25);
  text("bullet weight: "+Math.round(weight)+"grams",700,75);
  text("wall thickness: "+Math.round(thickness)+"cm cube",700,125);
  drawSprites();
}x