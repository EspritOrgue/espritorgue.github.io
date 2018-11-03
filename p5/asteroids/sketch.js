var ship;
function setup(){
  createCanvas(800,800);
  ship = new Ship();
}

function draw(){
  background(0);
  strokeWeight(4);
  stroke(255);
  point(width/2,height/2);
  strokeWeight(1);
  ship.show();
}
