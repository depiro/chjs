
// Valida si hay carrito guardado en LS
let validarCarrito = localStorage.getItem("tablaCarrito");

if (validarCarrito == null){
    tablaCarrito = [];
 }else{
    tablaCarrito = JSON.parse(validarCarrito)
   console.log(validarCarrito)
}


//  Guarda en Local Storage 
const carritoStorage = () => {
   localStorage.setItem("carrito", JSON.stringify(carrito))
}
