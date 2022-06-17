const contenedor = document.getElementById("instrumentosStock");
const tablaCarrito = document.getElementById("tablaCarrito"); //contenedorCarrito
const botonVaciarCarrito = document.getElementById('vaciarCarrito')
const contadorCarrito =  document.getElementById('contadorCarrito')
let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})


// let items
// const lista = document.querySelector("#container");

// fetch(`data/api.json`)
// .then (response => response.json())
// .then (datajson => console.log(datajson))

// .then((datajson) => { datajson.forEach((producto) => {
//         const col = document.createElement("div");
        
//         col.innerHTML = `
//             <div class="card">
//                 <img src="${producto.image}" class="card-img-top" alt="${producto.brand}">
//                 <div class="card-body">
//                     <h5 class="card-title">${producto.brand}</h5> 
//                     <p class="card-text">${producto.model}</p> 
//                     <p class="card-text">U$S ${producto.price}</p> 
//                     <p class="card-text">U$S ${producto.id}</p> 
//                     <button id="agregarCarrito" onclick="agregarCarrito(${producto.id}); toastyAgregar();" type="button" class="btn btn-primary">Agregar al carrito</button>
//                 </div>
//             </div>
//       `;
//         lista.append(col);
//     });
// });






// Bienvenido "hero"
// setTimeout(()=> {
//     let bienvenida =  document.getElementById('bienvenida')
//         bienvenida.innerHTML = `
//         <h3>Proyecto final Coderhouse</h3>
//         <p class="fs-5 col-md-8">Diego Rodriguez Pinedo - Comision 30360  <br> <span class="text-muted small">Este proyecto trata sobre una compra venta de guitarras, en la columna izquierda se puede ver las guitarras en stock y en la columna derecha aparecen las que carga el usuario atraves del formulario "Vender".</span></p>
//         `
// }, 500);

// setTimeout(()=> {
//     let nuevosInstrumentos = document.getElementById('nuevosInstrumentos')
//         nuevosInstrumentos.innerHTML = `
//         <h2>Publicá tu guitarra</h2>
//         <p>Si estas buscando vender tu instrumento, podemos ayudarte, cargá tu instrumento aquí y nos comunicaremos.</p>
//         `
//     let stockInstrumentos = document.getElementById('stockInstrumentos')
//         stockInstrumentos.innerHTML = `
//         <h2>Instrumentos en venta</h2>
//         <p>Aquí encontras nuestra selección de instrumentos vintage, únicos o interpretaciones modernas y finas de un clásico.</p>
//         `
// }, 3500);

const getCard = (item) => {
    return (
        `
        <div class="col">
            <div class="card">
                <img src="${item.image}" class="card-img-top" alt="${item.brand}">
                <div class="card-body">
                    <h5 class="card-title">${item.brand}</h5>
                    <p class="card-text">${item.model}</p> 
                    <p class="card-text">U$S ${item.price}</p> 
                    <button id="agregarCarrito" onclick="agregarCarrito(${item.id}); toastyAgregar();" type="button" class="btn btn-primary">Agregar al carrito</button>
                </div>
            </div>
        </div>
    `);
};

const getRow = (item) => {
    return(
        `<tr>
            <th scope="row">${item.id}</th>
            <td>${item.brand}</td>
            <td>${item.model}</td>
            <td>$${item.price}</td>
            <td><img style="width:30px" class="pic-table" src="${item.image}" alt="imagen"></td>
            <td><button onclick="deleteTask(${item.id})" type="button" class="btn btn-sm btn-secondary">Borrar</button></td>
        </tr>`
    )
}

// // carrito
// const cargarProductos = (datos, nodo, Tabla) => {
//     let acumulador = "";
//     datos.forEach((el) => {
//         acumulador += Tabla ? getRow(el) : getCard(el);
//     })
//     nodo.innerHTML = acumulador;

//     // Valida si hay carrito guardado en LS
//     let validarCarrito = localStorage.getItem("carrito");
//     if (validarCarrito === null){
//         const carrito = [];
//     }else{
//         const carrito = JSON.parse(validarCarrito);
//     }
// };





// //  Guarda en Local Storage 
// const carritoStorage = () => {
//     localStorage.setItem("carrito", JSON.stringify(carrito))
//  }

// //  //  Agrega a carrito
// const agregarCarrito = (id) => {
//     const seleccion = productos.find((item) => item.id === id);
//     carrito.push(item)
//     //     const busqueda = carrito.findIndex(el => el.id === id);
//     console.log(carrito)
// }

//     if (busqueda === -1) {
//         carrito.push({
//             id: seleccion.id,
//             brand: seleccion.brand,
//             model: seleccion.model,
//             price: seleccion.price,
//             image: seleccion.image,
//         })
//     } else {
//         carrito[busqueda].amount = carrito[busqueda].amount + 1
//     }
    
//     carritoStorage ()
//     cargarProductos(carrito, tablaCarrito, true);
// }
// setTimeout(()=> {
//     cargarProductos(PRODUCTOS, contenedor, false);
// }, 3500)










//Guarda datos de la guitarra para la venta 
// document.getElementById('formTask').addEventListener('submit',saveGuitar);

// function saveGuitar(e) { 
//     let imageUrl = document.getElementById('imageUrl').value;
//     let brand = document.getElementById('brand').value;
//     let description = document.getElementById('description').value;
//     let price = document.getElementById('price').value;
//     let id = document.getElementById('id').value;
 
//     const task = {
//         imageUrl,
//         brand,
//         description,
//         price, 
//         id,
//     };
    
//     if (localStorage.getItem('tasks') === null) {
//         let tasks = [];
//         tasks.unshift(task);
//         localStorage.setItem('tasks', JSON.stringify(tasks));
//     } else {
//         let tasks = JSON.parse(localStorage.getItem('tasks'));
//         tasks.unshift(task);
//         localStorage.setItem('tasks', JSON.stringify(tasks));
//     }
    
//     getTasks();
//     document.getElementById("formTask").reset();
//     e.preventDefault();
// }

// // Borrar guitarra publicada
// function deleteTask(brand){
//     let tasks = JSON.parse(localStorage.getItem(`tasks`));

//     for (let i = 0; i < tasks.length; i++) {
//         if (tasks[i].brand == brand) {
//             tasks.splice(i, 1);
//         }  
//     }
//     localStorage.setItem(`tasks`, JSON.stringify(tasks));
//     getTasks();
// }


// // Publica nueva guitarra a la venta
// function getTasks () {
//     let tasks = JSON.parse(localStorage.getItem('tasks'));
//     let tasksView  = document.getElementById('publicarInstrumento');

//     tasksView.innerHTML = '';

//     for (let i = 0; i < tasks.length; i++) {
//         let imageUrl = tasks[i].imageUrl;
//         let brand = tasks[i].brand;
//         let description = tasks[i].description;
//         let price = tasks[i].price;
        
//         tasksView.innerHTML += `<div class="col">
//             <div class="card">
//                 <img src="${imageUrl}" class="card-img-top" alt="${imageUrl}">
//                 <div class="card-body">
//                     <h5 class="card-title">${brand}</h5>
//                     <p class="card-text">${description}</p> 
//                     <p class="card-text">U$S ${price}</p> 
//                     <a onclick="deleteTask('${brand}'); toastyBorrar();" class="btn btn-danger ml-5">Borrar</a>
//                 </div>
//             </div>
//         </div>`;
//     }
// }
// setTimeout(()=> {
//     getTasks();
// }, 2500)


// // const actualizarCarrito = () => {
// //     carrito.forEach(prod => localStorage.setItem('carrito', JSON.stringify(carrito)))
// // }

// const contadorCarrito =  document.getElementById('contadorCarrito')

// // cart array
// let cart = JSON.parse(localStorage.getItem("carrito")) || [];
// contadorCarrito.innerText = cart.length

// console.log("es cart:" + cart.length);
// console.log("resultado:" + carrito.length);
// console.log("carrito:" + carrito.length);



// FETCH A JSON
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
    
    // console.log(baseProductos)
    // console.log(productos)
    // console.log(carrito)

    //  Agrega a carrito
    // function agregarCarrito(id) {
    const agregarCarrito = (id) => {
        const agregarItem = baseProductos.find((item) => item.id === id);
        carrito.push(agregarItem);
        
        //     const busqueda = carrito.findIndex(el => el.id === id);
        // console.log(carrito)

        const busqueda = carrito.findIndex(el => el.id === id);

        if (busqueda === -1) {
            carrito.push({
                id: seleccion.id,
                brand: seleccion.brand,
                model: seleccion.model,
                price: seleccion.price,
                image: seleccion.image
            })
            console.log(carrito);
        } else {
            carrito[busqueda].amount = carrito[busqueda].amount + 1
            console.log( carrito);
        }
        actualizarCarrito();
    }
    console.log(carrito);
})
// Funcion eliminar del carro
const eliminarDelCarro = (id) => {
    const item = carrito.find((item) => item.id === id)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)

    actualizarCarrito()
}

// Botón vaciar carrito
botonVaciarCarrito.addEventListener ('click', () => {
    carrito.length = 0

    actualizarCarrito()
})

// Contador carrito
//const contadorCarrito = document.getElementById('contadorCarrito')







const actualizarCarrito = () => {
    tablaCarrito.innerHTML = ""

    carrito.forEach((item) => {
        const trTable = document.getElementById("tablaCarrito");
        // div.classList.add("productoEnCarrito")
        trTable.innerHTML = `
        <td>
            <th >${item.id}</th>
            <tr>${item.brand}</tr>
            <tr>${item.model}</tr>
            <tr>${item.price}</tr>
            <tr><img style="width:30px" class="pic-table" src="${item.image}" alt="imagen"></tr>
            <tr><button onclick="eliminarDelCarro(${item.id}), toastyBorrar()" type="button" class="btn btn-sm btn-secondary">Borrar</button></tr>
        </td>
        `
        tablaCarrito.append()

        localStorage.setItem('carrito', JSON.stringify(carrito))


//     // Valida si hay carrito guardado en LS
//     let validarCarrito = localStorage.getItem("carrito");
//     if (validarCarrito === null){
//         const carrito = [];
//     }else{
//         const carrito = JSON.parse(validarCarrito);
//     }
    });
    contadorCarrito.innerText = carrito.length
}



// carrito
// const cargarProductos = (datos, nodo, Tabla) => {
//     let acumulador = "";
//     datos.forEach((el) => {
//         acumulador += Tabla ? getRow(el) : getCard(el);
//     })
//     nodo.innerHTML = acumulador;

//     // Valida si hay carrito guardado en LS
//     let validarCarrito = localStorage.getItem("carrito");
//     if (validarCarrito === null){
//         const carrito = [];
//     }else{
//         const carrito = JSON.parse(validarCarrito);
//     }
// };






// FETCH A MERCADOPAGO
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

