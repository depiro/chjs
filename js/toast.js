// toast eliminar publicación
function toastyBorrar(){
    Toastify({
      text: "Eliminaste tu publicación",
      className: "info",
      duration: 1500,
      gravity: "bottom",
      position: "center",
      style: {
        background: "linear-gradient(to right, #360033, tomato)",
      }
    }).showToast();
}

// toast agregar item al carrito
function toastyAgregar(){
    Toastify({
      text: "Agregaste una guitarra al carrito",
      className: "info",
      duration: 2000,
      gravity: "bottom",
      position: "center",
      style: {
        background: "linear-gradient(to right, #360033, #0b8793)",
      }
    }).showToast();
}

// toast vaciar carrito
function toastyLimpiCarrito(){
  Toastify({
    text: "Vaciaste tu carrito",
    className: "info",
    duration: 4000,
    gravity: "bottom",
    position: "center",
    style: {
      background: "linear-gradient(to right, #360033, tomato)",
    }
  }).showToast();
}

// toast eliminar item de tabla del carrito
function toastyLimpiItemCarrito(){
  Toastify({
    text: "Eliminaste 1 guitarra de tu carrito",
    className: "info",
    duration: 4000,
    gravity: "bottom",
    position: "center",
    style: {
      background: "linear-gradient(to right, #360033, tomato)",
    }
  }).showToast();
}
