class Player{
  constructor(){
    this.x = width/2;
    this.y = height/2;
  }
  show(){
    strokeWeight(8);
    stroke(255,0,0);
    point(this.x,this.y);
  }
  edges(r){
    return (this.x > r.x - r.w/2 && this.x < r.x + r.w/2 && this.y > r.y - r.h/2 && this.y < r.y + r.h/2);
  }
  update(r){
    if(this.x > r.x - r.w/2 +5){
      if (keyIsDown(ctr.controls.left) || keyIsDown(ctr.altcontrols.left)) {
        this.x -= 2;
      }
    }
    if(this.x < r.x + r.w/2 -5){
      if (keyIsDown(ctr.controls.right) || keyIsDown(ctr.altcontrols.right)) {
        this.x += 2;
      }
    }
    if(this.y > r.y - r.h/2 +5){
      if (keyIsDown(ctr.controls.up) || keyIsDown(ctr.altcontrols.up)) {
        this.y -= 2;
      }
    }
    if(this.y < r.y + r.h/2 -5){
      if (keyIsDown(ctr.controls.down) || keyIsDown(ctr.altcontrols.down)) {
        this.y += 2;
      }
    }
  }
}
