// actividad 5: Descuentos
alert ("Ingrese los precios de algunos productos");
let precio1 = parseInt(prompt("Precio del pan"));
let precio2 = parseInt(prompt("Precio de la nafta"));
let precio3 = parseInt(prompt("Precio del kg de asado"));
let precio4 = parseInt(prompt("Precio del fernet"));

let calculoPorcentaje30 = precio1 - (precio1  * 0.3);
let calculoPorcentaje10 = precio2 - (precio2  * 0.1);
let calculoPorcentaje20 = precio3 - (precio3  * 0.2);
let calculoPorcentaje15 = precio4 - (precio4  * 0.15);

console.log("El precio del pan $"+  precio1 + " con el 30% de descuento es:" + " $" + calculoPorcentaje30);
console.log("El precio de la nafta $"+  precio2 + " con el 10% de descuento es:" + " $" + calculoPorcentaje10);
console.log("El precio del asado $"+  precio3 + " con el 20% de descuento es:" + " $" + calculoPorcentaje20);
console.log("El precio del fernet $"+  precio4 + " con el 15% de descuento es:" + " $" + calculoPorcentaje15);

