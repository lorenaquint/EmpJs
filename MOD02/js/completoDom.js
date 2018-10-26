'use strict'


let formRegister = document.querySelector("#formRegister");
var resultado = document.querySelector("#resultado");
resultado.style.display = "none"


formRegister.onsubmit = function(){
    //alert("Esta listo para enviar");
    
    let name = document.querySelector("#name").value;
    let lastName = document.querySelector("#lastName").value;
    let age = parseInt(document.querySelector("#age").value);
    resultado.style.display = "block"
    debugger;
    console.log("name",name);
    console.log("lastName",lastName);
    console.log("age",age);

    console.log(name,lastName,age);

    if(name == null || lastName == null || isNaN(age))
    {
        
         alert("Los campos deben ser validos")
    }
    /*var data_user = [name,lastName,age];
    for (let key in data_user) {
        let paragraph = document.createElement("p");
        paragraph.append(data_user[key]);
        resultado.append(paragraph);
    }
    */
    let pname = document.querySelector("#pname span");
    let plastname = document.querySelector("#plastname span");
    let page = document.querySelector("#page span");

    pname.innerHTML = name;
    plastname.innerHTML = lastName;
    page.innerHTML = age;

    
    
    

}