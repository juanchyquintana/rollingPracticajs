let cadena = prompt("Introduce un Texto:");
let numeroCaracteres = cadena.length;
let salida = "";

for (let i = 0; i < numeroCaracteres; i++) {
    let caracteres = cadena.charAt(i);
    salida = caracteres + salida;
}
document.write(salida);