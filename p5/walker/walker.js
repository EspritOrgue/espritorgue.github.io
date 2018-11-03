function Walker(){
  this.pos = createVector(random(width),random(height));
  this.vel = createVector();
  this.acc = createVector();
}

Walker.prototype.applyForce = function(option){
  if(option == 'edge'){
    this.vel.rotate((-1)*PI/4);
  }else{
    this.acc.add(force);
  }
}

Walker.prototype.update = function(){
  this.vel.add(this.acc);
  this.pos.add(this.vel);
  this.vel.limit(4);
  this.acc.mult(0);
}

Walker.prototype.edges = function(){
  return (this.pos.x <= 0 || this.pos.x >= width || this.pos.y <= 0 || this.pos.y >= height);
}

Walker.prototype.show = function(){
  stroke(random(255),random(255),random(255));
  strokeWeight(2);
  point(this.pos.x,this.pos.y);
}
