function toastyBorrar(){
    Toastify({
      text: "Eliminaste tu publicación",
      className: "info",
      duration: 3000,
      gravity: "top",
      style: {
        background: "linear-gradient(to right, #360033, #0b8793)",
      }
    }).showToast();
}

function toastyAgregar(){
    Toastify({
      text: "Agregaste una guitarra al carrito",
      className: "info",
      duration: 3000,
      gravity: "top",
      style: {
        background: "linear-gradient(to right, #360033, #0b8793)",
      }
    }).showToast();
}

