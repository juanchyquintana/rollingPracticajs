// Ejercicio 12
let frase = prompt("Por favor, ingresa una frase:");
let vocales = "";

for (let i = 0; i < frase.length; i++) {
    let vocal = frase[i];
    if ("aeiouAEIOU".indexOf(vocal) !== -1) {
        vocales += vocal;
    }
}

if (vocales.length > 0) {
    alert(`En la frase "${frase}". Las vocales son ${vocales}`)
} else {
    alert(`En la frase "${frase}". No se han encontrador vocales.`)
}
