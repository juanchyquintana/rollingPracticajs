let cadena = prompt("Introduce una cadena de texto:");
let numchar = cadena.length;

for (let i = 0; i < numchar; i++) {
    let caracter = cadena.charAt(i);
    if (i == numchar - 1) {
        document.write(caracter);
    }
    else {
        document.write(caracter + "-");
    }
}