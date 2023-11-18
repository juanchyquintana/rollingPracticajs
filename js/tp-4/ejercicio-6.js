class Libro {
  constructor(isbn, titulo, autor, totalPaginas) {
    this._isbn = isbn;
    this._titulo = titulo;
    this._autor = autor;
    this._totalPaginas = totalPaginas;
  }

  get isbn() {
    return this._isbn;
  }

  set isbn(nuevoIsbn) {
    this._isbn = nuevoIsbn;
  }

  get titulo() {
    return this._titulo;
  }

  set titulo(nuevoTitulo) {
    this._titulo = nuevoTitulo;
  }

  get autor() {
    return this._autor;
  }

  set autor(nuevoAutor) {
    this._autor = nuevoAutor;
  }

  get totalPaginas() {
    return this._totalPaginas;
  }

  set totalPaginas(numPaginas) {
    this._totalPaginas = numPaginas;
  }

  mostrarDatosLibro() {
    document.write(
      `El libro ${this._titulo} con ISBN ${this._isbn} creador por el autor ${this._autor} tiene un total de ${this._totalPaginas} páginas <br><br>`
    );
  }
}

const primerLibro = new Libro(
  43543543543,
  "Cómo ganar amigos e influir sobre las personas",
  "Dale Carnegie",
  303
);
const segundoLibro = new Libro(
  21321232133,
  "La vida es dura, pero hermosa",
  "Juan Diego Quintana",
  400
);

primerLibro.mostrarDatosLibro();
segundoLibro.mostrarDatosLibro();

if (primerLibro._totalPaginas > segundoLibro._totalPaginas) {
  document.write(
    `${primerLibro.titulo} tiene más páginas (${primerLibro._totalPaginas}) que ${segundoLibro.titulo} (${segundoLibro._totalPaginas})`
  );
} else if (primerLibro._totalPaginas < segundoLibro._totalPaginas) {
  document.write(
    `${segundoLibro.titulo} tiene más páginas (${segundoLibro._totalPaginas}) que ${primerLibro.titulo} (${primerLibro._totalPaginas})`
  );
} else {
  document.write(
    `${primerLibro.titulo} (${primerLibro._totalPaginas}) y ${segundoLibro.titulo} (${segundoLibro._totalPaginas}) tienen el mismo número de páginas`
  );
}
