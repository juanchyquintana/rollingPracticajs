const edad = parseInt(prompt('Introduzca su edad, por favor'));

if(edad >= 18) {
    alert(`Usted puede conducir, ya que tiene ${edad} años. Felicidades`);
} else {
    alert(`Su edad (${edad}) no le permite obtener la licencia. Lo siento`);
}