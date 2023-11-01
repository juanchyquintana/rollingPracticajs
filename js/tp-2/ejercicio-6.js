let suma = 0;

do {
    var numero = prompt("Introduce un numero");
    if (parseInt(numero) == numero) {
        numero = parseInt(numero);
        suma = suma + numero;
    } else {
        if (numero != undefined) {
            alert(numero + " No es un numero");
        }
    }
} while (confirm('Deseas Continuar?'));

document.write(suma);