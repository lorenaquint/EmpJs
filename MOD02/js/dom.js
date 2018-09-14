'use strict'

/*==================================================
=            CONSEGUIR ELEMENTOS POR SU id          =
==================================================*


//var caja = document.getElementById("caja1");
var caja = document.querySelector("#caja1");
function cambiarColor(color)
{
	caja.style.background = color;
}
caja.innerHTML = "Partes del DOM";
caja.style.background = "red";
caja.style.padding ="20px";
caja.style.color = "white";
cambiarColor("cyan");
caja.className="cjaPal cjaPal2";
console.log("caja", caja);

*/

/*==================================================
=           CONSEGUIR DOCUMENTOS POR SU ETIQUETA       =
==================================================*/

var cajas = document.getElementsByTagName('div');
console.log("cajas", cajas);
cajas[2].style.background= "green";
var contenidoCaja = cajas[2].textContent;
console.log("contenidoCaja", contenidoCaja);
var hr = document.createElement("hr");
var seccion = document.querySelector(".main");

for(let i in cajas){

	//console.log("i", i);
    if (typeof cajas[i].textContent == "string") {
			var parrafo = document.createElement("p");
			var texto = document.createTextNode(cajas[i].textContent);
			parrafo.append(texto);
			seccion.append(parrafo);
			
   }

};

seccion.append(hr);

