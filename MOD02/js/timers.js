'use strict'

//Set interval ejecuta una función cada cierto tiempo
let titPal = document.querySelector("#titPal");
let fontSize = 52;
var tiempo;

function startInterval()
{
     tiempo = setInterval(function(){

        console.log("Se esta ejecutando");
        //titPal.style.fontSize = fontSize + "px";
        
        if(titPal.style.fontSize == "52px")
        {
            titPal.style.fontSize =  "22px";
        }
        else
        {
            titPal.style.fontSize =  "52px";
        }
        //fontSize+=10;
    
    }, 5000);
    
    
}



// Set tiemout se ejecuta solo una vez

/*
let titSec = document.querySelector("#titSec");
let tiempo2 = setTimeout(function(){

    if(titSec.style.fontSize == "52px")
    {
        titSec.style.fontSize =  "22px";
    }
    else
    {
        titSec.style.fontSize =  "92px";
    }

}, 5000);

*/

let btnStart = document.querySelector("#btnStart");
let btnStop = document.querySelector("#btnStop");
//var tiempoTotal = startInterval();
btnStart.onclick = function(){

    startInterval();
}

btnStop.onclick = function(){
    clearInterval(tiempo);
    console.log("se detuvo el intervalo");
}


let second = 0;
let titTer = document.querySelector("#titTer");
setInterval(function()
{
    second++;
    titTer.innerHTML = second;

},1000)

let second2 = 0;
let titiCuar = document.querySelector("#titCuar");
setInterval(function(){
   second2++;
   titiCuar.innerHTML += second2;
},1000)