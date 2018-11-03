class Ship{
  constructor(){
    this.w = 30;
    this.h = 50;
    this.pos = createVector(width/2,height/2);
    this.heading = 0;
  }

  show(){
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.heading + PI / 2);
    stroke(255);
    noFill();
    triangle(this.w,-this.h,-this.w,-this.h,0,this.h);
    pop();
  }
}
