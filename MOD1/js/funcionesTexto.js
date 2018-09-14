'use strict'


/*=============================================
=   Métodos para procesar texto           =

=============================================

var num = 5;
var txt1 = "Métodos para procesar texto";
var txt2 = "Utiles en archivos de texto";
var ciudades = ["Madrid","Londres","Lima"];


var dato = num.toString();
console.log("dato",  dato);
console.log("tipo de dato", typeof dato);
console.log(" Convertir a mayus: "+txt1.toUpperCase());
console.log(" Convertir a minus: "+txt1.toLowerCase());
console.log(" Longitud de cadena: "+num.length);
console.log(" Longitud de cadena: "+txt1.length);
console.log("La longitud del arreglo ciudades es: ", ciudades.length);
console.log(" Concatenando txt1 y dato: "+txt1+" "+dato);
console.log(" Utilizando la función concat"+txt1.concat(txt2));

*/


 /*=============================================
 =            Subcadenas                       =
 =============================================*/

var cadena = 'Mi nombre es andres y mi padre se llama andres igual que yo';
var primero = cadena.indexOf('andres');
var ultimo = cadena.lastIndexOf('andres');
console.log('El primer andres se encuentra en la posicion ' + primero + 'el segundo andres se encuentra en la posicion ' + ultimo);

/*=============================================
=   Métodos de búsqueda           =

=============================================*/

var txt1 = "Métodos para procesar texto pero es importante porque es texto";
var txt2 = "Utiles en archivos de texto";
var txt3 = "                           Utiles en archivos de texto               ";

document.write(txt1+"<br>");


document.write(txt2+"<br>");
document.write("<pre>"+txt3+"</pre>");
/* A partir de que posición se encuentra la primara conicidencia de la palabra*/
var busqueda = txt1.indexOf("texto");
console.log("Primera  coincidencia 'texto'", busqueda);
/* A partir de que posición se encuentra la ultima conicidencia de la palabra*/
var busqueda2 = txt1.lastIndexOf("texto");
console.log("ultima  coincidencia 'texto'", busqueda2);
/* Search es lo mismo que indexOf si busca una palabra que no existe aparece -1*/
var busqueda3 = txt1.search("textoo");
console.log("Primera  coincidencia con search 'textoo'", busqueda3);
/* Match devuelve un array de los resultados que aparece*/
var busqueda4 = txt1.match(/texto/gi);
console.log("Primera  coincidencia con match", busqueda4);
/* substr*/
var busqueda5 = txt1.substr(10,20);
console.log("Substring del 10 al 20", busqueda5);
/* seleccionar una letra concreta de un string*/
var busqueda6 = txt1.charAt(2);
console.log("charAt letra concreta 2", busqueda6);
/* busca una palabra y devuelve true o false al inicio del string*/
var busqueda7 = txt1.startsWith("M");
console.log("startsWith empieza por M", busqueda7);
/* busca una palabra y devuelve true o false al fin del string*/
var busqueda7 = txt1.endsWith("to");
console.log("endsWith empieza por to", busqueda7);
/* busca una palabra en un string y devuelve true o false*/
var busqueda8 = txt1.includes("importantes");
console.log("includes 'importantes' ", busqueda8);



/*=============================================
=   Métodos de reemplazo           =

=============================================*/

var txt1 = "Métodos de reemplazo en Javascript";
console.log("txt1", txt1);


var reem = txt1.replace("Javascript","cadenas");
console.log("replace 'Javascript' con 'cadenas'", reem);
/* Separar el string a partir de una posición*/
var reem2 = txt1.slice(7);
console.log("slice a partir de 7", reem2);
/*recortar */
var reem3 = txt1.slice(7,12);
console.log("slice de 7 a 12", reem3);
var busqueda5 = txt1.substr(7,3);
console.log("Substring de 7 a 3", busqueda5);
/*Recorta las palabras y las mete en un array quiero separar por espacios*/
var reem4 = txt1.split(" ");
console.log("split con ' '", reem4);
/*Función para quitar espacios en blaco al inicio y al final */
var reem5 = txt3.trim();
console.log("trim", reem5);
document.write("<pre>"+reem5+"</pre>")

/*=============================
=            Slice            =
=============================*/

var cadena = 'Hola buenos dias';
var subcadena = cadena.slice(0,-2);
console.log(subcadena);

/*=============================================
=   Plantillas de texto          =

=============================================*/
var nombre = prompt("Ingrese nombre");
var apellido = prompt("Ingrese sus apellidos");

var nombresCompletos = `

		<h1>Bienvenido al sistema</h1>
		<h3>Nombre: ${nombre}</h3> 
		<h3>Apellido: ${apellido}</h3> 


`;
document.write(nombresCompletos);