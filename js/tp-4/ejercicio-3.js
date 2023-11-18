class Reactangulos {
    constructor(altura, ancho) {
        this.altura = altura;
        this.ancho = ancho;
    }

    modificarAlto(altoNuevo) {
        this.altura = altoNuevo;
    }

    modificarAncho(anchoNuevo) {
        this.ancho = anchoNuevo;
    }

    mostrarPropiedades() {
        document.write(`Su alto es ${this.altura}, Ancho: ${this.ancho} <br>`)
    }

    calcularPerimetro() {
        return 2 * (this.altura + this.ancho);
    }

    calcularArea() {
        return this.altura + this.ancho
    }
}

const miRectangulo = new Reactangulos(5, 8);

// Se muestra los valores introducidos
miRectangulo.mostrarPropiedades();
// Se modifican los valores
miRectangulo.modificarAlto(7);
miRectangulo.modificarAncho(10);
// Se muestran los nuevos numeros
miRectangulo.mostrarPropiedades();
// Se calcula el perimetro y area
document.write(`Perimetro: ${miRectangulo.calcularPerimetro()} <br>`)
document.write(`Area: ${miRectangulo.calcularArea()}`)

