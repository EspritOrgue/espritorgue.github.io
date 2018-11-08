class Room{
  constructor(w,h){
    this.x = width/2;
    this.y = height/2;
    this.w = w;
    this.h = h;
    this.door = 5;
    this.doors = [];
  }

  show(){
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(this.x,this.y,this.w,this.h);
  }
}
