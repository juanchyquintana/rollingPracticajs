// Ejercicio 14
const pedirNumero = parseInt(prompt("Introduce un número, por favor"));
const dos = 2;
const tres = 3;
const cinco = 5;
const siete = 7;

if (pedirNumero % 2 === 0) {
  document.write(`El ${pedirNumero} es divisible por ${dos}`);
} else if (pedirNumero % 3 === 0) {
  document.write(`El ${pedirNumero} es divisible por ${tres}`);
} else if (pedirNumero % 5 === 0) {
  document.write(`El ${pedirNumero} es divisible por ${cinco}`);
} else {
  document.write(`El ${pedirNumero} es divisible por ${siete}`);
}

if (
  pedirNumero % 2 === 0 &&
  pedirNumero % 3 === 0 &&
  pedirNumero % 5 === 0 &&
  pedirNumero % 7 === 0
) {
  document.write(
    `El ${pedirNumero} es divisible por ${dos}, ${tres}, ${cinco} y ${siete}`
  );
} else {
  document.write(`El ${pedirNumero} es divisible por ${dos} y ${cinco}`);
}
