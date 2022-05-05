//Actividad 3: Impuestos

//Función que calcula el 20 porciento del precio
function impuesto(precio, porcentaje) {
    // calcula el IVA del 21.1%
    //return precio + (precio*0.21,1)
    // saca porcentaje con los 2 valores ingresados
    return precio + (precio * porcentaje/100)
}

for (let i = 0; i < 5; i++) {
    let tax = impuesto(parseFloat(prompt("Ingresa el precio")),parseFloat(prompt("ingresa porcentaje")));
    alert(tax);
}
