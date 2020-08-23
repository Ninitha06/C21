var fixedRect, movingRect;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 200, 50, 80);
  fixedRect.velocityY = 5;
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,800,80,30);
  movingRect.velocityY = -6;
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  


  bounceOff(fixedRect,movingRect);
 
  drawSprites();
}

function bounceOff(object1, object2){
  if(object2.x-object1.x <= object2.width/2+object1.width/2
    && object1.x-object2.x <= object2.width/2+object1.width/2){
      object1.velocityX = object1.velocityX * -1;
      object2.velocityX = object2.velocityX * -1;
    }
    if(object2.y-object1.y <= object2.height/2+object1.height/2
    && object1.y-object2.y <= object2.height/2+object1.height/2){
      object1.velocityY = object1.velocityY * -1;
      object2.velocityY = object2.velocityY * -1;
  }
}