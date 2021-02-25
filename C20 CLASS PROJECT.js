var mr,fr


function setup() {
  createCanvas(800,400);
  mr=createSprite(400, 200, 50, 50);
  fr=createSprite(200,200,50,50);
}

function draw() {
  background(255,255,255);  
  fr.x=World.mouseX
  fr.y=World.mouseY

  if(mr.x-fr.x<fr.width/2+mr.width/2 && fr.x-mr.x<fr.width/2+mr.width/2&&
    mr.y-fr.y<fr.height/2+mr.height/2 && fr.y-mr.y<fr.height/2+mr.height/2){
    mr.shapeColor="red"
    fr.shapeColor="red"

    

  }
  else{
    mr.shapeColor="blue"
    fr.shapeColor="blue"
  }
  drawSprites();
}