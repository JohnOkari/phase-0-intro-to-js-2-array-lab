const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name){
    cats.push(name);
    return name;
   };

function destructivelyPrependCat(name){
    cats.unshift(name);
    return name;
   };

function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
};

function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
};

function appendCat(name){
    var name = [...cats,name];
    return name;
  }

function prependCat(name){
    var name=[name, ...cats];
    return name
  }

 

  function  removeLastCat(){
    var caats= cats.slice(0,cats.length-1);
    return caats;
  }

  function   removeFirstCat(){
    var catts= cats.slice(1);
    return catts;
  }

