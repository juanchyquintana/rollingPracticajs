class Producto {
    constructor(codigo = 0, nombre, precio = 0) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    // Metodos 
    imprimirDatos() {
        document.write(`El producto buscado es ${this.nombre} y su precio es de $${this.precio}. Puede buscarlo con el código ${this.codigo} <br><br>`);
    }
}

const miProducto = new Producto(25, "Yerba Canarias", 5500)

const miProducto1 = new Producto(26, "Yerba Canarias", 5500)
const miProducto2 = new Producto(27, "Yerba CBSé", 1500)
const miProducto3 = new Producto(28, "Yerba Rei Verde", 5500)

const productos = [miProducto1, miProducto2, miProducto3]

miProducto.imprimirDatos()

productos.map( (producto) => producto.imprimirDatos() )