class Room{
  constructor(w,h){
    this.x = 0;
    this.y = 0;
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
