var gardenImage;
var tom, jerry
function preload() {
    //load the images here
    gardenImage = loadImage("images/garden.png")
    tomImage1 = loadAnimation("images/cat1.png")
    tomImage2 = loadAnimation("images/cat2.png", "images/cat3.png")
    tomImage3 = loadAnimation("images/cat4.png")

    jerry1 = loadAnimation("images/mouse1.png")
    jerry2 = loadAnimation("images/mouse2.png", "images/mouse3.png")
    jerry3 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(870, 600)
    tom.addAnimation("catSitting", tomImage1)
    tom.scale = 0.2;

    jerry = createSprite(200, 600)
    jerry.addAnimation("jerryStanding", jerry1)
    jerry.scale = 0.1;
}

function draw() {

    background(gardenImage);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x < tom.width/2 - jerry.width/2){
        tom.velocityX = 0;
        tom.addAnimation("tomStanding", tomImage3)
        tom.changeAnimation("tomStanding")

        jerry.addAnimation("jerryWink", jerry3)
        jerry.changeAnimation("jerryWink")
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      jerry.addAnimation("jerryTeasing", jerry2)
      jerry.frameDelay = 25
      jerry.changeAnimation("jerryTeasing")

      tom.velocityX= -5
      tom.addAnimation("tomWalking", tomImage2)
      tom.changeAnimation("tomWalking")
      
  }

}
