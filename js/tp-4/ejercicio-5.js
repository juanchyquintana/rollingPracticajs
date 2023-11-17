class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, anoNacimiento){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anoNacimiento = anoNacimiento;
    }

    // Metodos
    mostrarGeneracion() {
        const anio = this.anoNacimiento
        let generacion = ""
        let rasgos = ""

        if(anio >= 1994) {
            generacion = "Generación Z"
            rasgos = "Irrevencia"
        } else if (anio >= 1981) {
            generacion = "Generación Y"
            rasgos = "Frustración"
        } else if (anio >= 1969) {
            generacion = "Generación X"
            rasgos = "Obsesión por el éxito"
        } else if (anio >= 1949) {
            generacion = "Generación Baby Boom"
            rasgos = "Ambición"
        } else {
            generacion = "Generación Silent Generation"
            rasgos = "Austeridad"
        }

        document.write(`${this.nombre} pertenece a la ${generacion} y su rasgo caracteristico es ${rasgos} <br><br>`)
    }

    esMayorDeEdad() {
        if(this.edad >= 18) {
            document.write(`${this.nombre} es mayor de edad (${this.edad})`)
        } else {
            document.write(`${this.nombre} no es mayor de edad (${this.edad})`)
        }
    }

    mostrarDatos(){
        document.write(`<br><br>${this.nombre} tiene ${this.edad} y nacio en ${this.anoNacimiento}. Su sexo es ${this.sexo}. Su altura es ${this.altura} y pesa ${this.peso}. Su documento es ${this.dni} <br><br>`)
    }

    generarDNI() {
        const nuevoDNI = Math.floor(Math.random() * 90000000) + 10000000;
        this.dni = nuevoDNI;
    }
}

const persona1 = new Persona("Juan Diego", 22, 43433469, "M", 66.6, 1.87, 2001)
const persona2 = new Persona("Juan Carlos", 56, 20202020, "M", 100, 1.79, 1969)
const persona3 = new Persona("Carlos Esteban", 16, 23455678, "M", 60, 1.69, 2007)

persona1.mostrarGeneracion()
persona2.mostrarGeneracion()
persona3.mostrarGeneracion()

persona1.esMayorDeEdad();
persona1.generarDNI()
persona1.mostrarDatos();

persona2.esMayorDeEdad();
persona2.generarDNI()
persona2.mostrarDatos()

persona3.esMayorDeEdad();
persona3.generarDNI()
persona3.mostrarDatos()