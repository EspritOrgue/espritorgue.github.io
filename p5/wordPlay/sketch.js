var wc,p,info;
function preload(){
  wc = new WordCounting("text.txt");
}

function setup(){
  createCanvas(1001,1001);

  p = createP();
  info = true;

  wc.getChar();
  wc.fillDic();
  wc.normalize();
  //console.log(wc.dic["\n"]);

}

function draw(){
  background(255);
  wc.show();
  // text("\n/a -> "+wc.dic["\n"]["a"],110,110);
  if(info){
    fill(255);
    rect(width-130,height-35,130,35);
    fill(0);
    textAlign(LEFT,TOP)
    text(wc.getValue(),width-115,height-20);
  }else{
    p.html(wc.getValue());
  }
}
