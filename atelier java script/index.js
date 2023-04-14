function validateform(){
    var prenom = document.getElementById("prenom").value;
    var nom = document.getElementById("nom").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var telephone = document.getElementById("telephone").value;
    var moyenne = document.getElementById("moyenne").value;
    
    if(prenom == ""){
        alert("Prenom is required");
        return false;
    }
    if(nom == ""){
        alert("Nom is required");
        return false;
    }

    if(email == ""){
        alert("Email is required");
        return false;
    }
    if(age == ""){
        alert("Age is required");
        return false;
    }

    if(age < 1){
        alert("Age must not be zero or less than zero")
        return false;
    }
    if(telephone == ""){
        alert("Telephone is require d");
        return false;
    }
    if(moyenne == ""){
        alert("Moyenne is required");
        return false;
    }
    else if (!email.includes("@")){
        alert("Invalid email address")
        return false;
    }
    return true;
}
function showData(){
    var peopleList;
    if(localStorage.getItem("peopleList") == null){
        peopleList = [];
    }
    else{
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }

    var html ="";
    peopleList.forEach((element, index)=>{
        html += "<tr>";
        html += `<td>  ${element.prenom}  </td>`;
        html += `<td> ${element.nom}  </td>`;
        html += `<td> ${element.email}  </td>`;
        html += `<td>  ${element.age}  </td>`;
        html += `<td>  ${element.telephone}  </td>`;
        html += `<td>  ${element.moyenne}  </td>`;
        html += 
        `<td><button type="submit" onclick="deleteData(${index})" class="btn btn-danger">supprimer</button>
        <button type="submit" onclick="updatedata(${index})" class="btn btn-warning">edit</button></td>`
        html +=`</tr>`;
    });

   document.querySelector("#crudTable tbody").innerHTML = html; 
}

document.onload = showData();

function AddData(){
    if(validateform() == true)
        var prenom = document.getElementById("prenom").value;
        var nom = document.getElementById("nom").value;
        var email = document.getElementById("email").value;
        var age = document.getElementById("age").value;
        var telephone = document.getElementById("telephone").value;
        var moyenne = document.getElementById("moyenne").value;

        var peopleList;
        if(localStorage.getItem("peoplelist") ==null){
            peopleList = [];
        } else{
            peopleList = JSON.parse(localStorage.getItem("peoplelist"));
        }
    peopleList.push({
        prenom : prenom,
        nom : nom,
        email : email,
        age : age,
        telephone : telephone,
        moyenne : moyenne,
    });
    localStorage.setItem("peopleList", JSON.stringify(peopleList));
    showData();
    document.getElementById("prenom").value = "";
    document.getElementById("nom").value = "";
    document.getElementById("email").value = "";
    document.getElementById("age").value = "";
    document.getElementById("telephone").value = "";
    document.getElementById("moyenne").value = "";
}
function deleteData(index){
    var peopleList;
    if (localStorage.getItem("peopleList") == null){
        peopleList = [];

    } else {
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }
    peopleList.splice(index,1);
    localStorage.setItem("peopleList", JSON.stringify(peopleList));
    showData();
    
}
function updatedata(index){
    document.getElementById("submit").style.display = "none";
    document.getElementById("Update").style.display = "block"
    var peopleList;
    if (localStorage.getItem("peopleList") == null){
        peopleList = [];

    } else {
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }
    document.getElementById("prenom").value = peopleList[index].prenom;
    document.getElementById("nom").value = peopleList[index].nom;
    document.getElementById("email").value = peopleList[index].email;
    document.getElementById("age").value = peopleList[index].age;
    document.getElementById("telephone").value = peopleList[index].telephone;
    document.getElementById("moyenne").value = peopleList[index].moyenne;
    document.querySelector("#Update").onclick= function (){
        if(validateform() == true){
            peopleList[index].prenom= document.getElementById("prenom").value;
            peopleList[index].nom= document.getElementById("nom").value;
            peopleList[index].email=  document.getElementById("email").value;
            peopleList[index].age=  document.getElementById("age").value;
            peopleList[index].telephone= document.getElementById("telephone").value;
            peopleList[index].moyenne= document.getElementById("moyenne").value;

            localStorage.setItem("peopleList", JSON.stringify(peopleList));
            showData();
            document.getElementById("prenom").value = "";
            document.getElementById("nom").value = "";
            document.getElementById("email").value = "";
            document.getElementById("age").value = "";
            document.getElementById("telephone").value = "";
            document.getElementById("moyenne").value = "";

            document.getElementById("submit").style.display = "block";
            document.getElementById("Update").style.display = "none"
        }
    }
}










   