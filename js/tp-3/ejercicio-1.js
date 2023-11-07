const numeroAlto = (numero) => {
    let numeroMayor = numero[0];
    for(let i = 1; i < numero.length; i++) {
        if(numero[i] > numeroMayor) {
            numeroMayor = numero[i]
        }
    }
    return numeroMayor
}

const arregloNumeros = [4, 7, 1, 9, 12, 5, 3, 66, 88];
const mayor = numeroAlto(arregloNumeros);
console.log("El número más grande en el arreglo es: " + mayor);
