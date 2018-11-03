var wc;

function preload(){
  wc = new WordCounting("text.txt");
}

function setup(){
  wc.getChar();
  wc.fillDic();

  noCanvas();

}

function draw(){
}
