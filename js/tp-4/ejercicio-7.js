class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
}

class Agenda {
  constructor(tamano = 10) {
    this.contactos = [];
    this.tamano = tamano;
  }

  aniadirContacto(contacto) {
    if (this.contactos.length < this.tamano) {
      this.contactos.push(contacto);
      console.log(`Contacto ${contacto.nombre} añadido a la agenda.`);
    } else {
      console.log("La agenda está llena, no se pueden añadir más contactos.");
    }
  }

  existeContacto(contacto) {
    return this.contactos.some((c) => c.nombre === contacto.nombre);
  }

  listarContactos() {
    this.contactos.forEach((contacto) => console.log(contacto));
  }

  buscarContacto(nombre) {
    const contacto = this.contactos.find((c) => c.nombre === nombre);
    if (contacto) {
      console.log(`Nombre: ${contacto.nombre}, Teléfono: ${contacto.telefono}`);
    } else {
      console.log(`El contacto ${nombre} no se encuentra en la agenda.`);
    }
  }

  eliminarContacto(contacto) {
    const index = this.contactos.findIndex((c) => c.nombre === contacto.nombre);
    if (index !== -1) {
      this.contactos.splice(index, 1);
      console.log(`Contacto ${contacto.nombre} eliminado de la agenda.`);
    } else {
      console.log(
        `El contacto ${contacto.nombre} no se encuentra en la agenda.`
      );
    }
  }

  agendaLlena() {
    return this.contactos.length === this.tamano;
  }

  huecosLibres() {
    return this.tamano - this.contactos.length;
  }
}

const miAgenda = new Agenda(5);

function mostrarMenu() {
  const opcion = prompt(`Seleccione una opción:
    1. Añadir contacto
    2. Buscar contacto
    3. Listar contactos
    4. Eliminar contacto
    5. Verificar si la agenda está llena
    6. Verificar cuántos huecos libres hay
    7. Salir`);

  switch (opcion) {
    case "1":
      const nombre = prompt("Ingrese el nombre del contacto:");
      const telefono = prompt("Ingrese el teléfono del contacto:");
      const contacto = new Contacto(nombre, telefono);
      miAgenda.aniadirContacto(contacto);
      break;
    case "2":
      const nombreBusqueda = prompt("Ingrese el nombre del contacto a buscar:");
      miAgenda.buscarContacto(nombreBusqueda);
      break;
    case "3":
      miAgenda.listarContactos();
      break;
    case "4":
      const nombreEliminacion = prompt(
        "Ingrese el nombre del contacto a eliminar:"
      );
      const contactoEliminacion = new Contacto(nombreEliminacion, "");
      miAgenda.eliminarContacto(contactoEliminacion);
      break;
    case "5":
      console.log(
        `La agenda ${miAgenda.agendaLlena() ? "está" : "no está"} llena.`
      );
      break;
    case "6":
      console.log(`Hay ${miAgenda.huecosLibres()} huecos libres en la agenda.`);
      break;
    case "7":
      return;
    default:
      console.log("Opción inválida.");
      break;
  }

  mostrarMenu();
}

mostrarMenu();
