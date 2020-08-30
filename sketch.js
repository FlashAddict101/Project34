//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var foodStock;

function preload()
{
  //load images here
  dog=loadImage("images/dogImg.png");
  happyDog=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250,250,10,10);
  database=firebase.database();
  this.image=loadImage("images/dogImg.png")
  foodStock=database.ref('Food');
 foodStock.on("value",readStock);
 
  
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);

   dog.display();
  }
  drawSprites();
  //add styles here
  textSize(20);
  fill("black");
  text("Note:Press UP_ARROW Key To Feed Drago Milk!",50 ,50);
  text("foodStock",250 ,270);
}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}



