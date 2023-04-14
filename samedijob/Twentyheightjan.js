// storing a function in varaiables

function additionner(a, b){
    return a + b
}
let box = additionner;
let resultat = box(10,40);

// ou tu peux utiliser
let result = additionner( 25, 25)

document.write(`${resultat}<br><br>`);
document.write(`${result}<br><br>`)

// you can also passing a function to an other function
function addAfterDivide(a, b, fonction){
   return  fonction(a,b) / 2
}
let loumouydiokhé = addAfterDivide(25,25,box);
document.write(loumouydiokhé)

// returning a functions from functions

let tab = [
    {
      id: 1,
      nom: "Diop",
      prenom: "Ahmed",
      adresse: "G.Y",
      age: 28,
      note: 14,
      moyenne: 09,
    },
    {
      id: 2,
      nom: "Mendy",
      prenom: "Antoine",
      adresse: "G.Y",
      age: 25,
      note: 17,
      moyenne: 08,
    },
    {
      id:3 ,
      nom: "Fonseca",
      prenom: "Jules",
      adresse: "G.Y",
      age: 21,
      note: 12,
      moyenne: 11,
    }
]


//    CECI EST A GARDER  C'EST UNE METHODE DE TRIE POUR UN TABLEAU D'OBJET
function compareBy (propertyName){

    return function(a, b){
        let x= a[propertyName];
        let y= b[propertyName];
        if(x > y){
            return 1
        }else if(x < y){
            return -1
        }else{
            return 0
        }
    };
}

let tour= tab.sort(compareBy('age'));
console.log(tour);