let button = document.getElementById("button");
let image = document.getElementById("image");
let pokenumber = document.getElementById("number");
let pokename = document.getElementById("name");





const changePokemon= async () =>{
    let randomNumber= Math.ceil( Math.random() * 150) + 1;
    let requestString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;
    let data = await fetch(requestString)
    console.log(data);
    let response = await data.json ();
    console.log(response);
console.log(response.sprites.front_default);
    let tableData = "";
    response.abilities.map((element) =>{
        tableData = "";
        tableData +=` <tr>
        <td>${element.ability.name}</td>
        <td>${response.id}</td>
        <td>${element.ability.url}</td>
        <td><img src = "${response.sprites.front_default}"></td>
        
      </tr>`;
    });
    document.getElementById("table_body").
    innerHTML+= tableData;

}
button.addEventListener("click", changePokemon);



















// fetch("https://fakestoreapi.com/products").then((data) => {
//     return data.json();
// }).then((objectData) =>{
//     let tableData = "";
//     objectData.map((values) =>{
//         tableData +=` <tr>
//         <td>${values.title}</td>
//         <td>${values.description}</td>
//         <td>${values.price}</td>
//         <td><img src = "${values.image}"</td>
//       </tr>`;
//     });
//     document.getElementById("table_body").
//     innerHTML= tableData;

// })









// const changePokemon= async () =>{
//     let randomNumber= Math.ceil( Math.random() * 150) + 1;
//     let requestString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;
//     let data = await fetch(requestString)
//     console.log(data);
//     let response = await data.json ();
//     console.log(response);
//    image.src= response.sprites.front_default;
//     pokename.textContent=response.name;
//     pokenumber.textContent=response.id;
   

// }