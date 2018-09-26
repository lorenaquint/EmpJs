function comer(persona,comida)
{
    persona = (persona !== undefined)?persona:"Alguien";
    comida = (comida!==undefined)?comida:"algo";
    return (persona + " come "+ comida);
}
console.log(comer());
console.log("1uintero");

btnComparar = document.getElementById("btnComparar");
btnComparar.addEventListener("click",cambiar);
var clase = btnComparar.className;
console.log(clase);
function cambiar(){
    
        btnComparar.classList.toggle("estilo1");
}