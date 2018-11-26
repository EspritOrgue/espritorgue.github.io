var ctr, c,r;
function preload(){
  ctr = loadJSON("control.json");
}

function setup(){
  createCanvas(800,600);
  w = random(width/2,width)-100;
  r = new Room(w,w*0.75);
  c = new Player();
}

function draw(){
  background(0);
  strokeWeight(4);
  stroke(255);
  translate(width/2,height/2);
  r.show();

  c.update(r);
  c.show();
}
