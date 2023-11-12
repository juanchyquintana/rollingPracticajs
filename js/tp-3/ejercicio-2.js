const numeroAlto = (numero) => {
    const numerosPares = numero.filter( num => num % 2 === 0)
    return numerosPares
}

const arregloNumeros = [4, 7, 1, 9, 12, 5, 3, 66, 88, 19, 100];
const pares = numeroAlto(arregloNumeros);
console.log("Los números pares en el arreglo son: " + pares);