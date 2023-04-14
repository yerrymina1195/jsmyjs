let tab1=[];
let tab2=[];
let info= alert('vous allez saisir des nombres positifs et negatifs qui vont être mis dans deux tableaux TAB1 et TAB2')
let ask=Number(prompt('combien de nombre voulez vous saisir pour le tableau 1'));

for (let b = 0; b < ask; b++) {
    let put1= Number(prompt(`ecrivez le nombre n°${b+1}`));

    tab1.push(put1)

}
console.log(`le tableau tab1 est ${tab1}`);
console.log(tab1)

let ask2=Number(prompt('combien de nombre voulez vous saisir pour le tableau 2'));

for (let c = 0; c < ask2; c++) {
    let put2= Number(prompt(`ecrivez le nombre n°${c+1}`));

    tab2.push(put2)
    
    
}
console.log(`le tableau tab2 est ${tab2}`);
console.log(tab2)



tab3 = tab1.filter((n)=> n >= 0)
console.log(`le tableau tab3 est ${tab3}`);
console.log(tab3);
document.write(`VOICI Les nombres du tableau tab3 constitué que de nombre positive<br><br><br>${tab3}<br><br>`)


tab2.fill(0)
console.log(`le tableau tab2 avec n=0 est: ${tab2}`);
console.log(tab2);
document.write(`VOICI Lorsque les nombres du tab2 ont été remplacé par 0<br><br><br>${tab2}`)





let info2= alert('ecrivez vos nombres')
let user=[]
let ask3=Number(prompt('combien de nombre voulez vous saisir pour votre tableau'));
for (let d = 0; d < ask3; d++) {
    let put3= Number(prompt(`ecrivez le nombre n°${d+1}`));
    
    user.push(put3)
    
    
}
console.log(user);

function small(montableau) {
    
    for (let i = 1; i < montableau.length; i++) {
        let smallest = montableau[i];
        let j = i - 1;
        while (j >= 0 && montableau[j] > smallest) {
            montableau[j + 1] = montableau[j];
            j--;
      }
      montableau[j + 1] = smallest;
    }
    return montableau;
  }
  
  user=small(user)
  
  console.log(user);
  
  
  // function triage(tableau) {
      //     for (let i = 1; i < tableau.length; i++) {
          //       let current = tableau[i];
          //       let j = i - 1;
          //       while (j >= 0 && tableau[j] > current) {
              //         tableau[j + 1] = tableau[j];
              //         j--;
              //       }
              //       tableau[j + 1] = current;
              //     }
              //     return tableau;
              //   }
              //   triage(user)
              //   console.log( triage(user));
              
              
              

              
              
              
              
              
              
              

              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              




              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              





              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              

              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              // const tbody = document.getElementById("tableBody");
              // const tite= document.getElementById("titre");
              // tite.collspan=tab3.length;
              // console.log(tite.id);
              
              // tab3.forEach((element) => {
              //   tbody.innerHTML += `<td >${element}</td>`;
              // });






































// let tab=[4, 6, 9, 10]
// tab.splice(1,1)
// console.log(tab);


// let niaba=[]

// let numbers = [5, 8, 9, 2];
// function small(numbers) {
//     // let current = numbers[i];
//     // let j = i - 1;
//         for (let i = 1; i < numbers.length; i++) {
//         let smallest = numbers[i];
//             let j = i - 1;
//       while (j >= 0 && numbers[j] > smallest) {
//         numbers[j + 1] = numbers[j];
//         j--;
//       }
//          numbers[j + 1] = smallest;
//     }
//     return numbers;
//   }
  
//   console.log(small(numbers)); 



//   let niaba=[]

// let numbers = [5, 8, 7, 15];
// function small(numbers) {
//     let smallest = numbers[0];
//     for (let i =1 ; i < numbers.length; i++) {
//       if (numbers[i] < smallest) {
//         smallest = numbers[i];
//         niaba.unshift(smallest);
//         numbers.splice(i,i)
//         i= 0
//         console.log(i);
//       }
//     //   console.log(numbers.length);
//     else if(numbers[i] > smallest){
//         niaba.push(numbers[i])
//         numbers.splice(i,i)
//         i=0
//     }else{}
// }
// // niaba.push(numbers[0])
// return niaba;
// }
  
//   console.log(small(numbers));









// let niaba=[]

// let numbers = [50, 18, 9, 2];
// function small(numbers) {
//     let smallest = numbers[0];
//     for (let i =numbers.length ; i > 1; i--) {
//       if (numbers[i] < smallest) {
//         smallest = numbers[i];
//         niaba.push(smallest);
//         numbers.splice(i,i)
        
        
//       }
//       console.log(numbers.length);
//     }
//     return niaba;
//   }
  
//   console.log(small(numbers))
  