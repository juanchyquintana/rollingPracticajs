let cadena = prompt("Introduce una cadena de texto:");
cadena = cadena.toUpperCase();
let numeroCaracteres = cadena.length; 
let contador = 0;

for (let i = 0; i < numeroCaracteres; i++) {
    let vocal = cadena.charAt(i); 
    if ((vocal === "A") || (vocal === "E") || (vocal === "I") || (vocal === "O") || (vocal === "U")) {
        contador++;
    }
}
document.write(`Este texto tiene un total de ${contador} vocales`);