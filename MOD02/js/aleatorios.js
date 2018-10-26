'use sttric'

let numAleatorio = document.querySelector("#numAleatorio");
let numRM = document.querySelector("#numRM");
let numRF = document.querySelector("#numRF");
let numRC = document.querySelector("#numRC");
let numRR = document.querySelector("#numRR");
let numRMC = document.querySelector("#numRMC");
/** Math.Random devuelve un número aleatorio desde 0 (inclusive hasta
 * 1 exclusivo) */
let aleatorio = Math.random();
numAleatorio.innerHTML = aleatorio;

let  aleatorioRM = Math.random()*10;
numRM.innerHTML = aleatorioRM;

/** Math.Floor redondea a un núemro menor del decimal */

numRF.innerHTML = Math.floor(aleatorioRM);

/** Math.Floor redondea a un núemro menor del decimal */

numRC.innerHTML = Math.ceil(aleatorioRM);

/** Devuelve  el valor de x a su número entero más próximo */

numRMC.innerHTML =Math.random()*100;
numRR.innerHTML = Math.round(numRMC.innerHTML);
console.log("contenido numRMC",numRMC.innerHTML);

console.log(numRR);