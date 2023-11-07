const calcularGrados = (grados) => {
  const gradosCelsius = grados;
  const gradosFahrenheit = (gradosCelsius * 9) / 5 + 32;
  return gradosFahrenheit;
};

const grados = 25;
const gradosFahrenheit = calcularGrados(grados);
console.log(
  `${grados} grados Celsius equivalen a ${gradosFahrenheit} grados Fahrenheit.`
);
