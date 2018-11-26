class Player{
  constructor(){
    this.x = 0;
    this.y = 0;
    this.color = color(random(255),0,0);
    this.dir = PI;
    this.sword = new Sword();
  }
  show(){
    strokeWeight(8);
    stroke(this.color);
    point(this.x,this.y);
    if(this.sword.anim){
      this.sword.show(this.x+8,this.y);
    }
  }
  edges(r){
    return (this.x > r.x - r.w/2 && this.x < r.x + r.w/2 && this.y > r.y - r.h/2 && this.y < r.y + r.h/2);
  }
  update(r){
    if(this.x > r.x - r.w/2 +5){
      if (keyIsDown(ctr.controls.left) || keyIsDown(ctr.altcontrols.left)) {
        r.x += 2;
        this.dir = PI/2;
      }
    }
    if(this.x < r.x + r.w/2 -5){
      if (keyIsDown(ctr.controls.right) || keyIsDown(ctr.altcontrols.right)) {
        r.x -= 2;
        this.dir = 3*PI/2;
      }
    }
    if(this.y > r.y - r.h/2 +5){
      if (keyIsDown(ctr.controls.up) || keyIsDown(ctr.altcontrols.up)) {
        r.y += 2;
        this.dir = PI;
      }
    }
    if(this.y < r.y + r.h/2 -5){
      if (keyIsDown(ctr.controls.down) || keyIsDown(ctr.altcontrols.down)) {
        r.y -= 2;
        this.dir = 2*PI;
      }
    }
    if((keyIsDown(ctr.controls.attack) || keyIsDown(ctr.altcontrols.attack)) && !this.sword.anim) {
      this.attack();
    }
  }

  attack(){
    fill(0);
    this.sword.show(this.x+8,this.y,this.dir);
    // this.color = color(random(255),random(255),random(255));
  }
}
