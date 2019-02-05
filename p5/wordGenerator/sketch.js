// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/9r8CmofnbAQ

//var txt = "the theremin is theirs, ok? yes, it is. this is a theremin.";
//var txt = "The unicorn is a legendary creature that has been described since antiquity as a beast with a large, pointed, spiraling horn projecting from its forehead. The unicorn was depicted in ancient seals of the Indus Valley Civilization and was mentioned by the ancient Greeks in accounts of natural history by various writers, including Ctesias, Strabo, Pliny the Younger, and Aelian.[1] The Bible also describes an animal, the re'em, which some translations have erroneously rendered with the word unicorn.[1] In European folklore, the unicorn is often depicted as a white horse-like or goat-like animal with a long horn and cloven hooves (sometimes a goat's beard). In the Middle Ages and Renaissance, it was commonly described as an extremely wild woodland creature, a symbol of purity and grace, which could only be captured by a virgin. In the encyclopedias its horn was said to have the power to render poisoned water potable and to heal sickness. In medieval and Renaissance times, the tusk of the narwhal was sometimes sold as unicorn horn.";
var names_en,name_fr,dico_fr, dico_en,
    markov_fr, markov_en, markov_dico, markov_dico_en,markov_loth;
var kaamelott;
var order = 3, span_order="3";
var check;
var path = "dicos/";

function preload() {
  names_en = loadStrings(path+'poke-en.txt');
  names_fr = loadStrings(path+'poke-fr.txt');
  dico_fr = loadStrings(path+'dico-fr.txt');
  dico_en = loadStrings(path+'dico-en.txt');
  kaamelott = loadStrings(path+'loth.txt');
}

function setup() {
  noCanvas();

  markov_en = new Markov(names_en,
  	order,
    ["Generate an english Pokemon name",
    	"Generate a new Pokémon name based on the 7 first generation",
      "[poke-en]"]);



  markov_dico_en = new Markov(dico_en,
  	order,
    ["Generate an english word",
     "Generate an english word from a large databse",
    	"[dico-en]"]);



  markov_fr = new Markov(names_fr,
  	order,
    ["Générer un nom de Pokémon français",
    	"Générer un nom de pokémon basé sur les 7 premières générations",
      "[poke-fr]"]);



  markov_dico = new Markov(dico_fr,
  	order,
    ["Générer un mot français",
     "Générer un mot à partir du dictionnaire français",
    	"[dico-fr]"]);


  markov_loth = new Markov(kaamelott,
  	order,
    ["Générer une citation de Loth d'Orcanie",
     "Générer un citaton dite apr Loth d'Orcanie",
    	"[kaamelott-loth]"]);

  setup_markov();
  markov_en.createbutton();
 	markov_dico_en.createbutton();
  markov_fr.createbutton();
  markov_dico.createbutton();
  var list = select("#but-list");
  var h2 = createElement("h2","Kaamelott");
  list.child(h2);
  markov_loth.createbutton();


  var br = createElement("br");
  check = createInput("","checkbox");
  h2 = createElement("h2","Raffiner l'algorithme");
  var sp = createSpan("Inclure les mots de la liste de base");
  var slid = createSlider(2,20,3,1);
  slid.input(f);
  span_order = createSpan(slid.value());
  list.child(br);
  list.child(check);
  list.child(sp);
  list.child(h2);
  list.child(slid);
  list.child(span_order);
  var header = select("#header");
  var lis = select("#name-list");
  var divHeight = windowHeight - header.elt.offsetHeight - 20+"px";
  lis.style("height",divHeight);


}
function setup_markov(){
	markov_en.setup();
  markov_dico_en.setup();
  markov_fr.setup();
  markov_dico.setup();
  markov_loth.setup();
}
function f(){
  order = this.value();
  span_order.html(this.value());
  markov_en.change_order(this.value());
  markov_dico_en.change_order(this.value());
  markov_fr.change_order(this.value());
  markov_dico.change_order(this.value());
  markov_loth.change_order(this.value());
}
