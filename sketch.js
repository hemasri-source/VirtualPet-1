var Dog, happyDog, database, foodS, foodStock

function preload()
{
   dog1 = loadImage("images/dogImg.png")
   happyDog1 = loadImage("images/dogImg1.png")
}

function setup() {
  database = firebase.database()
	createCanvas(500, 500);

  dog = createSprite(400,300,150,150)
  dog.addImage(dog1)
  dog.scale = 0.15
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  
}


function draw() {  
  background(46,139,87)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog1);
  }

  drawSprites();
  //add styles here

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  database.ref('/').update({
    Food:x
  })
}

