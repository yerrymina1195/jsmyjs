// let employee = {
//     id: 1001,
//     nom: {
//         firstName: 'John',
//         lastName: 'Doe'
//     }
// };

// let {
//     nom: {
//         firstName,
//         lastName
//     },
//     nom
// } = employee;

// console.log(firstName); // John
// console.log(lastName); // Doe
// console.log(nom); // { firstName: 'John', lastName: 'Doe' }




// // pour mieux comprendre
// let {
//     id:identité,
//     nom: {
//         firstName:prenom,
//         lastName:derniernom
//     },
//     nom:nomcomplet
// } = employee;
// console.log(identité);
// console.log(prenom); // John
// console.log(derniernom); // Doe
// console.log(nomcomplet); // { firstName: 'John', lastName: 'Doe' }




let person = {
    firstName: 'John',
    lastName: 'Doe'
};
let display = ({firstName, lastName}) => console.log(`${firstName} ${lastName}`);


display(person)