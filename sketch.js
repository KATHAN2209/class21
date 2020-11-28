
var ball1,ball2;
var ball3,ball4;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
ball1=createSprite(400, 100,50,80)
ball2=createSprite(100,200,60,20)
ball1.shapeColor="red";
ball2.shapeColor="blue";
ball3=createSprite(200,200,50,100)
ball4=createSprite(400, 380,60,20)
ball3.shapeColor="limegreen"
ball4.shapeColor="purple"
ball4.velocityY = -5;
ball1.velocityY = +5;

}

function draw() {
  background("skyblue");  
ball2.y=World.mouseY
ball2.x=World.mouseX

if(isTouching(ball2,ball3)){

  ball2.shapeColor="green";
  ball3.shapeColor="green";

}else{

  ball3.shapeColor="yellow";
  ball2.shapeColor="yellow";


}

bounceOFF(ball1,ball4)

  



  drawSprites();

}








}


















