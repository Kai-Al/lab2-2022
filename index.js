const interface= require('readline-sync');
var calculator = require('./app/calculator').default;

const firstNum = interface.question("Ingrese el primer numero:  ");
const secondNum = interface.question("Ingrese el segundo numero:  ");

var a = parseInt(firstNum);
var b = parseInt(secondNum);

console.log(`Add ${a} + ${b} = ${calculator.add(a,b)}`);
console.log(`Minus ${a} - ${b} = ${calculator.minus(a,b)}`);
console.log(`Multiply ${a} * ${b} = ${calculator.multiply(a,b)}`);
console.log(`Divide ${a} / ${b} = ${calculator.divide(a,b)}`);
