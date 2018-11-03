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
}
