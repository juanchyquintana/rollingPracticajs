const tablaMultiplicar = (numero) => {
  for (let i = 0; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
};

tablaMultiplicar(9);


// Opción N° 2

const tablaMultiplicar2 = () => {
    const numero = parseInt(prompt('Ingrese un número para conocer su tablaa, por favor.'))
    for (let i = 0; i <= 10; i++) {
      document.write(`${numero} x ${i} = ${numero * i} <br>`);
    }
  };
  
tablaMultiplicar2();


// En la primera opcion se realizó una función con un parametro en la función, mientras que en la segunda se solicita el número mediante un prompt y no un parametro.