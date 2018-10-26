'use strict'
//Focus

//window.onload = function(){

    let inpName = document.querySelector("#inpName");
inpName.onfocus = function(){
   console.log("[onfocus] Tengo el foco");
};

//Blur

inpName.onblur = function(){
    console.log("[ onblur] Estas fuera del input");
}

//KeyDown

inpName.onkeydown = function(event){
    console.log("[onkeydown]  Presionando una tecla "+String.fromCharCode(event.keyCode));
}

//KeyPress

inpName.onkeypress = function(event){
    console.log("[onkeypress] Tecla presionada "+String.fromCharCode(event.keyCode))
}

//KeyUp

inpName.onkeyup = function(event){
    console.log("[onkeyup] Tecla soltada "+String.fromCharCode(event.keyCode));
}

//}

