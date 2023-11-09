const mesesAño = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];


document.write("<h1>Lista de Meses</h1>");
for (let i = 0; i < mesesAño.length; i++) {
        document.write(`<ul>`)
        document.write(`<li>${mesesAño[i]}</li>`)
        document.write(`</ul`)
}
