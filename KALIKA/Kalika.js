

/*-----------construire une fonction appelée on Update qui va mettre un tableau dans le localstorage
 et le recuperer par un une variable constanteappelé tableauinstorage-------------*/

const tableauInStorage = JSON.parse(localStorage.getItem("tableauX")) || [];
console.log(tableauInStorage);
function onUpdate() {
  localStorage.setItem("tableauX", JSON.stringify(tableauInStorage));
  document.location.reload()
}



/*---------------filtré les elements archivés et nonarchivés--------------*/
const tableauNonArchivé = tableauInStorage.filter(
  (element) => element.isblocked === false
);
const tableauArchivé = tableauInStorage.filter(
  (element) => element.isblocked === true
);
/* -----------fin  filtré les elements archivés et nonarchivés----------    */









/*-------fonction ajouter qui va prendre les valeurs dans le input et le mettre dans l'objet studiant 
 et ensuite le pushé dans tableauinstorage---------*/
function ajouter() {
  let a =document.getElementById("prenom").value;
let b =document.getElementById("nom").value;
let c=document.getElementById("email").value;
let d=document.getElementById("Telephone").value;
let e=document.getElementById("moyenne").value;
let f=document.getElementById("age").value;

if (a === "" || b === "" ||c === ""||d=== ""||e=== ""||f=== "") {
  return  alert("veuillez saisir svp");
}else{
  // alert('succes')
}
  const studiant = {
    firstName:a ,
    nom:b ,
    mail:c ,
    tel: d,
    moy:e,
    age:f,
    isblocked:false,
    id:new Date().getTime()
  };

  tableauInStorage.push(studiant);
  onUpdate();
  // afficher(tableauInStorage)
  // viderFormulaire()
}
/*------------fin du ajout--------*/


/*-----fonction affichage qui prend 2 valeurs le tableau qui a les élements non archivés
et le tableau qui a les éléments archivés--------------*/
function afficher (tableau){

  const tbody = document.getElementById("tableBody");
  tbody.innerHTML =""
  tableau.forEach((element,index) => {
  
    tbody.innerHTML += `<tr>
        <td>${element.firstName}</td>
        <td>${element.nom}</td>
        <td>${element.mail}</td>
        <td>${element.tel}</td>
        <td>${element.moy}</td>
        <td>${element.age}</td>
        <td><button type="submit" ${element.isblocked === false ? `class="btn btn-success mb-3" onclick="edit(${index})" data-bs-toggle="modal" data-bs-target="#exampleModal"` : `class="btn btn-secondary mb-3" `}>Modifier</button></td>
        <td><button type="submit" ${element.isblocked === false ? `class="btn btn-danger mb-3" onclick="supprimer(${index})"` : `class="btn btn-secondary mb-3"`} >supprimer</button></td>
        <td><button type="submit" id="archis${index}" onclick="bloquage(${element.id})" class="btn btn-warning mb-3">${element.isblocked === false ? "bloquer" : "Debloquer"}</button></td>

      </tr> `;
  });


}
afficher(tableauInStorage);
/*-----------fin du fonction affichage---------------*/
// Rechercher une personne dans le tableau 
const input = document.getElementById("search")
input.addEventListener("keyup", (e) => {
 
  const valeur = e.target.value
  const result = tableauInStorage.filter((item) => (item.firstName.toLowerCase().includes(valeur.toLowerCase())) || (item.nom.toLowerCase().includes(valeur.toLowerCase())) || (item.mail.toLowerCase().includes(valeur.toLowerCase())) || (item.tel.toLowerCase().includes(valeur.toLowerCase())))
  console.log(result);
  afficher(result)
}) 





var agess = Math.max(...tableauInStorage.map(item => item.age));
var agemoins= Math.min(...tableauInStorage.map(item => item.age));
console.log(`age le plus grand est ${agess}`);
console.log(`age le plus petit est ${agemoins}`);



/*---------fonction supprimer pour supprimer les élements dans le tableauinstorage ------------*/

function supprimer(id) {
  tableauInStorage.splice(id, 1);
  onUpdate();
}
/*  fin du  fonction supprimer pour supprimer les élements    */


  /* ---------------fonction pour Modifier l'élément dans le tableau----------------- */

function edit(index) {
  document.getElementById("prenom").value = tableauInStorage[index].firstName;
  document.getElementById("nom").value = tableauInStorage[index].nom;
  document.getElementById("email").value = tableauInStorage[index].mail;
  document.getElementById("Telephone").value = tableauInStorage[index].tel;
  document.getElementById("moyenne").value = tableauInStorage[index].moy;
  document.getElementById("age").value = tableauInStorage[index].age;

  // Modifier l'élément dans le tableau
  let ajouterBouton = document.getElementById("adding");
  ajouterBouton.innerHTML = "Enregistrer";
  ajouterBouton.onclick = function() {
    tableauInStorage[index].firstName = document.getElementById("prenom").value;
    tableauInStorage[index].nom = document.getElementById("nom").value;
    tableauInStorage[index].mail = document.getElementById("email").value;
    tableauInStorage[index]. tel = document.getElementById("Telephone").value;
    tableauInStorage[index]. moy = document.getElementById("moyenne").value;
    tableauInStorage[index]. age = document.getElementById("age").value;
     onUpdate();


      // redonner ajouter comme text au bouton et aussi la fonction ajouter
      ajouterBouton.innerHTML = "Ajouter";
      ajouterBouton.onclick = ajouter;
      
    };
}

function bloquage(arc){
  let state= tableauInStorage.find(e => e.id === arc);
console.log(state);

if(state.isblocked === false){
  const index = tableauInStorage.findIndex(el => el.id === arc);

  tableauInStorage[index].isblocked = true;

}else{
  const index = tableauInStorage.findIndex(el => el.id === arc);

  tableauInStorage[index].isblocked = false;

}

onUpdate();
// console.log(chart);
}






/*---------------- pour la pagination-------------------------*/


// Paramètres de pagination
const itemsPerPage = 5;
let currentPage = 1;

// Calculer le nombre total de pages en fonction du nombre total d'éléments et des éléments par page
const totalPages = Math.ceil(tableauInStorage.length / itemsPerPage);
const pageNumbers = []; // Tableau pour stocker les numéros de page

for (let i = 1; i <= totalPages; i++) {
  pageNumbers.push(i);
}

// const paginationContainer = document.querySelector(".pagination");
const prevButton =document.getElementById("previousBtn");
const nextButton = document.getElementById("nextBtn");
const pageNumbersContainer = document.getElementById("page-number");
const totalPagesContainer = document.getElementById("total-pages");

// Afficher le nombre total de pages
totalPagesContainer.textContent = `of ${totalPages}`;

// Afficher les boutons numériques pour chaque page
pageNumbers.forEach(pageNumber => {
  var pageButton = document.createElement("button");
  pageButton.className='btn btn-primary'
  pageButton.textContent = pageNumber;
  pageNumbersContainer.appendChild(pageButton);
});






// Définir une fonction pour afficher la page actuelle en fonction des éléments par page et de la page actuelle
function showPage(tableau, currentPage, itemsPerPage) {
  let startIndex = (currentPage - 1) * itemsPerPage;
  let endIndex = startIndex + itemsPerPage;
  let pageElements = tableau.slice(startIndex, endIndex);
  afficher(pageElements);
}

// Afficher la première page par défaut
showPage(tableauInStorage, currentPage, itemsPerPage);

// Ajouter la logique pour les boutons Précédent et Suivant
prevButton.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    showPage(tableauInStorage, currentPage, itemsPerPage);
  }
  updatePagination();
});

nextButton.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    showPage(tableauInStorage, currentPage, itemsPerPage);
  }
  updatePagination();
});

// Mettre à jour la pagination en fonction de la page actuelle
function updatePagination() {
  pageNumbers.forEach(pageNumber => {
    const pageButton = pageNumbersContainer.querySelector(
      `button:nth-child(${pageNumber})`
    );
    if (pageNumber === currentPage) {
      pageButton.classList.add("active");
      
    } else {
      pageButton.classList.remove("active");
    }
  });
}





/*----------------fin  pour la pagination-------------------------*/














































// const tableauInStorage = JSON.parse(localStorage.getItem("tableauX")) || [];
// console.log(tableauInStorage);
// function onUpdate() {
//   localStorage.setItem("tableauX", JSON.stringify(tableauInStorage));
//   document.location.reload();
// }
// const chart = tableauInStorage.filter(
//   (element) => element.isArchived === false
// );

// function ajouter() {
//   let a = document.getElementById("prenom").value;
//   let b = document.getElementById("nom").value;
//   let c = document.getElementById("email").value;
//   let d = document.getElementById("Telephone").value;

//   if (a === "" || b === "" || c === "" || d === "") {
//     return alert("veuillez saisir svp");
//   } else {
//     alert("succes");
//   }
//   const studiant = {
//     firstName: a,
//     nom: b,
//     mail: c,
//     tel: d,
//     isArchived: false,
//     id: new Date(),
//   };

//   tableauInStorage.push(studiant);
//   onUpdate();
//   //afficher(chart);
//   //viderFormulaire();
// }

// function afficher(tableau) {
//   const tbody = document.getElementById("tableBody");
//   tbody.innerHTML = "";
//   tableau.forEach((element, index) => {
//     tbody.innerHTML += `<tr>
//         <td>${element.firstName}</td>
//         <td>${element.nom}</td>
//         <td>${element.mail}</td>
//         <td>${element.tel}</td>
//         <td><button type="submit"onclick="edit(${index})" class="btn btn-success mb-3">Modifier</button></td>
//         <td><button type="submit" onclick="supprimer(${index})" class="btn btn-danger mb-3">supprimer</button></td>
//         <td><button type="button" id="archis${element.id}" onclick="archivage(${index})" class="btn btn-warning mb-3">${
//       element.isArchived === false ? "Archiver" : "Desarchiver"
//     }</button></td>
//   </tr> `;
//   });
// }
// // afficher(tableauInStorage)
// afficher(chart);

// function viderFormulaire() {
//   document.getElementById("prenom").value = "";
//   document.getElementById("nom").value = "";
//   document.getElementById("email").value = "";
//   document.getElementById("Telephone").value = "";
// }
// function supprimer(id) {
//   tableauInStorage.splice(id, 1);
//   onUpdate();
//   //afficher(tableauInStorage);
// }
// function edit(index) {
//   document.getElementById("prenom").value = tableauInStorage[index].firstName;
//   document.getElementById("nom").value = tableauInStorage[index].nom;
//   document.getElementById("email").value = tableauInStorage[index].mail;
//   document.getElementById("Telephone").value = tableauInStorage[index].tel;

//   // Modifier l'élément dans le tableau
//   let ajouterBouton = document.getElementById("adding");
//   ajouterBouton.innerHTML = "Enregistrer";
//   ajouterBouton.onclick = function () {
//     tableauInStorage[index].firstName = document.getElementById("prenom").value;
//     tableauInStorage[index].nom = document.getElementById("nom").value;
//     tableauInStorage[index].mail = document.getElementById("email").value;
//     tableauInStorage[index].tel = document.getElementById("Telephone").value;
//     onUpdate();
//     viderFormulaire();
//     ajouterBouton.innerHTML = "Ajouter";
//     ajouterBouton.onclick = ajouter;
//     //afficher(tableauInStorage);
//   };
// }

// function archivage(arc) {
//   console.log(arc);
  
//   if (tableauInStorage[arc].isArchived === false) {
//     tableauInStorage[arc].isArchived = true;
//   } else {
//     tableauInStorage[arc].isArchived = false;
//   }
//   onUpdate();
// }




























// Ajouter des boutons de navigation Précédent / Suivant pour changer de page
// const previousBtn = document.getElementById("previousBtn");
// const nextBtn = document.getElementById("nextBtn");

// previousBtn.addEventListener("click", function() {
//   if (currentPage > 1) {
//     currentPage--;
//     showPage(tableauInStorage, currentPage, itemsPerPage);
//   }
// });

// nextBtn.addEventListener("click", function() {
//   if (currentPage < totalPages) {
//     currentPage++;
//     showPage(tableauInStorage, currentPage, itemsPerPage);
//   }
// });