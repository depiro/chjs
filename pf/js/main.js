let carrito = []

const contenedor = document.getElementById("instrumentosStock");
const tablaCarrito = document.getElementById("tablaCarrito"); //contenedorCarrito
const botonVaciarCarrito = document.getElementById('vaciarCarrito')
const contadorCarrito =  document.getElementById('contadorCarrito')

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

// Fetch a JSON de productos
const listaProductos = document.querySelector("#instrumentosStock");
const productos = fetch(`data/api.json`) .then (response => response.json())

.then((baseProductos) => { baseProductos.forEach((item) => {
        const col = document.createElement("div");
        col.classList.add("col-5", "mb-1");
        col.innerHTML = `
            <div class="card">
                <img src="${item.image}" class="card-img-top" alt="${item.brand}">
                <div class="card-body">
                    <h5 class="card-title">${item.brand}</h5> 
                    <p class="card-text">${item.model}</p> 
                    <p class="card-text">U$S ${item.price}</p> 
                    <button id="agregar${item.id}" onclick="toastyAgregar();" type="button" class="btn btn-primary">Agregar al carrito</button>
                </div>
            </div>
        `;
        listaProductos.appendChild(col);

        const boton = document.getElementById(`agregar${item.id}`)

        boton.addEventListener('click', () => {
            agregarCarrito(item.id)
        })
    })

    //  Agrega a carrito
    const agregarCarrito = (id) => {
        const agregarItem = baseProductos.find((item) => item.id === id);
        carrito.push(agregarItem);
        actualizarCarrito();
    }
    console.log(carrito);
})

// Funcion eliminar item del carro
const eliminarDelCarro = (id) => {
    const item = carrito.find((item) => item.id === id)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)

    actualizarCarrito()
}

const actualizarCarrito = () => {
    tablaCarrito.innerHTML = ""
    
    carrito.forEach((item) => {
        const trTable = document.createElement("tr");
        trTable.innerHTML = `
            <tr>
                <th scope="row">${item.id}</th>
                <td>${item.brand}</td>
                <td>${item.model}</td>
                <td>$ ${item.price}</td>
                <td><img style="width:30px" class="pic-table" src="${item.image}" alt="imagen"></td>
                <td><button onclick="eliminarDelCarro(${item.id}), toastyLimpiItemCarrito()" type="button" class="btn btn-sm btn-secondary">Borrar</button></td>
            </tr>
        `
        tablaCarrito.appendChild(trTable) 
        localStorage.setItem('carrito', JSON.stringify(carrito))
    });
    contadorCarrito.innerText = carrito.length
}

// Botón vaciar carrito
botonVaciarCarrito.addEventListener ('click', () => {
    carrito.length = 0
    toastyLimpiCarrito()
    actualizarCarrito()
})

// Fetch a Mercadopago
const pagar = async () => {

    const productosToMap = carrito.map(item => {
        let nuevoElemento = 
        {
            title: item.brand,
            description: item.model,
            picture_url: item.img,
            category_id: item.id,
            quantity: item.id,
            currency_id: "ARS",
            unit_price: item.price
        }
        return nuevoElemento
    })
    let response = await fetch("https://api.mercadopago.com/checkout/preferences", {

        method: "POST",
        headers: {
            Authorization: "Bearer TEST-8010544934771252-060114-3fd5c26f83ed52d66b24164540e5d8ab-6941591"
        },
        body: JSON.stringify({
            items: productosToMap
        })
    })
    let data = await response.json()
    console.log(data)
    window.open(data.init_point, "_blank")
}
