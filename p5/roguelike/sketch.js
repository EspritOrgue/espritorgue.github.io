var ctr, c,r;
function preload(){
  ctr = loadJSON("control.json");
}

function setup(){
  createCanvas(800,600);
  w = random(200,width/2)-10;
  r = new Room(w,w*0.75);
  c = new Player();
}

function draw(){
  background(0);
  strokeWeight(4);
  stroke(255);
  r.show();

  c.update(r);
  c.show();
}
