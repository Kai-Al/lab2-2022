'use strict';

function add(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let resultado = document.getElementById("resultado").value;
    let suma = parseInt(num1) + parseInt(num2);
    resultado.innerHTML = suma;
}

function minus(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    
   if(b===0){
    return new Error("No puede dividir por cero");
   } else {
    return a/b;
   }

}


module.exports= {
    add,
    minus,
    multiply,
    divide
}