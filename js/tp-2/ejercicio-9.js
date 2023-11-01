let numeroRep = parseInt(prompt("Introduce un número, por favor"));

  if (numeroRep > 0 && numeroRep <= 50) {
    for (let i = numeroRep; i >= 1; i--) {
      for (let rep = i; rep >= 1; rep--) {
        document.write(i);
      }
      document.write("<br>");
    }
  } else {
    alert("El número introducido no es válido");
  }