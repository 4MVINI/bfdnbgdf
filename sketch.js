var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var predio,predio2,pasago,olha_o_poste_desgrama

function preload(){
bgImg = loadImage("assets/bg.png")
predio = loadImage("assets/obsBottom1.png")
balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
olha_o_poste_desgrama = loadImage ("assets/obsBottom2.png")
predio2 = loadImage ("assets/obsBottom3.png")
pasago = loadImage ("assets/obsTop2.png") 

}

function setup(){

createCanvas(800,750 )


//imagem de plano de fundo
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

obstop2 = new Group()

obstacles1 = new Group() 

//criando canto superior e inferior
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//criando o balão     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;



}

function draw() {
  
  background("black");
        
          //fazendo o balão de ar quente pular
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          }

          //adicionando gravidade

          balloon.velocityY = balloon.velocityY + 1;
   
        drawSprites();
       
  obstacles()     

  obstaclevoador()


if (balloon.isTouching(obstacles1) || balloon.isTouching(obstop2)) {
  balloon.remove()
}



}

function obstacles(){
if (frameCount % 200 === 0) {
  var obstacle = createSprite(800,500)

obstacle.velocityX = -5 

var rand = Math.round(random(1,3))
switch(rand) {

 case 1: obstacle.addImage(predio)
 obstacle.scale = 0.3 
 break; 

case 2: obstacle.addImage(olha_o_poste_desgrama)
obstacle.scale = 0.2 
obstacle.y = 600
break; 

case 3: obstacle.addImage(predio2)
obstacle.scale = 0.3 
break;

default: break

 }

obstacles1.add(obstacle)

}



}
function obstaclevoador(){
  if (frameCount % 150 === 0) {
    var obstacleVoador = createSprite(800,500)
  
  obstacleVoador.velocityX = -5 
  
obstacleVoador.y = Math.round(random(100,300))

    obstacleVoador.addImage(pasago)
   obstacleVoador.scale = 0.3 

obstop2.add(obstacleVoador)


   }
}



