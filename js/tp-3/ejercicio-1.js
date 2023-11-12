// Buenas profe, cómo le va? Le quería avisar por este medio que los primeros cuatro ejercicios son los del panel de trello. Luego vienen los solicitados en el TP3 que publicaron en el Area Personal. H

// Hago esta aclaración, ya que en el tp2 paso una situación similar y tuve unas observaciones a causa de eso. Desde ya muchas gracias, saludos.

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
