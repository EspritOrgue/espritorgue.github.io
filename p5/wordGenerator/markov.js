class Markov{
	constructor(nam, ord, opt){
  	this.names = nam;
		this.order = ord;
		this.ngrams = {};
		this.beginnings = [];
    
    if(typeof opt === 'string') opt = [opt]
      
    this.opt = opt;
  }
  
  setup(){
    this.ngrams = {};
    this.beginnings = [];
    for (var j = 0; j < this.names.length; j++) {
    	var txt = this.names[j];
    	for (var i = 0; i <= txt.length - this.order; i++) {
      	var gram = txt.substring(i, i + this.order);
      	if (i == 0) {
        	this.beginnings.push(gram);
      	}

      	if (!this.ngrams[gram]) {
        	this.ngrams[gram] = [];
      	}
      	this.ngrams[gram].push(txt.charAt(i + this.order));
   	 }
  	}
  }
  createbutton(){
    var list = select("#but-list");
    var button = createButton(this.opt[0] || "Generate");
    button.elt.title = this.opt[1] || "Generate a new word";
    list.child(button);
  	button.mousePressed(() => {
  		var currentGram = random(this.beginnings);
  		var result = currentGram;
  		while(true) {
    		var possibilities = this.ngrams[currentGram];
    		if (!possibilities) {
      		break;
    		}
    		var next = random(possibilities);
    		result += next;
    		var len = result.length;
    
    		if(next == "")break;
    
    		currentGram = result.substring(len - this.order, len);
  		}
      if(!check.elt.checked && (this.names.includes(result) || this.names.includes(result.toLowerCase()))){
        return;
      }
      result = this.upper(result);
      (this.opt[1])?result=this.opt[2]+" "+result:false;
  		var p = createP(result);
      var list = select("#name-list");
      list.elt.insertBefore(p.elt,list.elt.firstChild);
		});
  }
  change_order(newer){
  	this.order = newer;
    this.setup();
  }
  upper(string) 
	{
    return string.charAt(0).toUpperCase() + string.slice(1);
	}
}