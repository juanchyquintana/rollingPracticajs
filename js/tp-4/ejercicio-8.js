class Persona {
    constructor(nombre, edad, profesion) {
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }

    // Metodos
    saludar() {
        document.write(`Bienvenido ${this.nombre}(${this.edad}). Esperemos que sea un gran ${this.profesion} <br><br>`)
    }

    despedirse() {
        document.write(`Muchas Gracias por venir, ${this.nombre}. <br><br>`)
    }
}

const persona = new Persona("Juan Diego", 22, "Programador");
const persona2 = new Persona("Franco", 26, "Contador")

persona.saludar()
persona.despedirse()

persona2.saludar()
persona2.despedirse()
