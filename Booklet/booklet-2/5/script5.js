//Actividad 5: Vacío
let producto1 = prompt("Ingrese el primer producto de almacen");
let producto2 = prompt("Ingrese el segundo producto de almacen");
let producto3 = prompt("Ingrese el tercero producto de almacen");
let producto4 = prompt("Ingrese el cuarto producto de almacen");

let carrito = producto1 + " " + producto2 + " " + producto3 + " " + producto4;

if ((producto1 != "") && (producto2 != "") && (producto3 != "") && (producto4 != "")){
    console.log(carrito);
}else
    console.log("E R R O R - cargue todos los productos!");
