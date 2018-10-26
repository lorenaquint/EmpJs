/*=============================================
=            Funciones sin parametros           =
=============================================*/

//Declaramos la función, debemos darle un nombre
 var varglobal = 25;
 console.log("varglobal inicial", varglobal);

function saludo(){
	//tarea de la función
	console.log("hola");

}

//Ejecutar la función

saludo();

/*=============================================
=            Funciones con parametros           =
=============================================*/

function operacion(num1,num2){
	var res = num1+num2;
	varglobal = res;
	console.log("global dentro de la función", varglobal);
	console.log("res", res);
}

operacion(5,8);
operacion(10,5);



/*=============================================
=            Funciones de retorno sin  parametros           =

=============================================*/

function retorno1(){
	var numero = 5;
	return numero;
}

console.log(retorno1());

/*=============================================
=            Funciones de retorno con  parametros           =

=============================================*/



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

