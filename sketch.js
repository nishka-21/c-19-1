var space,spaceImg;
var asteroid,asteroidImg,asteroidGroup;
var asteroid1,asteroid1Img,asteroid1Group;
var spaceship,spaceshipImg;
var rock,rockImg,rockGroup;
var score = 0;
var gameState="play"

function preload(){
  spaceImg=loadImage("space.jpg");
  asteroidImg=loadImage("asteroid.png");
  asteroid1Img=loadImage("asteroid1.png");
  spaceshipImg=loadImage("spaceship.png");
  rockImg=loadImage("rock.png");
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  space= createSprite(width/2,200);
  space.addImage("space",spaceImg);
  space.velocityY =4;
  //space.scale=0.5;

  spaceship= createSprite(width/2,height-100,20,20);
  spaceship.addImage("spaceship",spaceshipImg);
  spaceship.scale=0.3

  asteroidGroup= new Group();
  asteroid1Group= new Group();
  rockGroup=new Group();
}
  
  

function draw() {


  if(gameState == "play")
  {
    background(0);
  
    

   if(keyDown("left_arrow")){
     spaceship.x = spaceship.x - 3;
    }
  
    if(keyDown("right_arrow")){
      spaceship.x = spaceship.x + 3;
    }
  
   if(keyDown("Up_arrow")){
     spaceship.y = spaceship.y - 3;
    }

    if(keyDown("Down_arrow")){
    spaceship.y = spaceship.y + 3;
    }
  
    if(space.y > 200){
      space.y = 120
      }
    score = score + Math.round(getFrameRate()/60);

    spawnAsteroids();
  
    if(asteroidGroup.isTouching(spaceship)){
    spaceship.destroy();
    gameState = "end"
     }
  }
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(100);
    text("Game Over", 230,250)
    asteroidGroup.destroy();
    asteroid1Group.destroy();
    rockGroup.destroy();
  }
   drawSprites();
   textSize(20);
   fill(255);
   text("Score: "+ score, width-150,30);
}





function spawnAsteroids()
{
  if (frameCount % 100 === 0)
  {
    var asteroid = createSprite(Math.round(random(50, width-50),40, 10, 10));
    //asteroid.x=Math.round(rando);
    asteroid.addImage(asteroidImg);
    asteroid.scale=0.2
    asteroid.velocityY=2
    asteroid.velocityX=2

    var asteroid1 = createSprite(Math.round(random(50, width-50),40, 10, 10));
    //asteroid1.x=Math.round(random(570,10));
    asteroid1.addImage(asteroid1Img);
    asteroid1.scale=0.2
    asteroid1.velocityY=2
     asteroid1.velocityX=-2
     
    var rock = createSprite(Math.round(random(50, width-50),40, 10, 10));
    //rock.x=Math.round(random(670,30));
    rock.addImage(rockImg);
    rock.scale=0.05
     

    asteroid.lifetime=400;
    asteroid1.lifetime=400;
    rock.lifetime=100;

    asteroidGroup.add(asteroid);
    asteroid1Group.add(asteroid1);
    rockGroup.add(rock);
   }
   
}