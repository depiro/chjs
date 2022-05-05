// //Actividad 5: Validacion
let datoIngresado = "";

while (datoIngresado != 'ESC') {
    alert(validacion(datoIngresado));
    datoIngresado = prompt("Ingresa un valor");
}

function validacion(cadena) {
    return cadena != '';
}