class WordCounting{
  constructor(filename){
    this.txt;
    this.char;
    this.dic = {};
    this.load(filename);
  }

  load(filename){
    this.txt = loadStrings(filename);
  }

  getChar(){
    var temp = this.txt.join("\n");
    this.char = temp.split("");
  }

  fillDic(){
    for(var chr in this.char){
      // console.log(this.char[chr]);
      var char = this.char[chr].toLowerCase();
      var dic = this.dic[char];
      if(dic === undefined){
        this.dic[char] = {};
      }
      if (chr != this.char.length-1) {
        var t = this.char[int(chr)+1].toLowerCase();
        if(this.dic[char][t]){
          this.dic[char][t]++;
        }else{
          this.dic[char][t] = 1;
        }
      }
    }
  }

  normalize(){
    for(var w in this.dic){
      var sum = 0;
      for(var c in this.dic[w]){
        // if(this.dic[w][c] > max) max = this.dic[w][c];
        sum += this.dic[w][c];
      }
      // console.log(w+" -> "+max);
      for(var c in this.dic[w]){
        this.dic[w][c] = floor(this.dic[w][c]/sum*100);
      }
      sum = 0;
    }
  }

  show(){
    var a = Object.keys(this.dic).sort();
    var t = (a.length+1);
    //  console.log(a);
    for(var i = 0; i <= t; i++){
      for(var j = 0; j  < t; j++){
        fill(0);
        noStroke();
        textSize(15);
        textAlign(LEFT,BOTTOM);
        if(i==0 && j == 0){
          text(">",3,17);
          noFill();
        }else if(i == 0 && j != 0){
          text(a[j-1],3,j*width/t+17);
          noFill();
        }else if(j== 0){
          text(a[i-1],i*width/t+3, 17);
          noFill();
        }else{
          if (this.dic[a[i-1]]!=undefined) {
            if(this.dic[a[i-1]][a[j-1]]== undefined){
              fill(0);
            }else{
              var c = floor(map(this.dic[a[i-1]][a[j-1]],0,1,0,255));
              fill(255-c,c,0);
            }
            // fill(0);
            // textSize(8)
            // text(c,i*width/t+7,j*width/t+20);
            // noFill();
            // console.log(c);
          }
        }
        stroke(51);
        rect(floor(i*width/t),floor(j*width/t),floor(width/t),floor(width/t));
      }
    }
    console.log("Finished");
  }

  getValue(){
    var a = Object.keys(this.dic).sort();
    var t = (a.length);
    var i = a[floor(mouseX*t/width)];
    var j = a[floor(mouseY*t/width)];
    if(i != undefined && j != undefined){
        if(this.dic[i] != undefined && this.dic[j] != undefined){
          if (this.dic[i][j]!=undefined) {
              return i+"/"+j+" = "+this.dic[i][j];
          }
        }
    }
    return i+"/"+j+" : No value";
  }
}
