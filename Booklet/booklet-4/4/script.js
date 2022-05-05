//Actividad 4: Cotización

const cotizaPesos = (pesos) => valor * cotizacionDolar;
const cotizaDolar = (dolar) => valor / cotizacionDolar;

let seleccionador = prompt("Seleccione \n 1. U$S a $ \n 2.  $ a U$S ");
let cotizacionDolar = prompt ("cotizacion del dolar");
let valor = prompt("ingrese el monto de los pesos a cotizar");

switch (seleccionador) {
    case "1":
        alert(cotizaPesos(valor));
        break;
    
    case "2":
        alert(cotizaDolar(valor));
        break;

    default:
        break;
}
