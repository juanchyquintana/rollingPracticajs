const auto = {
    color: 'azul',
    marca: 'BMW',
    modelo: '2023',
    encendido: encenderAuto = () => {
        document.write(`<p>Acaba de prender el auto</p>`);
    },
    apagado: apagarAuto = () => {
        document.write(`<p>Acaba de apagar el auto</p>`);
    }
}

auto.encendido();
auto.apagado()