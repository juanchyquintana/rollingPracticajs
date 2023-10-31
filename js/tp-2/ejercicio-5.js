let resultado = ""

do {
    let texto = prompt("Introduce un texto");
    if (resultado === "") {
        resultado = resultado + texto;
    }
    else {
        resultado = resultado + "-" + texto;
    }
} while (confirm("Desea seguir?"));
    document.write(resultado); 