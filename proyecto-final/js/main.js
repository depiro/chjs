const contenedor = document.getElementById("instrumentosStock");
const tablaCarrito = document.getElementById("tablaCarrito");
const carrito = [];

const PRODUCTOS = [
    {
        id: 1,
        brand: "Gibson",
        model: `Marauder Custom 1976`,
        price: 15000,
        image: `https://www.springinstrumentos.com/images/productos/197/fotos/max_5660f07f95bdc9963ea788d2fe335ea4.jpg`
    },
    {
        id: 2,
        brand: "Gibson",
        model: `SG Standard '61 2020`,
        price: 5000,
        image: `https://www.springinstrumentos.com/images/productos/300/fotos/max_f56f524170abe6f61a23fad48a795fa3.jpg`
    },
    {
        id: 3,
        brand: "Gibson",
        model: `BR-9 Lapsteel 1950`,
        price: 1190,
        image: `https://www.springinstrumentos.com/images/productos/264/fotos/max_5857148defba089eb722c9353a1e9fa6.jpg?v=1638555537`
    },
    {
        id: 4,
        brand: `Fender`, 
        model: `Telecaster Custom Shop Relic '64 2009`, 
        price: 4490, 
        image: `https://www.springinstrumentos.com/images/productos/277/fotos/max_5518e1c8aa2630cd643832f5ccd8d2e7.jpg?v=1645023773`
    },
    {
        id: 5,
        brand: `Fender`, 
        model: `Telecaster Custom Shop 2006 Ri 1963 Sea Foam`, 
        price: 3490, 
        image: `https://www.springinstrumentos.com/images/productos/307/fotos/max_0733e52d13dfd1702c0a24edafe28acc.jpg?v=1650563790`
    },
    {
        id: 6,
        brand: `Fender`, 
        model: `Telecaster Custom Shop 2006 Ri 1963 Sea Foam`, 
        price: 3490, 
        image: `https://www.springinstrumentos.com/images/productos/304/fotos/max_a59ae22103c0234b6c547ef868cad0b5.jpg?v=1650473417`
    },
    {
        id: 7,
        brand: `Fender`, 
        model: `Telecaster Custom Shop 2006 Ri 1963 Sea Foam`, 
        price: 3490, 
        image: `https://www.springinstrumentos.com/images/productos/178/fotos/max_ad065a3537874b099c6dffc9bc3dbdad.jpg?v=1620185534`
    }
];

// Bienvenido "hero"
setTimeout(()=> {
    let bienvenida =  document.getElementById('bienvenida')
        bienvenida.innerHTML = `
        <h2>Compra y venta de instrumentos</h2>
        <p class="fs-5 col-md-8">Diego Rodriguez Pinedo - Comision 30360  <br> <span class="text-muted small">Este proyecto trata sobre una compra venta de guitarras, en la columna izquierda se puede ver las guitarras en stock y en la columna derecha aparecen las qeu carga el usuario atraves del formulario "Vender".</span></p>
        `
}, 500);

setTimeout(()=> {
    let nuevosInstrumentos =  document.getElementById('nuevosInstrumentos')
        nuevosInstrumentos.innerHTML = `
        <h2>Publicá tu guitarra</h2>
        <p>Si estas buscando vender tu instrumento, podemos ayudarte, cargá tu instrumento aquí y nos comunicaremos.</p>
        `
    let stockInstrumentos =  document.getElementById('stockInstrumentos')
        stockInstrumentos.innerHTML = `
        <h2>Instrumentos en venta</h2>
        <p>Aquí encontras nuestra selección de instrumentos vintage, únicos o interpretaciones modernas y finas de un clásico.</p>
        `
}, 3500);

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
                    <button onclick=agregarCarrito(${item.id}) type="button" class="btn btn-primary">Agregar al carrito</button>
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
            <td><button onclick=deleteTask(${item.id}) type="button" class="btn btn-sm btn-secondary">Borrar</button></td>
        </tr>`
    )
}

// carrito
const cargarProductos = (datos, nodo, Tabla) => {
    let acumulador = "";
    datos.forEach((el) => {
        acumulador += Tabla ? getRow(el) : getCard(el);
    })
    nodo.innerHTML = acumulador;

    // Valida si hay carrito guardado en LS
    let validarCarrito = localStorage.getItem("carrito");
    if (validarCarrito === null){
        const carrito = [];
    }else{
        const carrito = JSON.parse(validarCarrito);
    }
};





//  Guarda en Local Storage 
const carritoStorage = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
 }


const agregarCarrito = (id) => {
    const seleccion = PRODUCTOS.find(item => item.id === id);
    const busqueda = carrito.findIndex(el => el.id === id);
    
    if (busqueda === -1) {
        carrito.push({
            id: seleccion.id,
            brand: seleccion.brand,
            model: seleccion.model,
            price: seleccion.price,
            image: seleccion.image,
        })
    } else {
        carrito[busqueda].amount = carrito[busqueda].amount + 1
    }
    
    carritoStorage ()
    cargarProductos(carrito, tablaCarrito, true);
}
setTimeout(()=> {
    cargarProductos(PRODUCTOS, contenedor, false);
}, 3500)










//Guarda datos de la guitarra para la venta
document.getElementById('formTask').addEventListener('submit',saveGuitar);

function saveGuitar(e) { 
    let imageUrl = document.getElementById('imageUrl').value;
    let brand = document.getElementById('brand').value;
    let description = document.getElementById('description').value;
    let price = document.getElementById('price').value;
 
    const task = {
        imageUrl,
        brand,
        description,
        price
    };
    
    if (localStorage.getItem('tasks') === null) {
        let tasks = [];
        tasks.unshift(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.unshift(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    
    getTasks();
    document.getElementById("formTask").reset();
    e.preventDefault();
}

// Borrar guitarra publicada
function deleteTask(brand){
    let tasks = JSON.parse(localStorage.getItem(`tasks`));

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].brand == brand) {
            tasks.splice(i, 1);
        }  
    }
    localStorage.setItem(`tasks`, JSON.stringify(tasks));
    getTasks();
}


// Publica nueva guitarra a la venta
function getTasks () {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let tasksView  = document.getElementById('publicarInstrumento');

    tasksView.innerHTML = '';

    for (let i = 0; i < tasks.length; i++) {
        let imageUrl = tasks[i].imageUrl;
        let brand = tasks[i].brand;
        let description = tasks[i].description;
        let price = tasks[i].price;
        
        tasksView.innerHTML += `<div class="col">
            <div class="card">
                <img src="${imageUrl}" class="card-img-top" alt="${imageUrl}">
                <div class="card-body">
                    <h5 class="card-title">${brand}</h5>
                    <p class="card-text">${description}</p> 
                    <p class="card-text">U$S ${price}</p> 
                    <a onclick="deleteTask('${brand}')" class="btn btn-danger ml-5">Borrar</a>
                </div>
            </div>
        </div>`;
    }
}
setTimeout(()=> {
    getTasks();
}, 2500)


const actualizarCarrito = () => {
    carrito.forEach(prod => localStorage.setItem('carrito', JSON.stringify(carrito)))
}

const contadorCarrito =  document.getElementById('contadorCarrito')
contadorCarrito.innerText = JSON.parse(localStorage.getItem('carrito'))
console.log("resultado:" + carrito.length);

console.log("carrito:" + carrito.length);

