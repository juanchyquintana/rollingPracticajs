const ladoUno = parseInt(prompt('Ingrese el primer valor del Lado A'));
const ladoDos = parseInt(prompt('Ingrese el primer valor del Lado B'));

const calcularPerimetro = (ladoA, ladoB) => {
    const perimetro = 2 * (ladoA + ladoB);
    console.log(`El perimetro es: ${perimetro}`)
}
calcularPerimetro(ladoUno, ladoDos)