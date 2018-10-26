'use strict'

//Eventos con el mouse

var btnColor = document.querySelector("#btnColor");
var btnAdd = document.querySelector("#btnAdd");
var btnAddAn = document.querySelector("#btnAddAn");
var btnOn = document.querySelector("#btnOn");
var btnOnAn = document.querySelector("#btnOnAn");
let caja = document.querySelector(".cajReg");
let lamp = document.querySelector("#lamp");
let inpNum = document.querySelector("#inpNum");
// Desde una función

 


function changeColor(){
    let color = btnColor.style.background ;
    if(color=="green")
    {
        btnColor.style.background = "red";
        
    }
    else
    {
        btnColor.style.background = "green";
    }
    btnColor.style.padding = "25px";
    btnColor.style.border = "2px solid #CCC";
  
}

//Utilizando AddEventListener
btnAdd.addEventListener("click",changeBox);
function changeBox(){
    
    caja.style.width = "300px";
    caja.style.height = "300px";
    caja.style.background = "Blue";
}

//Utilizando AddEventListener con función anónima

btnAddAn.addEventListener("click",function (){
    
    caja.style.width = "80px";
    caja.style.height = "80px";
    caja.style.background = "yellow";
});

//Utilizando Onclick desde js


btnOn.onclick = changeSizeBox;

function changeSizeBox()
{
    caja.style.width = "500px";
    caja.style.height = "500px";
    caja.style.background = "purple";
}


//Utilizando Onclick desde js con función

btnOnAn.onclick = function(){
    caja.style.width = "80px";
    caja.style.height = "80px";
    caja.style.background = "black";
    
    
}


//Mouse over


btnOnAn.onmouseover = function(){
    btnOnAn.style.background = "#ED235D";
    btnOnAn.style.color = "#FFF";
    btnOnAn.style.width = "600px";
    btnOnAn.style.transition = "all 5000ms ease";
	btnOnAn.style.transitionProperty = "color,background-color, width";
    btnOnAn.style.transitionDuration= "2s, 3s,2s";
    btnOnAn.style.transitionTimingFunction="linear,ease-out,ease-out";

}


/*


document.querySelector("#btnAnimar").onmouseover = function(){
    //btnOn.style.background = "orange";
   
    /*btnAnimar.style.color = "#FFF";
    btnAnimar.style.backgroundColor= "#ED235D";
    btnAnimar.style.width= "650px";
    btnAnimar.style.transition= "all 5s ease-out";   
     */

     /*
    this.classList.add("animar");
    
}
*/
/*
document.querySelector("#btnAnimar").onmouseout = function(){
    //btnOn.style.background = "black"
    /*btnAnimar.style.color = "#FFF";
    btnAnimar.style.backgroundColor= "#000";
    btnAnimar.style.width= "300px";
    btnAnimar.style.transition= "all 5s ease-out"; 
    */
   /*
   this.classList.remove("animar"); 
}
*/
//Prender bonbillo



lamp.onclick = function(){
    
    lamp.src = "img/lamp_on.jpg";

}
lamp.ondblclick = function(){
    lamp.src = "img/lamp_off.jpg"
}


//Calcular el cuadrado

inpNum.onclick = function(){
    inpNum.value = "";
}

btnC.onclick = function(){
    inpNum.value = inpNum.value * inpNum.value;
}


//Calculadora

let num, acc = 0, op = "";
          
function suma()   { acc = num.value;  op = "+"; }
function resta() { acc = num.value;  op = "-"; }
          
function calcular() {
    if (op === "+") {num.value = (+acc + +num.value)}
    if (op === "-") {num.value = (+acc - +num.value)}
}
          
function inic ()   {num = document.getElementById("num");}
function vaciar () {num.value = "";}  

let btnAnimar = document.querySelector("#btnAnimar");
let btnAnimar2 = document.querySelector("#btnAnimar2");
btnAnimar.onmouseover = myFunction;
btnAnimar.onmouseout = myFunction2;
btnAnimar2.onmouseout = myFunction3;
function myFunction() {
    
    btnAnimar.classList.add("animar");
   
}
function myFunction2() {
    
    btnAnimar.classList.remove("animar"); 
}
function myFunction3() {
    
    btnAnimar2.classList.toggle("animar2");
   
}

let btnCambiarTexto = document.querySelector("#btnCambiarTexto");
btnCambiarTexto.onmouseover = function(){
    btnCambiarTexto.innerHTML = "1";
};

btnCambiarTexto.onmouseout = function(){
    btnCambiarTexto.innerHTML = "*";
}





 

