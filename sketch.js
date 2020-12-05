//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dogImg;
var milkImage;

function preload() {
  //load images here
  dogImg = loadImage("dogImg.png")
  happyDog = loadImage("dogImg1.png")
  milkImage = loadImage("Milk.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250, 250,);
  dog.addImage(dogImg);
  dog.scale = 0.25;
  foodStock = database.ref("Food");
  foodStock.on("value", readStock);
}


function draw() {
  background(46, 139, 87);


  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS)
    dog.addImage(happyDog);
  }

  drawSprites();
  textSize(20);
  fill("white");
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",25, 20);
  text("Food Remaining: "+ foodS,175,400)
  //add styles here

}
function readStock(data) {
  foodS = data.val();
}
function writeStock(x) {

  if (x <= 0) {
    x = 0;
  } else {
    x = x - 1;
  }

  database.ref('/').update({
    Food: x
  })
}