const programmation={
    language:["html","css","javascript","react"],
    isComplicated: true,
    isRewarding:true,
    diffuclte:8,
    joke:"https://jsbin.com/voquqofoco/edit?html,js,console,output"
}
console.log(programmation);


programmation.language.push("PHP")
console.log(programmation.language);


programmation.diffuclte=7
console.log(programmation.diffuclte);

delete programmation.joke
console.log(programmation);

programmation.isFun=true

console.log(programmation);
programmation.language.forEach((element) => {
      console.log(element);
    });


    for(const clé in programmation)
{

    console.log(` clé  : ${clé} `);
    
}


for(const Valeur in programmation)
{

    console.log(` valeur  : ${programmation[Valeur]} `);
    
}

let tableaux=[ trer={
    table:[3,"gr"],
},trer1={
    table12:[6,"ZRTY"]
}  ]
console.log(tableaux[0]["table"][0]);