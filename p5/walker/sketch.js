var walker,force,prev;

function setup(){
  createCanvas(800,600);
  background(0);
  walker = new Walker();
}

function draw(){
  force = p5.Vector.random2D();
  prev = walker.pos.copy();

  if(walker.edges())
      walker.applyForce('edge');
  else
    walker.applyForce();

  walker.update();
  line(prev.x,prev.y,walker.pos.x,walker.pos.y);
  walker.show();
}
