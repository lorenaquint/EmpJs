'use strict'
// window.onload = function(){

function changeSize()
{
    //Largo de la ventana
document.querySelector(".winH").innerHTML = window.innerHeight;
//Ancho de la ventana
var ancho = document.querySelector(".winW");

var h1 = document.querySelector('.h1');
h1.innerHTML = "te estoy cambiando";
ancho.innerHTML = window.innerWidth;

console.log(window.innerHeight);


//Altura de la pantalla
document.querySelector(".scrH").innerHTML = screen.height;
document.querySelector(".scrW").innerHTML = screen.width;


}

changeSize();

//}

//Podemos observar parámetros como  href etc ..
console.log(window.location);
//Redireccionar a una pagina
function RedirectUrl(url){
    window.location.href = url;
}
//Abrir una nueva ventana
function openWindow(url){
    window.open(url);
}
