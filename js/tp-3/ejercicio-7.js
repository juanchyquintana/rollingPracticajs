function lanzarDado() {
    return Math.floor(Math.random() * 6) + 1;
}

let conteoSumas = new Array(11).fill(0);

for (let i = 0; i < 50; i++) {
    let dado1 = lanzarDado();
    let dado2 = lanzarDado();
    let suma = dado1 + dado2;

    conteoSumas[suma - 2]++;
}


document.write("<h2>Número de apariciones de cada suma:</h2>");
for (let j = 2; j <= 12; j++) {
    document.write(`${j}: ${conteoSumas[j - 2]} veces <br>`);
}
