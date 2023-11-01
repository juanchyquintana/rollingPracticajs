const dinero = parseInt(prompt("Ingrese su saldo disponible"))
const opcion = parseInt(prompt('Seleccione una opción: 1- consultar el saldo, 2- extraer dinero, 3- ingresar dinero'));
let saldo;

// if(opcion === 1){
//     document.write(`Su saldo disponible es ${dinero}`);
// }else if(opcion === 2){
//     const extraer = parseInt(prompt("¿Cuanto quiere extraer?"))
//     if(extraer > 0) {
//         saldo = dinero - extraer
//         document.write(`Usted extrajo ${extraer}. Su saldo actual es ${saldo}`);
//     } else {
//         document.write('ingreso una opción invalida');
//     }
// }else if(opcion === 3){
//     const ingreso = parseInt(prompt("¿Cuanto quiere ingresar?"))
//     if(ingreso > 0){
//         saldo = dinero + ingreso
//         document.write(`Usted ingresó ${ingreso}. Su saldo actual es ${saldo}`);
//     } else {
//         document.write('ingreso una opción invalida');
//     }
// }else{
//     document.write('ingreso una opción invalida');
// }

switch (opcion) {
    case 1:
        document.write(`Su saldo disponible es ${dinero}`);
        break;
    case 2:
        const extraer = parseInt(prompt("¿Cuanto quiere extraer?"))
        if(extraer > 0) {
            saldo = dinero - extraer
            document.write(`Usted extrajo ${extraer}. Su saldo actual es ${saldo}`);
        } else {
            document.write('ingreso una opción invalida');
        }
        break;
    case 3:
        const ingreso = parseInt(prompt("¿Cuanto quiere ingresar?"))
        if(ingreso > 0){
            saldo = dinero + ingreso
            document.write(`Usted ingresó ${ingreso}. Su saldo actual es ${saldo}`);
        } else {
            document.write('ingreso una opción invalida');
        }
        break;
    case 4:
        document.write('ingreso una opción invalida');
        break;

    default:
        break;
}