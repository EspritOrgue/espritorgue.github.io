var ctr;
var x,y;
function preload(){
  ctr = loadJSON("control.json");
}

function setup(){
  createCanvas(800,600);
  x = width/2;
  y = height/2;
}

function draw(){
  background(0);
  strokeWeight(4);
  stroke(255);

  point(x,y);
}

function keyPressed(){
  console.log(key);
  switch(key){
    case ctr.controls.up:
      y--;
    break;
    case ctr.controls.down:
      y++;
    break;
    case ctr.controls.left:
       x--;
    break;
    case ctr.controls.right:
      x++;
    break;
  }
}
