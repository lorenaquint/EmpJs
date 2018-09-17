function comer(persona,comida)
{
    persona = (persona !== undefined)?persona:"Alguien";
    comida = (comida!==undefined)?comida:"algo";
    return (persona + " come "+ comida);
}
console.log(comer());
console.log("1uintero");