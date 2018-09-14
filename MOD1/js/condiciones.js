
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


	var edad = prompt('Escriba su edad','en numeros solamente');
    edad = parseInt(edad);

    if(edad > 18){
      console.log('Usted es mayor de edad');
    }
    else{
      console.log('Uste No es mayor de edad');
    }

	var edad = prompt('Escriba su edad','en numeros solamente');
    var ciudad = prompt('Escriba su ciudad de origen');
    edad = parseInt(edad);

    if(edad > 18){
      console.log('Usted es mayor de edad');
    }

    else if(ciudad == 'bogota'){
      console.log('Usted es de ' + ciudad);
    }

    else if(ciudad == 'medellin'){
      console.log('Usted es de ' + ciudad);
    }

    else if(ciudad == 'cali'){
      console.log('Usted es de ' + ciudad);
    }

    else{
      console.log('Usted No es mayor de edad');
    }



     

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

 var edad = prompt('Escribe tu edad','en numeros solamente');
    edad = parseInt(edad);
    switch(edad){

      case 10:
      console.log('Eres un niño');
      break;

      case 15:
      console.log('Eres un adolescente');
      break;

      case 21:
      console.log('Eres un adulto');
      break;

      default:
      console.log('Eres un adulto mayor');




