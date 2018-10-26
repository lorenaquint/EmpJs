console.log("Estos son las variables");


/*=================================
=            Variables            =
=================================*/



/*=====  End of Variables  ======*/

// Variables Numéricas

var num = 5;
console.log("num", num);

// Variables de texto

var palabras = "palabras";
console.log("palabras", palabras);

// Variables booleanas

var booleana = true;
console.log("booleana", booleana);

// Variables de tipo arreglo

var colores = ["red","cyan",booleana,num]
console.log("colores", colores);

// Variables de tipo Objeto. object: y el valor

var vehiculo = { tipo:"Auto",
				  modelo:2018,
				  usado:true};
console.log("vechiculo", vehiculo);
console.log("modelo",vehiculo.modelo);

/*===========================================================
=            El dom es la estructura de objetos que genera el navegador cuando se carga el documento y se puede alterar mediante javascript para cmbiar dinamicamente los conetnidos y aaspectos de la página            =
===========================================================*/

var caja = document.querySelector(".caja");
caja.style.width = "300px";
caja.style.height = "300px";
caja.style.background = "red";
console.log("caja", caja);
var cajas = document.querySelectorAll(".cajas")

console.log("cajas", cajas);






