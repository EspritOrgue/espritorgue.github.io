class Land{
   constructor(w,h,tileSize,scl,noiseSettings,colorMap){
      this.w =  w;
      this.h =  h;
      this.tileSize =  tileSize;
      this.minW = 0;
      this.maxW = floor(w/this.tileSize);
      this.minH = 0;
      this.maxH = floor(h/this.tileSize);
      this.scl =  scl;
      this.noiseMap = {};
      this.noiseSettings = noiseSettings
      if(colorMap != undefined){
         this.colorMap = colorMap;
      }
      this.loading = true;
   }

   setNoiseMap(redraw){
      this.loading = true
      let set = this.noiseSettings;
      if(set){
         if(set.seed)noiseSeed(set.seed)
      }
      for(var i = this.minW; i <= this.maxW; i++){
         if(this.noiseMap[i] == undefined || redraw)this.noiseMap[i] = {};
         for(var j = this.minH; j <= this.maxH; j++){
            if(this.noiseMap[i][j] == undefined || redraw)
            this.noiseMap[i][j] = noise(i*this.scl,j*this.scl);
         }
      }
      // setTimeout(()=>{select("#alert").style("display","none")},5000);
      // setTimeout(removeElements,2000);
      this.loading = false;
   }

   editSettings(set){
      if(this.noiseSettings){
         let keys = Object.keys(set);
         for(var k of keys){
            this.noiseSettings[k] = set[k]
         }
      }else{
         this.noiseSettings = set;
      }
   }

   color(noiseVal){
      if(this.colorMap){
         let c;
         let k = Object.keys(this.colorMap);
         k.sort()
         for(var i = 0; i < k.length; i++){
            if(noiseVal<=k[i]){
               //c = this.colorMap[k[i]];
               return color(this.colorMap[k[i]]);
            }
         }
         if(c != undefined)
         return color(c);
         else
         return noiseVal*255;
      }else{
         return noiseVal*255;
      }
   }

   show(){
      if(Object.keys(this.noiseMap).length > 0){
         noStroke();
         let offsetX = this.minW - this.minW;
         let offsetY = this.minH - this.minH;
         for(var i = this.minW; i < this.maxW; i++){
            for(var j = this.minH; j < this.maxH; j++){
               fill(this.color(this.noiseMap[i][j]))
               let x = (i- this.minW)*this.tileSize
               let y = (j- this.minH)*this.tileSize
               rect(x,y,x+this.tileSize,y+this.tileSize)
            }
         }
      }else{
         fill(255);
         noStroke();
         rect(0,0,this.w,this.h);
         fill(0);
         textAlign(CENTER,CENTER);
         textSize(40)
         text("No map generated",this.w/2,this.h/2);
      }
   }
}
