let tableau=[];



let ask=Number(prompt('combien de nombre voulez vous saisir pour le tableau'));

for (let b = 0; b < ask; b++) {
    let put1= Number(prompt(`ecrivez le nombre n°${b+1}`));

    tableau.push(put1)

}

console.log(tableau)



  
function triage (mychart ){
    for(let i=1 ; i<mychart.length; i++){
let boite= mychart[i];
let j= i-1;
while (j>=0 && mychart[j]<boite) {
    mychart[j+1]=mychart[j];
    j--;
}
mychart[j+1]=boite;

    }
    return mychart
}

const table = triage(tableau)
console.log(table);
