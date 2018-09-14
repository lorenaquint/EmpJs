
/*==================================
=            Ciclo For           =
==================================
var rep = prompt("Ingrese las repeticiones");
for(var i = 0;i<rep;i++){
	console.log(i);
	//debugger;
}

	var cuenta, edad;

    for(cuenta = 0; cuenta < 2; cuenta ++){
      edad = prompt('Escribe tu edad');
      edad = parseInt(edad);

      if(edad < 18){
        console.log('Eres menor de edad no puedes entrar a la fiesta');
        break;
      }
      else{
        console.log('Eres mayor de edad');
      }
    }
*/

/*==================================
=            Ciclo While           =
==================================


var m = prompt("Ingrese el numero");
while(m<5){
	m++;
	
}

console.log("m", m);

var numero = 1;

   while (numero < 10){
     numero ++;
   }
   console.log(numero);
   
var nombre = prompt('Escriba su nombre');

  do{
    console.log('Usted se llama ' + nombre);
  }
  while(nombre == "");


  var num1 = parseInt(prompt("Ingrese el número 1",0));
  var num2 = parseInt(prompt("Ingrese el número 2",0));
  while( num1 <= 0 || num2 <=0 || isNaN(num1) || isNaN(num2))
  {
  	var num1 = parseInt(prompt("Ingrese el número 1",0));
    var num2 = parseInt(prompt("Ingrese el número 2",0));

  }
  if (num1 > num2) 
  {
  	alert(num1+" es mayor a "+num2)
  }else if(num1 == num2){

  	alert(num1+" es igual a "+num2)

  }else{
  	alert(num1+" es menor a "+num2)
  }
*/
/*==================================
=            Ejercicios            =
==================================

mostrar la suma y la media de números introducidos

por pantallas hasta un número negativo



var suma = 0;
var  media = 0;
var cont = 0;

var num = parseInt(prompt("Introduce un número",0));
while(num>0)
{
	if(isNaN(num))
	{
		num = 0;
	}
	suma+=num;
	cont++;
	num = parseInt(prompt("Introduce un número",0));
}

alert("La suma  es igual a "+suma+"\n"+"y el promedio es:"+suma/cont)
*/

/*==================================
=            Ejercicios            =
==================================
 Mostrar todos los numeros que hay dentro de dos números


var num1 = parseInt(prompt("Ingrese número 1",0));
var num2 = parseInt(prompt("Ingrese número 1",0));
if((num2>num1) && !isNaN(num1) && !isNaN(num2))
{
		document.write("<h2> De "+ num1+" a "+num2+" Existen los siguiente números: </h2>");

		for (var i = num1; i < num2; i++) 
		{

			document.write("<b>"+i+"</b><br>");
	
		}
}
else
{
	alert("Recuerde que los número 2 debe ser mayor al número 1")
}

*/
/*==================================
=            Ejercicios            =
==================================
 Mostrar todos los numeros impares que hay entre dos números introducidos por el usuario

 

var num1 = parseInt(prompt("Ingrese número 1",0));
var num2 = parseInt(prompt("Ingrese número 1",0));

if((num2>num1) && !isNaN(num1) && !isNaN(num2))
{

      while(num1<num2)
      {
      	 num1++;
         if(num1%2 != 0)
         {
              console.log("El "+num1+" es impar")
         }
      }
}
*/
/*==================================
=            Ejercicios            =
==================================
  Mostrar todos los números de dividores de un número introducido por pantalla


var num1 = parseInt(prompt("Ingrese número 1",0));
for (var i = 0; i <= num1; i++) 
{
	if(num1%i == 0)
	{
		console.log("El "+num1+" es divisible por "+i)
	}
}

*/
/*==================================
=            Ejercicios            =
==================================
Hacer un programa que nos diga si un número es par o impar
y tiene que volver a pedir el número


var num1 = parseInt(prompt("Ingrese número 1",0));
while(isNaN(num1))
{
	var num1 = parseInt(prompt("Ingrese número 1",0));
}

if(num1 % 2 == 0)
{
	alert(" El "+num1+" es par");
}
else
{
	alert(" El "+num1+" es impar");
}
*/


/*==================================
=            Ejercicios            =
==================================
Tablas de multiplicar


var num1 = parseInt(prompt("Ingrese la tabla del número que quiere ver",0));
while(isNaN(num1) || num1<= 0)
{
	 num1 = parseInt(prompt("Ingrese la tabla del número que quiere ver",0));
}
document.write("<h1> La tabla del "+ num1+"</h1>") 
for (var i = 1; i <= 10; i++) 
{
	document.write(i+" * "+ num1+" = "+ (i*num1)+"<br>");
}
var num2 = parseInt(prompt("Ingrese hasta que tabla quiere ver",0));
while(isNaN(num2) || num2<= 0)
{
	 num2 = parseInt(prompt("Ingrese hasta que tabla quiere ver",0));
}
document.write("<h1> Estas son la tablas hasta el "+ num2+"</h1>")
for (var i = 2; i <= num2; i++) 
{
    document.write("<h1> La tabla del "+i+"</h1>");
    for (var j = 1; j <= 10; j++) 
    {
		document.write(i+" * "+ j+" = "+(i*j)+"<br>");
	}
}
*/

/*==================================
=            Operaciones          =
==================================
Tablas de multiplicar


var num1 = parseInt(prompt("Ingrese el numero 1",0));
var num2 = parseInt(prompt("Ingrese el numero 1",0));
while(isNaN(num2) || num2<= 0 || isNaN(num2) || num2<=0)
{
	 var num1 = parseInt(prompt("Ingrese el numero 1",0));
	 var num2 = parseInt(prompt("Ingrese el numero 1",0));
}

var suma = num1+ num2;
var resta = num1*num2;
var division = num1/num2;
var prod = num1*num2;

var resultado  = "La suma es: "+(num1+num2)+"<br>"+
				 "La resta es: "+(num1-num2)+"<br>"+
				 "La división es: "+(num1/num2)+"<br>"+
				 "El producto es: "+(num1*num2)+"<br>";


document.write(resultado);


var consola  = "La suma es: "+(num1+num2)+"\n"+
				"La resta es: "+(num1-num2)+"\n"+
				"La división es: "+(num1/num2)+"\n"+
				"el producto es: "+(num1*num2)+"\n";
alert(consola);
*/
/*==================================
=            Ciclo DoWhile           =
==================================

var p = 1;
do
{
	console.log("p", p);
	p++
	
}
while (p<=5)

*/
