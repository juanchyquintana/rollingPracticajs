const ciudades = [];

while (true) {
  let nombreCiudad = prompt("Introduce el nombre de una ciudad, por favor:");
  if (nombreCiudad === null) {
    confirm("¿Desea ver el listado de paises?");
    break;
  }
  ciudades.push(nombreCiudad);
}

console.log(ciudades);

document.write(`El arreglo tiene un total de: ${ciudades.length} ciudades.`);

document.write(`<ul>`);
document.write(`<li>El elemento en 1er posicion es: ${ciudades[0]}</li>`);
document.write(`<li>El elemento en 3er posicion es: ${ciudades[2]}</li>`);
document.write(
  `<li>El elemento en Última posicion es: ${ciudades[ciudades.length - 1]}</li>`
);
document.write(`</ul`);

ciudades.push("París"); // Agregamos a París en el último puesto.

console.log(`Este es el pais que ocupa el segundo puesto del Array: ${ciudades[1]}`);

ciudades[1] = "Barcelona";


document.write("<h2>Ciudades actualizadas: </h2>");
for (let i = 0; i < ciudades.length; i++) {
  document.write(`<ol>`);
  document.write(`<li>${ciudades[i]}</li>`);
  document.write(`</ol`);
}
