

var colores = ["red","orange","cyan","magenta"]
var cajas = document.querySelectorAll(".cajas")
for (var i = 0; i < cajas.length; i++) {
	cajas[i].style.width = "50px";
	cajas[i].style.marginLeft = "10px";
	cajas[i].style.height = "50px";
	cajas[i].style.background = colores[i];
	//cajas[i].style.float = "left";
	cajas[i].style.display = "inline-block";
}

console.log("cajas", cajas);
function cambiarColor(){
	let cuadro1 = document.querySelector("#cuadro1")
	cuadro1.style.background = "cyan";
}

var btnSize = document.querySelector("#btnSize");
btnSize.addEventListener("click",moverCaja);
function moverCaja(){
	let cuadro2 = document.querySelector("#cuadro2")
	cuadro2.style.width ="300px";
	cuadro2.style.transition = "1s width ease ";
	
}

document.getElementById("btnToggle").onclick = function(){
	
    
    let cuadro3 = document.querySelector("#cuadro3")
    cuadro3.classList.toggle("tamFin")

	
}

