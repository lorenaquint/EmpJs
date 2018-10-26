

console.log("Estos son las variables");



/*=================================
=            pedir datos por teclado           =
=================================*/

var nombre = prompt("Ingrese su nombre");
console.log("Su nombre es", nombre);
alert(nombre);
document.write(nombre);

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

var nada = null;
console.log("nada", nada);
    



// Tipos de variables

var edad = 28;
var  anio = "1995";
console.log("La concatenación edad y el año son: ",edad + anio);
console.log("La suma edad y el año son: ",edad + Number(anio));

var num1 = 25;
var num2 = 30;
console.log("La suma de los numeros es",num1 + num2);
console.log("La concatenación de los números es ",String(num1) + String(num2));

// Detectar tipos de datos

var edad = 28;
console.log("edad", typeof edad);
var  nombre = "Mariana";
console.log("nombre",  typeof nombre);
var estado = true;
console.log("estado", typeof estado);
var dias = ["Lunes","Martes","Miercoles"];
console.log("dias", typeof dias);
var nada = null;
console.log(typeof nada);


/*=============================================
=            OPERADORES ARITMETICOS        =
=============================================*/

      var a = 1, b = 2, c = 3;
      var resultado = (a + b) / c;
      console.log(resultado);

      resultado = a - b - c;
      console.log(resultado);

      resultado = a * b * c;
      console.log(resultado);

      resultado = a / b / c;
      console.log(resultado);

      resultado = a % b % c;
      console.log(resultado);

      var numero = 1;
      numero ++;
      console.log(numero);

/*===============================================
=            INCREMENTO Y DECREMENTO          =
===============================================*/


      var numero = 10;
      numero *= 5;
      var incremento = 9;
      incremento++
      console.log("incremento", incremento);
      incremento+=20;
      console.log("incremento", incremento);
      console.log(numero);

/*=====================================
=     concatenacion            =
=====================================*/


    var nombre = 'catalina';
    var edad = 23;
    console.log('Usted se llama ' + nombre + ' y tiene ' + edad + ' años ');

    edad += nombre;
    console.log(edad);


/*=============================================
=           Conversion de variables         =
=============================================*/


 // Cuando sumamos un numero con una cadena el numero se convierte en cadena
       var producto = 'camiseta';
       var precio1 = 2500;
       var precio2  = 5000;
       var res1 = producto + precio2;
       console.log(res1);
       console.log(typeof(res1));


      //Cuando sumamos un boolean con una cadena el valor booleano se convierte en cadena
      //
       var casado = true;
       var nombre = 'pablo';
       var res2 = casado + nombre;
       console.log("res2", res2);
       console.log(typeof(res2));

      //Si se suman un número y un valor booleano, el tipo booleano se convierte en un número.

       var ahorros = 10000;
      var bancarrota = false;
      var res3 = bancarrota + ahorros;
      console.log("res3", res3);
      console.log(typeof(res3));

      //parseInt() devuelve un valor entero no no hay ningun numero devuelve NaN
      var numero = '12abc';
      numero = parseInt(numero);
      console.log(numero);
      console.log(typeof(numero));
      console.log(isNaN(numero));

      //parseInt() devuelve un valor entero no no hay ningun numero devuelve NaN
      var numero2 = '1.23abc';
      numero2 = parseFloat(numero2);
      console.log(numero2);
      console.log(typeof(numero2));
      console.log(isNaN(numero2));





/*===========================================================
=            El dom es la estructura de objetos que genera el navegador cuando se carga el documento y se puede alterar mediante javascript para cmbiar dinamicamente los conetnidos y aaspectos de la página            =
===========================================================*/

var caja = document.querySelector(".caja");
caja.style.width = "300px";
caja.style.height = "300px";
caja.style.background = "red";
console.log("caja", caja);
var colores = ["red","orange","cyan","magenta"]
var cajas = document.querySelectorAll(".cajas")
for (var i = 0; i < cajas.length; i++) {
	cajas[i].style.width = "50px";
	cajas[i].style.marginLeft = "10px";
	cajas[i].style.height = "50px";
	cajas[i].style.background = colores[i];
	cajas[i].style.float = "left";
}

console.log("cajas", cajas);


/*===================================================
=            Diferencias entre let y var            =
===================================================*/

var nombre = "Franck";
console.log("nombre", nombre);
var nombre = 18;
console.log("nombre antes del if", nombre);

if (true) {
	var nombre = "Mariana";
	console.log("nombre dentro del if", nombre);
	
}
console.log("nombre después del if", nombre);


var cantidad = 23;
console.log("cantidad antes del if", cantidad);
if (true) {

	let cantidad = 29;
	console.log("cantidad dentro del if", cantidad);
}
console.log("cantidad fuera del if", cantidad);


var edad = 18;
console.log("edad", nombre);

//Constantes

var nombre = "Mariana";
nombre = 4;
console.log(nombre);
const edad1 = 18;
console.log("El nombre es: "+nombre+" y su edd es: "+edad);
//edad1 = 27;
console.log("El nombre es: "+nombre+" y su edd es: "+edad);


//Operadores de comparación

var valor1 = 5;
var valor2 = "5";

if(valor1 == valor2)
{
      console.log(valor1+" y "+valor2+" son iguales en valor");

}
if(valor1 === valor2)
{
      console.log(valor1+" y "+valor2+" son iguales en tipo y en valor "); 
}
else{
      console.log(valor1+" y "+valor2+" no son iguales ni en tipo ni en valor");
}

var result = valor1 == valor2 ? 5:10;
console.log("el resultaod es "+result);








