 /*=============================================
 =            Definición de arreglo            =
 =============================================*/
 
 
/*
 var nombres = new Array('andres','teresa','sara');
 console.log(nombres[2]);

var frutas = new Array();
frutas [0] = "Pera";
frutas [1] = "Manzana";
frutas [2] = "Mandarina";

var lenguajes = new Array("Php","Java","C#","Swift")
console.log("lenguajes", lenguajes);
var elemento = parseInt(prompt(" Cual indice quieres obtener el arreglo"));
console.log("lenguajes", lenguajes[elemento]);
if (elemento>=lenguajes.length) {
      alert("Recuerde que el arreglo tiene "+lenguajes.length+ " de longitud")
}
else{
      console.log("lenguajes", lenguajes[elemento]);
}

document.write("<h1> LENGUAJES DE  PROGRAMACION </h1>");
document.write("<ul>");
for (var i = 0; i < lenguajes.length; i++) {
      document.write("<li>"+lenguajes[i]+"</li>");
}
document.write("</ul>");
document.write("<h1> LENGUAJES DE  PROGRAMACION FOREACH </h1>");
document.write("<ul>");
lenguajes.forEach((item)=>{
      document.write("<li>"+item+"</li>");
});
document.write("</ul>");
 var ciudades = ['Medellin','Tunja','Bogotá'];
 console.log(ciudades[0]);

var estatura = 1.67;
var elementos = ['andres',23,true,estatura];
console.log(elementos[3]);
var substring = elementos[0].substring('a');
console.log(substring);

      for(var i = 0; i < 4; i ++){
        console.log(elementos[i]);
      }

 /*=============================================
 =            Arreglos Multidimensionales      =
 =============================================*/
/*
     var persona0 = ['andres',23,'2345678'];
     var persona1 = ['esteban',13,'2345656'];
     var persona2 = ['sara',17,'2345634'];
     var persona3 = ['ana',33,'2345689'];

     var personas = [persona0,persona1,persona2,persona3];

     for(var i = 0; i < personas.length; i ++){
       console.log(personas[i]);
     }


     var categorias = ["comedia","terror","acción","ficción"];
     var peliculas = ["X-Men","Toy Story","Rapidos y Furiosos","Titanic"];
     var cine = [categorias,peliculas];
     console.log("cine", cine);
     console.log(cine[0][3]);
     console.log(cine[1][2]);
*/
/*================================================
=            Operaciones con arreglos            =
================================================*/
/*Array.concat(array1,array3,..arrayx): Agrupa varios arrays y devuelve la copia de los arrays agrupados.

Array.indexOf(item,start): Busca el elemento en el array y devuelve su posición.

Array.lastIndexOf(item,start): Busca el elemento en el array y devuelve su posición comenzando por el final.

Array.join(separador): Agrupa todo los elementos del array en una cadena de texto.

Array.pop():Remueve el último elemento de un array.

Array.push(item1,item2,item3…itemx):Añade nuevos elementos al array.



/*=====  End of Operaciones con arreglos  ======*/


/*==================================================
=            Añadir contenido al array            =
==================================================



pelicula = "iniciar";

while(pelicula != "fin")
{
      var pelicula= prompt("Ingresa tu pelicula para terminar escribe fin");
      peliculas.push(pelicula);
}
peliculas.pop();
document.write("<h1> ADICIONANDO PELICULAS </h1>");
document.write("<ul>");
peliculas.forEach((item)=>{
     document.write("<li>"+item+"</li>");
});
document.write("</ul>");

var indice = peliculas.indexOf("Titanic");
console.log("indice", indice);
var indice2 = peliculas.indexOf("Toy Story");
console.log("indice2", indice2);
//Splice nos sirve para borrar un elemento del array
//Indicando el indice y cuantos pasos adelante quiero borrar
peliculas.splice(indice2,1);
console.log("peliculas.splice(indice2,1)", peliculas);
//Busca la posición 4 y con 0 inserta 300
peliculas.splice(4,0,"300");
console.log("peliculas.splice(4,0,\"300\")",peliculas );


if (indice > -1) {
      peliculas.splice(indice,1);
      console.log("peliculas.splice(indice,1)", peliculas);
      

}
//busca la posición 6 y reempplaza
peliculas.splice(6,1,"800");
console.log("peliculas.splice(6,1,\"800\")", peliculas);

console.log("Concatenación de Arreglos");
var dias1 = ["lunes","Martes","Miercoles"];
var dias2 = ["Jueves","Viernes","Sábado","Domingo"];
var result = dias1.concat(dias2)
console.log("result", result);
for (var i = 0; i < result.length; i++) {
      result[i];
      console.log("result", result[i]);

}

var adsi1 = ["Daniela", "Miguel"];
var adsi2 = ["Juan Jose", "Juan Jose","Juan Jose", "Nicolas"];
var adsi3 = ["Roxana"];
var total = adsi1.concat(adsi2, adsi3);
for (var i = 0; i < total.length; i++) {
      console.log(total[i]);
}

var frutas = ["Platano", "Naranja", "Mazana", "Mango", "Platano", "Naranja", "Manzana"];
var man = frutas.lastIndexOf("Manzana");
console.log("man", man);
var nar = frutas.lastIndexOf("Naranja");
console.log("nar", nar);
var pla = frutas.lastIndexOf("Platano");
console.log("pla", pla);
var man2 = frutas.lastIndexOf("Naranja",-3);
console.log("man2", man2);
//Unir un arreglo con comas

var result = frutas.join();
console.log("frutas con join", result);



//Convertir una cada en un arreglo

var meses = "enero, febrero, marzo, abril, mayo"
var arrayMeses = meses.split(", ");
console.log("meses con split", arrayMeses);
*/

/*========================================
=            Ordenar Arreglos            =
========================================
var programas = ["Adsi","Multimedia","Diseño","Animacion"];
var numeros = [23,2,58,5];
//console.log("Arreglo sin ordenar",programas);
console.log("Programas original",programas);
programas.sort();
console.log("Ordenando Programas asc",programas);
programas.reverse();
console.log("Ordenando Programas desc",programas);
console.log("Numeros original",numeros);
numeros.sort((a,b)=>b-a);

console.log("Ordenando Numeros desc",numeros);
numeros.sort((a,b)=>a-b);
console.log("Ordenando Numeros asc",numeros);



*/

/*========================================
=            Ordenar Arreglos            =
========================================

var lenguajes = new Array("Php","Java","C#","Swift")
console.log("lenguajes", lenguajes);
document.write("<h1> LENGUAJES DE  PROGRAMACION </h1>");
document.write("<ul>");
 for(let i in lenguajes)
 {
     document.write("<li>"+lenguajes[i]+"</li>");
 }

 document.write("</ul>");
 */

 /*========================================
=            Buscar dentro de  Arreglos            =
========================================


var lenguajes = new Array("Php","Java","C#","Swift");
var precios = [10,20,30,49]
var busqueda = lenguajes.find( function(lenguaje){
      
      return lenguaje == "C++";
});
console.log("Buscando C++", busqueda);
busqueda = lenguajes.find(lenguaje => lenguaje == "Java");
console.log("buscando java con lamda", busqueda);
busqueda = lenguajes.findIndex(lenguaje=>lenguaje == "Swift");
console.log("Swift se encuentra en la posicion: ", busqueda);
busqueda = precios.some(p=>p>=20);
console.log("Existe alguno mayor o igual a 20?  ", busqueda);
busqueda = precios.some(p=>p<10);
console.log("Existe alguno menor a 10?  ", busqueda);
*/

 /*========================================
=            Ejercicios arrays           =
========================================

Pida 6 números por pantalla y los meta en un array
Mostrar el array  en el cuerpo de la página y la consola
ordenar el array y mostrarlo
invertir su orden y mostrarlo
Mostrar cuántos elementos
Buscar de un valor introducido por el usuario y que nos diga si lo encuentra y su indice

*/

var numeros = [];
function imprimirArray(numeros,texto = "")
{
      document.write("<h1> Arreglos "+texto+ "</h1>");
      document.write("<ul>");
      numeros.forEach((numero,index)=>{
            document.write("<li>"+numero+" con indice "+index+"</li>");
      });
      document.write("</ul>");

}

for (var i = 0; i < 6; i++) {
      var numero = parseInt(prompt("Ingrese el número",0));
      numeros.push(numero);
      
}
imprimirArray(numeros);
numeros.sort((a,b)=>a-b);
imprimirArray(numeros, " ordenado ascendentemente");
numeros.sort((a,b)=>b-a);
imprimirArray(numeros, " ordenado descendentemente");
console.log("numeros", numeros);
document.write("<h1>El arreglo tiene: "+numeros.length+" elementos </h1>")
var buscar = parseInt(prompt("Inserte el número a buscar",0));
var busqueda = numeros.find(num=>num == buscar);
if (busqueda && buscar!=-1) {
    document.write("<h1> El número "+buscar+ " fue encontrado en la posición "+ numeros.findIndex(n=>n == buscar)+"</h1>");  

}
else{
      document.write("<h1> El número "+buscar+ " no fue encontrado </h1>");  
}
console.log("lorena");








