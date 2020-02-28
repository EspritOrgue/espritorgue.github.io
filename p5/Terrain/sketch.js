let l,cl;
function preload(){
   cl = loadJSON("color.json")
}

function setNoise(set = 0){
   if(set != 0){
      l.editSettings(set)
      l.setNoiseMap(true);
   }else{
      l.setNoiseMap();
   }
   //loop();
   clear();
   l.show();
}

function setup(){
   // createCanvas(400,400)
   createCanvas(windowWidth,windowHeight);
   let noiseSettings = {
      octaves: 5,
      persistance: 0.5,
      lacunarity: 2,
      seed: 0
   }
   //createDiv("Generating Map").elt.id="alert";
   // l = new Land(width,height,40,0.01,noiseSettings,cl)
   l = new Land(width,height,4,0.01,noiseSettings,cl)
   setNoise();
}

function keyPressed(){
   if(key == ' '){
      //select("#alert").style("display","inline-block");
      //createDiv("Generating Map").elt.id="alert";
      setNoise({seed:millis()})
   }
   if(key == 'a'){
      l.minW--;
      l.maxW--;
      setNoise();
   }if(key == 'w'){
      l.minH--;
      l.maxH--;
      setNoise();
   }if(key == 'd'){
      l.minW++;
      l.maxW++;
      setNoise();
   }if(key == 's'){
      l.minH++;
      l.maxH++;
      setNoise();
   }
}

function draw(){
   if(keyIsDown(65)){
      l.minW--;
      l.maxW--;
      setNoise();
   }if(keyIsDown(87)){
      l.minH--;
      l.maxH--;
      setNoise();
   }if(keyIsDown(68)){
      l.minW++;
      l.maxW++;
      setNoise();
   }if(keyIsDown(83)){
      l.minH++;
      l.maxH++;
      setNoise();
   }

   /*if(!l.loading){
      noLoop();
   }else{
      background(0)
   }*/
}
