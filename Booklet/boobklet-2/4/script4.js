//Actividad 4: Presupuesto
let number = prompt("Ingrese un numero ");

if (number == 0) {
    console.log('no tiene presupuesto!');
}else if (number <= 1000) {
    console.log('presupuesto bajo!');
}else if ((number >= 1001) && (number <= 2999)) {
    console.log('presupuesto medio!');
}else if (number > 3000) {
    console.log('presupuesto alto!');
}else {
    console.log("E R R O R!");
}
