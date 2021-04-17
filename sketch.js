var fixedRect, movingRect;
var GO1,GO2;
var GO3,GO4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  GO1=createSprite(300,200,100,100)
  GO1.shapeColor="blue"
  GO2=createSprite(100,200,200,200)
  GO2.shapeColor="blue"
  GO3=createSprite(500,200,50,50)
  GO3.velocityX=1
  
  GO4=createSprite(500,250,100,100)
  GO4.velocityX=-1
  
}
function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if(istouching(movingRect,fixedRect)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}
else {
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";

}
if(istouching(movingRect,GO1)){
  movingRect.shapeColor = "YELLOW";
  GO1.shapeColor = "YELLOW";

  
}
if(istouching(movingRect,GO2)){
  movingRect.shapeColor = "ORANGE";
  GO2.shapeColor = "ORANGE";
}
  drawSprites();
}
function bounceoff(OBJECT1,OBJECT2){
  if (OBJECT1.x - OBJECT2.x < OBJECT2.width/2 + OBJECT1.width/2
    && OBJECT2.x - OBJECT1.x < OBJECT2.width/2 + OBJECT1.width/2) {
  OBJECT1.velocityX = OBJECT1.velocityX * (-1);
  OBJECT2.velocityX = OBJECT2.velocityX * (-1);
}
if (OBJECT1.y - OBJECT2.y < OBJECT2.height/2 + OBJECT1.height/2
  && OBJECT2.y - OBJECT1.y < OBJECT2.height/2 + OBJECT1.height/2){
  OBJECT1.velocityY = OBJECT1.velocityY * (-1);
  OBJECT2.velocityY = OBJECT2.velocityY * (-1);

}
}
function istouching(Object1,OBJECT2)
  {  if (Object1.x - OBJECT2.x < OBJECT2.width/2 + Object1.width/2
    && OBJECT2.x -Object1.x < OBJECT2.width/2 + Object1.width/2
    && Object1.y -OBJECT2.y < OBJECT2.height/2 + Object1.height/2
    && OBJECT2.y - Object1.y < OBJECT2.height/2 + Object1.height/2) {
return true  
}
else{
  return false
  
  }

}