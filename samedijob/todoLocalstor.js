class TruyByMe{
    /*Nous n'avons pas besoin de préciser "function" devant notre constructeur
     *et nos autres méthodes classe*/
    constructor(prenom,nom, taille,poids){
        this.prenom=prenom,
        this.nom = nom;
        this.taille = taille,
        this.poids=poids;
    }
}

let recuperer= JSON.parse(localStorage.getItem("leTableau")) || [];
const setLocalStorage = function(leTableau){
    localStorage.setItem('leTableau', JSON.stringify(leTableau));
    // document.location.reload();
}
function ajouter() {
    let a = document.getElementById("prenom").value;
    if (a === "") {
        return  alert("Saisissez un prénom svp");
    //    a = document.getElementById("prenom").value;
      }
    
    let b = document.getElementById("nom").value;
    if (b === "") {
        return  alert("Saisissez un nom svp");
        //   b = document.getElementById("nom").value;
      }
    
    let c = document.getElementById("taille").value;
    if (isNaN(c) || c === "" || c > 300) {
        return alert("Saisissez une taille valide svp");
        //    c = document.getElementById("taille").value;
      }
    
    let d = document.getElementById("poids").value;
    if (isNaN(d) || d === "") {
        return  alert("Saisissez un poids valide svp");
        //   d = document.getElementById("poids").value;
      }
    
    let personne = new TruyByMe(a, b, c, d);
    recuperer.push(personne);
    setLocalStorage(recuperer)
    viderFormulaire()
    afficher(recuperer);
}

function afficher(table) {
    let tbody = document.getElementById("p2");
    tbody.innerHTML = "";

    // table.map((element, index) => {
    //     tbody.innerHTML +=  `Prenom: ${element.prenom} Nom: ${element.nom}<br>taille: ${element.taille}<br>Poids: ${element.poids}kg <br><button onclick="supprimer(${index})">Supprimer</button><br id = "${index}"> <br>`;
    //   });
  
    table.forEach((element, index) => {
      tbody.innerHTML +=  `Prenom: ${element.prenom} Nom: ${element.nom}<br>taille: ${element.taille}<br>Poids: ${element.poids}kg <br>
        <button onclick="edit(${index})">Modifier</button><button onclick="supprimer(${index})">Supprimer</button><br id = "${index}"> <br>`;
      });
  }






function viderFormulaire() {
    document.getElementById("prenom").value = "";
    
document.getElementById("nom").value = "";

    document.getElementById("taille").value = "";

    document.getElementById("poids").value = "";
}

function supprimer(id) {
    recuperer.splice(id, 1);
    setLocalStorage(recuperer);
    afficher(recuperer);
}

function edit(index) {
    document.getElementById("prenom").value = recuperer[index].prenom;
    document.getElementById("nom").value = recuperer[index].nom;
    document.getElementById("taille").value = recuperer[index].taille;
    document.getElementById("poids").value = recuperer[index].poids;

    // Modifier l'élément dans le tableau
    let ajouterBouton = document.getElementById("adding");
    ajouterBouton.innerHTML = "Enregistrer";
    ajouterBouton.onclick = function() {
        recuperer[index].prenom = document.getElementById("prenom").value;
        recuperer[index].nom = document.getElementById("nom").value;
        recuperer[index].taille = document.getElementById("taille").value;
        recuperer[index].poids = document.getElementById("poids").value;
        setLocalStorage(recuperer);
        viderFormulaire();
        ajouterBouton.innerHTML = "Ajouter";
        ajouterBouton.onclick = ajouter;
        afficher(recuperer);
      };
}
var allDelete= document.getElementById("clearing").addEventListener('click', () => {
    let text = "Voulez vous tout supprimer ?";
    if (confirm(text) == true) {
        localStorage.clear()
        afficher(recuperer)
    
        document.location.reload()

    } else {
        alert('suppression annulée')
      }
    
    
 
});




afficher(recuperer);



// let a=   document.getElementById("prenom").value;
// // console.log(typeof(a));

// // typeof 2  != typeof '2' 
// while(typeof  a === ""){
//     alert('saisissez un prenom svp');
//     a= document.getElementById("prenom").value;
// }
// let b= document.getElementById("nom").value;
// while(typeof  b === ""){
//     alert('saisissez un prenom svp');
//     b= document.getElementById("nom").value;
// }
// let c=document.getElementById("taille").value;
// while(isNaN(c) || c === "" ||c > 300){
  
//     alert('saisissez un chiffre svp');
//     c=document.getElementById("taille").value;
// }
// let d=Number (document.getElementById("poids").value);
// while(isNaN(d) || d === ""){
//     alert('saisissez un chiffre');
//      d=Number (document.getElementById("poids").value);
// }

// class TruyByMe{
//     /*Nous n'avons pas besoin de préciser "function" devant notre constructeur
//      *et nos autres méthodes classe*/
//     constructor(prenom,nom, taille,poids){
//         this.prenom=prenom,
//         this.nom = nom;
//         this.taille = taille,
//         this.poids=poids;
//     }
    

// }

// let geo4 = new TruyByMe(a,b,c,d);

// console.log("je log geo4 avant storage");
// console.log(geo4);
// const recuperer= JSON.parse(localStorage.getItem("leTableau")) || [];
// console.log("je log recuperer avant storage");
// console.log(recuperer);

// const setLocalStorage = function(leTableau){
//     localStorage.setItem('leTableau', JSON.stringify(leTableau));
//     // document.location.reload();
// }
// function inside( geo) {
//     recuperer.push(geo)
// console.log("je log recuperer dans inside");
//    console.log(recuperer);

//    setLocalStorage(recuperer)
// }
// inside(geo4)


// const tbody = document.getElementById("p2");
// recuperer.forEach((element) => {
//   tbody.innerHTML +=     `Prenom: ${element.prenom}<br> Nom: ${element.nom}<br>taille: ${element.taille}<br>Poids: ${element.poids}kg <br> <br>`;

// });




























































































































// class Ligne{
//     /*Nous n'avons pas besoin de préciser "function" devant notre constructeur
//      *et nos autres méthodes classe*/
//     constructor(nom, longueur){
//         this.nom = nom;
//         this.longueur = longueur;
//     }
    
//     taille(){document.getElementById('p1').innerHTML +=
//         'Longueur de  ' + this.nom + ' : ' + this.longueur + '<br>'};
// }

// let geo1 = new Ligne('geo1', 10);
// let geo2 = new Ligne('geo2', 5);
// geo1.taille();
// geo2.taille();





// let table=[]
// console.log(table);
// let a=   prompt('Saisissez votre Prenom');
// console.log(typeof(a));

// // typeof 2  != typeof '2' 
// while(typeof  a === ""){
//     alert('saisissez un prenom svp');
//     a= prompt('Saisissez votre Prenom');
// }
// let b= prompt('Saisissez votre NOM');
// while(typeof  b === ""){
//     alert('saisissez un prenom svp');
//     b= prompt('Saisissez votre NOM');
// }
// let c=prompt('Saisissez votre Taille');
// while(isNaN(c) || c === "" ||c > 300){
//     if(c > 300){
//         alert('une taille superieur n\'est pas adequat ');
//         c=prompt('Saisissez votre Taille'); 
//     }else{
//     alert('saisissez un chiffre svp');
//     c=prompt('Saisissez votre Taille');}
// }
// let d=Number (prompt('Saisissez votre poids'));
// while(isNaN(d) || d === ""){
//     alert('saisissez un chiffre');
//      d=Number (prompt('Saisissez votre poids'));
// }

// class TruyByMe{
//     /*Nous n'avons pas besoin de préciser "function" devant notre constructeur
//      *et nos autres méthodes classe*/
//     constructor(prenom,nom, taille,poids){
//         this.prenom=prenom,
//         this.nom = nom;
//         this.taille = taille,
//         this.poids=poids;
//     }
    
//     person(){document.getElementById('p2').innerHTML +=
//     `Prenom: ${this.prenom}<br> Nom: ${this.nom}<br>taille: ${this.taille}<br>Poids: ${this.poids}kg <br> <br>`;
//     // 'Prenom:  ' + this.nom + '<br>' + 'Nom:  ' + this.nom + '<br>'+'Taille:  ' + this.taille +'cm' + '<br>'+'Poids:  ' + this.poids + '<br>'
// }
// }

// // let geo3 = new TruyByMe('Makhan', "Diakho",195,86);
// // geo3.person();
// // console.log(geo3);

// let geo4 = new TruyByMe(a,b,c,d);
// // geo4.person();
// console.log(geo4);

// function inside( geo) {
//     table.push(geo)
//    const recuperer= JSON.parse(localStorage.getItem("element")) || [];
//    console.log(recuperer);

//     localStorage.setItem("element", JSON.stringify(table));
// }
// inside(geo4)
// console.log(table);



