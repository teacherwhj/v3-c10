var shipImage, bgImage
function preload(){
shipImage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
bgImage = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);

  sea = createSprite(200,200,4,20);
  sea.addImage("sea",bgImage);
  sea.scale=0.5
 
  sea.x=sea.width/10;
  sea.velocityX=-2;

  ship = createSprite(80,320,20,20);
  ship.addAnimation("moving",shipImage);
  ship.scale=0.2;

  
}

function draw() {
  background("blue");

  if(sea.x<0)
  sea.x=sea.width/10
  
 console.log(sea.x)
  drawSprites();
}