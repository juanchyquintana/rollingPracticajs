let numeroRep = parseInt(prompt("Introduce un número, por favor"));

if (numeroRep > 0 && numeroRep <= 50) {
  for (let i = 0; i <= numeroRep; i++) {
    for (let rep = 1; rep <= i; rep++) {
      document.write(rep);
    }
    document.write("<br>");
  }
} else {
  alert("El número introducido no es válido");
}
