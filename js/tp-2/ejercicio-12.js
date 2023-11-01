const nombre = prompt('Ingrese el primer nombre:')
const edad = parseInt(prompt('Ingrese la edad del primer nombre:'))

const nombre2 = prompt('Ingrese el segundo nombre:')
const edad2 = parseInt(prompt('Ingrese la edad del segundo nombre:'))

const nombre3 = prompt('Ingrese el tercer nombre:')
const edad3 = parseInt(prompt('Ingrese la edad del tercer nombre:'))

let mayor = Math.max(edad, edad2, edad3)

if(mayor === edad) {
    document.write(`${nombre} es el mayor con ${edad} años.`)
}

if(mayor === edad2) {
    document.write(`${nombre2} es el mayor con ${edad2} años.`)
}

if(mayor === edad3) {
    document.write(`${nombre3} es el mayor con ${edad3} años.`)
}