// Based on the work of Daniel Shiffman (http://codingtra.in)
// Code from: https://youtu.be/9r8CmofnbAQ


var names = [], files = [], list = [], markov =[], check;
var order = 3, span_order="3";
var path = "dicos/";

function preload() {
   files = ['poke-en.txt','poke-fr.txt','dico-en.txt','dico-fr.txt','loth.txt'];
   for(var i= 0; i < files.length; i++){
      names[i] = loadStrings(path+files[i]);
   }
   list = [
      ["Generate an english Pokemon name","Generate a new Pokémon name based on the 7 first generation","[poke-en]"],
      ["Générer un nom de Pokémon français","Générer un nom de Pokémon basé sur les 7 premières générations","[poke-fr]"],
      ["Generate an english word","Generate an english word from a large databse","[dico-en]"],
      ["Générer un mot français","Générer un mot à partir du dictionnaire français","[dico-fr]"],
      ["Générer une citation de Loth d'Orcanie","Générer un citaton dite apr Loth d'Orcanie","[kaamelott-loth]"]
   ];
}

function setup() {
   noCanvas();
   var container = select("#infos");
   var p = createSpan(names.length+" fichiers/"+files.length+" ont été parsés ");
   container.child(p);

   for(var i=0; i< names.length; i++){
      markov[i] = new Markov(names[i],order,list[i]);
      markov[i].setup();
   }

   p = createSpan("| Tous les fichiers parsés ont été analysés");
   p.elt.id = "status"
   container.child(p);
   createInterface();

}
function createInterface(){
   var but_cont = select("#but-list");
   but_cont.html("");
   var h2 = createElement("h2","Liste des dictionnaires possibles");
   but_cont.child(h2);

   for(var i=0; i< names.length; i++){
      markov[i].createbutton();
   }

   var br = createElement("br");
   check = createInput("","checkbox");
   var sp = createSpan("Inclure les mots de la liste de base");
   but_cont.child(br);
   but_cont.child(check);
   but_cont.child(sp);


   h2 = createElement("h2","Raffiner le niveau de l'algorithme");
   var slid = createSlider(2,20,order,1);
   slid.input(f);
   span_order = createSpan(slid.value());
   var btn = createInput("Regenerate data", "button");
   btn.mousePressed(() => {
      var regen_btn = select("#regen");
      regen_btn.elt.disabled = true;
      var bt_list = document.getElementById("but-list");
      var buttons = bt_list.getElementsByTagName("button");
      for(var i=0;i<buttons.length;i++){
         buttons[i].disabled=false;
      }
      for(var i=0; i< names.length; i++){
         markov[i] = new Markov(names[i],order,list[i]);
         markov[i].setup();
      }
      var status = select("#status")
      status.html("| Tous les fichiers ont été analysés")
      createInterface();
   });
   btn.elt.id="regen";
   var regen_btn = select("#regen");

   btn.elt.disabled = true;
   but_cont.child(h2);
   but_cont.child(slid);
   but_cont.child(span_order);
   but_cont.child(btn);

   var header = select("#header");
   var name_cont = select("#name-list");
   var divHeight = windowHeight - header.elt.offsetHeight - 20+"px";
   name_cont.style("height",divHeight);
}
function f(){
   order = this.value();
   span_order.html(order);
   for(var i=0; i< names.length; i++){
      markov[i].change_order(order);
      var regen_btn = select("#regen");
      regen_btn.elt.disabled = false;
   }
   var bt_list = document.getElementById("but-list");
   var buttons = bt_list.getElementsByTagName("button");
   for(var i=0;i<buttons.length;i++){
      buttons[i].disabled=true;
   }
}
