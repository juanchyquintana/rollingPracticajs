function esPrimo(numero) {
  if (numero <= 1) {
    return false;
  }

  if (numero <= 3) {
    return true;
  }

  if (numero % 2 === 0 || numero % 3 === 0) {
    return false;
  }
  
  for (let i = 5; i * i <= numero; i += 6) {
    if (numero % i === 0 || numero % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

function numerosPrimosHastaN(n) {
  const primos = [];
  for (let i = 2; i <= n; i++) {
    if (esPrimo(i)) {
      primos.push(i);
    }
  }
  return primos;
}

const numeroIngresado = parseInt(prompt("Ingrese un número, por favor"));
const numeroPrimo = numerosPrimosHastaN(numeroIngresado);
console.log(
  "Números primos menores o iguales a",
  numeroIngresado,
  "son:",
  numeroPrimo
);
