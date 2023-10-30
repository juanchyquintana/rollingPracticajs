const filas = parseInt(prompt("Ingrese la cantidad de filas"));
const columnas = parseInt(prompt("Ingrese la cantidad de columnas"));
let totalCeldas = filas * columnas;

document.write(`<table><tbody>`);

for (let indiceFilas = 0; indiceFilas < filas; indiceFilas++) {
  document.write(`<tr>`);

  for(let indiceColumnas = 0; indiceColumnas < columnas; indiceColumnas++) {
      document.write(`<td>${totalCeldas}</td>`);
      totalCeldas--;
  }

  document.write(`</tr>`);
}

document.write(`</tbody></table>`);
