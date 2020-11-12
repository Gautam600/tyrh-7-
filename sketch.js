const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var n,coin;
var tyrannsorus;
function setup() {
  
	engine = Engine.create();
	world = engine.world;

  createCanvas(1400,700);
n=new Ground(700,690,1400,10);
tyrannsorus=createSprite(100,670,15,30)

}

function draw() {
  background(255,255,255);
  n.display(); 
  if(World.frameCount%80 === 0) {
    coin=createSprite(100,random(650,530),20,20);
    coin.shapeColor="red";
    coin.lifetime=100;
    if(tyrannsorus.isTouching(coin)){
coin.destroy();
    }
  }
  drawSprites();
}
function keyPressed(){
  if(keyIsDown === UP_ARROW){
    tyrannsorus.velocityY=3;
  }
}