class Cuenta {
  //Creando las propiedades
  constructor(titular, saldo = 0) {
    this.titular = titular;
    this.saldo = saldo;
  }

  // Metodos
  ingresar(cantidad) {
    this.saldo += cantidad;
  }

  extraer(cantidad) {
    if (cantidad <= this.saldo) {
      this.saldo -= cantidad;
    } else {
      document.write("Fondos insuficientes");
    }
  }

  informar() {
    document.write(`Titular: ${this.titular}, Saldo: ${this.saldo} <br>`);
  }
}

const miCuenta = new Cuenta("Alex", 0);

miCuenta.informar();
miCuenta.ingresar(2500);
miCuenta.informar();
miCuenta.extraer(500);
miCuenta.informar();
