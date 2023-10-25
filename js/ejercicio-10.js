// Ejercicio 10
const num1 = parseInt(prompt('Introduzca el primer número, por favor'));
const num2 = parseInt(prompt('Introduzca el segundo número, por favor'));
const num3 = parseInt(prompt('Introduzca el tercer número, por favor'));

if(num1 >= num2) {
    document.write(`El número ${num1} es mayor que ${num2} y ${num3}`)
} else if ( num2 >= num3) {
    document.write(`El número ${num2} es mayor que ${num1} y ${num3}`)
} else {
    document.write(`El número ${num3} es mayor que ${num1} y ${num2}`)
}