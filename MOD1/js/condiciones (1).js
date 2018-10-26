
/*==================================
=            Condciones            =
==================================*/


function comparando(a,b){

if (a > b) {
   console.log(a + " es mayor que  "+b);
}
else if(a == b){
	console.log(a +" es igual a "+b);
}
else{
	console.log(a+" es menor que " +b);
}

}

comparando(3,6);
comparando(10,2);
comparando(20,20);

     

/*==================================
=            Cambios          =
==================================*/

var dia = "lunes";
function decisiones(dia)
{
switch(dia){
	case "sabado":
	console.log("voy al cine");
	break;
	case "domingo":
	console.log("voy hacer deporte");
	break;
	case "lunes":
	console.log("hora de estudiar");
	break;
	default:
	console.log("no es un día válido");

}	
}

decisiones("lunes");
decisiones("domingo");
decisiones("miercoles");
decisiones("sabado");



