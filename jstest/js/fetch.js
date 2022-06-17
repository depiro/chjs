let productos

const lista = document.querySelector("#container");
fetch(`api.json`)
.then (response => response.json())
// .then (datajson => console.log(datajson))

.then((data) => {
    data.forEach((producto) => {
        const col = document.createElement("div");
        col.innerHTML = `
            <div class="card">
                <img src="${producto.image}" class="card-img-top" alt="${producto.brand}">
                <div class="card-body">
                    <h5 class="card-title">${producto.brand}</h5>
                    <p class="card-text">${producto.model}</p> 
                    <p class="card-text">U$S ${producto.price}</p> 
                    <button id="agregarCarrito" onclick="agregarCarrito(${producto.id}); toastyAgregar();" type="button" class="btn btn-primary">Agregar al carrito</button>
                </div>
            </div>
      `;
        lista.append(col);
    });
  });

