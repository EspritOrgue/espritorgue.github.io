class Sword{
  constructor(){
    this.atk = 1;
    this.w = 20;
    this.h = 5;
    this.savedangle = 2*PI;
    this.currangle = this.savedangle;
    this.anim = false;
  }
  show(x,y,a){
    if(a != undefined){
      this.savedangle = a;
      this.currangle = this.savedangle;
    }
    push();
    fill(0);
    noStroke();
    if(!this.anim){
      this.anim = true;
    }
    if(this.currangle >= this.savedangle+PI){
      this.currangle = this.savedangle;
      this.anim = false;
      return;
    }
    rotate(this.currangle);
    rect(x,y,this.w,this.h);
    this.currangle += 0.1;
    pop();
  }
}
