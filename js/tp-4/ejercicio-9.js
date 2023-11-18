/* 
Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado. 

*/

class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad
    }

    emitirSonido() {
        alert("El animal está emitiendo un sonido")
    }
}

class Perro extends Animal {
    constructor(nombre, edad) {
        super(nombre, edad)
    }

    emitirSonido(){
        alert(`El ${this.nombre} ha ladrado`)
    }
}

class Gato extends Animal {
    constructor(nombre, edad) {
        super(nombre, edad)
    }

    emitirSonido(){
        alert(`El ${this.nombre} está maullando`)
    }
}

const miPerro = new Perro("Rocco", 7)
const miGato = new Gato("Luna", 2)

miPerro.emitirSonido()
miGato.emitirSonido()