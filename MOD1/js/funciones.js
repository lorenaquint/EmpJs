'use strict'
/*=============================================
=            Funciones sin parametros           =
=============================================

//Declaramos la función, debemos darle un nombre
 var varglobal = 25;
 console.log("varglobal inicial", varglobal);

function saludo(){
	//tarea de la función
	console.log("hola");

}

//Ejecutar la función

saludo();
*/
/*=============================================
=            Funciones con parametros           =
=============================================

function operacion(num1,num2){
	var res = num1+num2;
	varglobal = res;
	console.log("global dentro de la función", varglobal);
	console.log("res", res);
}

operacion(5,8);
operacion(10,5);

*/

/*=============================================
=            Funciones de retorno sin  parametros           =

=============================================

function retorno1(){
	var numero = 5;
	return numero;
}

console.log(retorno1());
*/
/*=============================================
=            Funciones de retorno con  parametros           =

=============================================



function retorno2(num1,num2){
	var res = num1/num2;

	return res;
}

console.log(retorno2(2,5));

function retorno3(numero)
{
	return numero;
}

console.log(retorno3(false));
*/
/*=============================================
=   Funciones con parametros opcionales           =

=============================================

function operaciones(num1,num2,activo = false){
	
 if(!activo)
 {
	console.log("Suma: "+(num1+num2));
	console.log("Resta: "+(num1-num2));
	console.log("División: "+(num1/num2));
	console.log("Producto: "+(num1*num2));
	console.log("Activo: "+activo);
	console.log("**************************");

}
else{
	document.write("Suma: "+(num1+num2)+"</br>");
	document.write("Resta: "+(num1-num2)+"</br>");
	document.write("División: "+(num1/num2)+"</br>");
	document.write("Producto: "+(num1*num2)+"</br>");
	document.write("Activo: "+activo+"</br>");
	document.write("**************************");

}
}

operaciones(2,3);
operaciones(3,5,true);

*/

/*=============================================
=   Funciones dentro de otras         =

=============================================

function porHtml(num1,num2,activo){
	document.write("Suma: "+(num1+num2)+"</br>");
	document.write("Resta: "+(num1-num2)+"</br>");
	document.write("División: "+(num1/num2)+"</br>");
	document.write("Producto: "+(num1*num2)+"</br>");
	document.write("Activo: "+activo+"</br>");
	document.write("**************************");
}
function porConsola(num1,num2,activo){
	console.log("Suma: "+(num1+num2));
	console.log("Resta: "+(num1-num2));
	console.log("División: "+(num1/num2));
	console.log("Producto: "+(num1*num2));
	console.log("Activo: "+activo);
	console.log("**************************");
}
function operaciones(num1,num2,activo = false){
	
 if(!activo)
 {
	porConsola(num1,num2,activo);

 }
else{
	
    porHtml(num1,num2,activo);
}

}
operaciones(3,3);
operaciones(4,4,true);
*/

/*=============================================
=   Funciones con parametros REST ySpread           =

=============================================
/* Mete todos los valores dentro de un array esto es rest*/
 


function listarFrutas(fruta1,fruta2,...restFrutas){
	console.log("fruta1", fruta1);
	console.log("fruta2", fruta2);
	console.log("restFrutas", restFrutas);	

}
listarFrutas("Naranja","Manzana","Sandia","Pera","Durazno","Coco");

/* Párametros tipo Spread*/

function listarFrutas2(fruta1,fruta2,...restFrutas){
	console.log("fruta1", fruta1);
	console.log("fruta2", fruta2);
	console.log("restFrutas", restFrutas);
}
var frutas = ["Melón","Uva","kiwi"];
listarFrutas2(...frutas,"Naranja","Manzana","Sandia","Pera","Durazno","Coco");

/*=============================================
=   Funciones anónimas y callbacks           =

=============================================
 /* Funciones normales
function sumar(num1, num2)
{
	var res = num1 + num2;
	return res;
}

var resultado = sumar(2,5);
console.log("resultado de sumar con la función sumar", resultado);
/* Funciones anónimas
var resultado = function(num1,num2){
	var res = num1 + num2;
	return res;
}*/
/* Funciones lamda
console.log("resultado de sumar con la función anónima", resultado(10,20));
var resultado = (num1,num2) => {
	var res = num1+num2;
	return res;

}
console.log("resultado de sumar con la función lamda", resultado(90,30));
*/
//Función anónima es la que no tiene nombre
/*
var pelicula = function(pelicula){
	console.log("La pelicula es: "+pelicula);
}

pelicula("X-MEN");

function adicion(num1,num2,suma,prod,resta){
	console.log("num1", num1);
    console.log("num2", num2);
	var res = num1+num2;
	suma(res);
	prod(res);
	resta(num1,num2);
	
}

adicion(5,7,function(total){
            console.log("La suma es: "+total);
            },function(total){
            console.log("El doble de: "+total+" es "+total*2);
            },function(n1,n2){
            console.log("La resta de: "+n1+" - "+n2+" = "+(n1-n2))
            });

*/
/*=============================================
=   Funciones flecha           =

=============================================

function adicion(num1,num2,suma,prod,resta){
	console.log("num1", num1);
    console.log("num2", num2);
	var res = num1+num2;
	suma(res);
	prod(res);
	resta(num1,num2);
	
}

adicion(8,5,total=>{
            console.log("La suma es: "+total);
            },
            total=>{
            console.log("El doble de: "+total+" es "+total*2);
            },
            (n1,n2)=>{
            console.log("La resta de: "+n1+" - "+n2+" = "+(n1-n2))
            });
*/
/*=============================================
=   Ambito de una variable           =

=============================================
var texto = "Esto es ambito de una variable global";
var texto2 = "Terminando funciones";


function iniciar(txt){
	var texto3 ="Variable definida dentro de la función";
	console.log("texto", texto);
    console.log("Llamando a texto2 desde la función", texto2);
    console.log("texto3", texto3);
}

//iniciar("Ambito de una varialbe");
iniciar(texto);
console.log("texto3", texto3);


*/



