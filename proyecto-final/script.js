



$( document ).ready(function() {
    $('#nameModal').modal('toggle')
});

// const contenedor = document.getElementById("productos");
// const tablaCarrito = document.getElementById("tablaCarrito");
// const carrito = [];


// const PRODUCTOS = [
//     {
//         id: 1,
//         brand: "Gibson",
//         model: `Marauder Custom 1976`,
//         price: 15000,
//         image: `https://www.springinstrumentos.com/images/productos/197/fotos/max_5660f07f95bdc9963ea788d2fe335ea4.jpg`
//     },
//     {
//         id: 2,
//         brand: "Gibson",
//         model: `SG Standard '61 2020`,
//         price: 5000,
//         image: `https://www.springinstrumentos.com/images/productos/300/fotos/max_f56f524170abe6f61a23fad48a795fa3.jpg`
//     },
//     {
//         id: 3,
//         brand: "Gibson",
//         model: `BR-9 Lapsteel 1950`,
//         price: 1190,
//         image: `https://www.springinstrumentos.com/images/productos/264/fotos/max_5857148defba089eb722c9353a1e9fa6.jpg?v=1638555537`
//     },
//     {
//         id: 4,
//         brand: `Fender`, 
//         model: `Telecaster Custom Shop Relic '64 2009`, 
//         price: 4490, 
//         image: `https://www.springinstrumentos.com/images/productos/277/fotos/max_5518e1c8aa2630cd643832f5ccd8d2e7.jpg?v=1645023773`
//     },
//     {
//         id: 4,
//         brand: `Fender`, 
//         model: `Telecaster Custom Shop 2006 Ri 1963 Sea Foam`, 
//         price: 3490, 
//         image: `https://www.springinstrumentos.com/images/productos/307/fotos/max_0733e52d13dfd1702c0a24edafe28acc.jpg?v=1650563790`
//     },
//     {
//         id: 4,
//         brand: `Fender`, 
//         model: `Telecaster Custom Shop 2006 Ri 1963 Sea Foam`, 
//         price: 3490, 
//         image: `https://www.springinstrumentos.com/images/productos/304/fotos/max_a59ae22103c0234b6c547ef868cad0b5.jpg?v=1650473417`
//     },
//     {
//         id: 4,
//         brand: `Fender`, 
//         model: `Telecaster Custom Shop 2006 Ri 1963 Sea Foam`, 
//         price: 3490, 
//         image: `https://www.springinstrumentos.com/images/productos/178/fotos/max_ad065a3537874b099c6dffc9bc3dbdad.jpg?v=1620185534`
//     }
// ];


// const getCard = (item) => {
//     return (
//         `
//         <div class="col">
//             <div class="card">
//                 <img src="${item.image}" class="card-img-top" alt="${item.brand}">
//                 <div class="card-body">
//                     <h5 class="card-title">${item.brand}</h5>
//                     <p class="card-text">${item.model}</p> 
//                     <p class="card-text">U$S ${item.price}</p> 
//                     <button onclick=agregarCarrito(${item.id}) type="button" class="btn btn-primary">Agregar al carrito</button>
//                 </div>
//             </div>
//         </div>
//     `);
// };

// const getRow = (item) => {
//     return(
//         `
//     <tr>
//         <th scope="row">${item.id}</th>
//         <td>${item.brand}</td>
//         <td>${item.model}</td>
//         <td>$${item.price}</td>
//         <td><img style="width:20px" class="pic-table" src="${item.image}" alt="imagen"></td>
//     </tr>
//         `
//     )
// }

// // función flecha
// const cargarProductos = (datos, nodo, Tabla) => {
//     let acumulador = "";
//     datos.forEach((el) => {
//         acumulador += Tabla ? getRow(el) : getCard(el);
//     })
//     nodo.innerHTML = acumulador;
// };

// const agregarCarrito = (id) => {
//     const seleccion = PRODUCTOS.find(item => item.id === id);
//     const busqueda = carrito.findIndex(el => el.id === id);
    
//     if (busqueda === -1) {
//         carrito.push({
//             id: seleccion.id,
//             brand: seleccion.brand,
//             price: seleccion.price,
//             image: seleccion.image,
//         })
//     } else {
//         carrito[busqueda].amount = carrito[busqueda].amount + 1
//     }
    
//     cargarProductos(carrito, tablaCarrito, true);
// }
// cargarProductos(PRODUCTOS, contenedor, false);


// Prompt pide nombre de usuario al inicio
// let usuario = prompt("¡Bienvenido! ¿Cuál es tu nombre?");
// let welcome = document.getElementById("welcome");
// welcome.innerHTML = `<h1 class="fw-light">¡Bienvenido, ${usuario}!</h1><p class="lead text-muted">Vendemos y compramos guitarras</p>`;


// let usuario;
// let usuarioStorage = sessionStorage.getItem("usuario")

// if (usuarioStorage) {
//     let contenedor = document.createElement("div");
//     contenedor.innerHTML = `${sessionStorage.getItem("usuario")}`;
//     document.body.append(contenedor);
// }else{
//     // usuario = document.getElementById('inputNameUser');
//     usuario = prompt("ingrese nombre")
//     // sessionStorage.setItem("usuario",usuario);
//     sessionStorage.setItem('usuario', usuario);
// }





function guardarDatos(){
    localStorage.nombre = document.getElementById("nombre").value;
    localStorage.password = document.getElementById("password").value;
   }
   
function recuperarDatos(){
    if (localStorage.nombre != undefined) {
        document.getElementById("datos").innerHTML = "Nombre: " + localStorage.nombre;
    }
    else{
        document.getElementById("datos").innerHTML = "No has introducido tu nombres";
    }
}
//    onclick="guardarDatos()"
//    onclick="recuperarDatos()"
// btnRecover
// btnSave
recuperarDatos()
guardarDatos()

btnWelcome.addEventListener("onclick", guardarDatos() => {
//     document.getElementById("wrapWelcome").hidden = true;
//     document.getElementById("wrapContent").hidden = false;
//     e.preventDefault();
}


let boton = document.getElementById("btnPrincipal")
boton.addEventListener("click", respuestaClick)
function respuestaClick(){
  console.log("Respuesta evento");
}



<script>
let boton = document.getElementById("btnPrincipal")
boton.onclick = () =>{console.log("Respuesta 2")}
</script>


// btnWelcome.addEventListener("click", () => {
//     document.getElementById("wrapWelcome").hidden = true;
//     document.getElementById("wrapContent").hidden = false;
//     e.preventDefault();
//  });

//    <button type="button" onclick="guardarDatos()" value="Guardar datos">guardar</button>
   
//    <button type="button" onclick="recuperarDatos()" value="Recuperar datos">recuperar</button>






// function saveName(e) { 
//     let username = document.getElementById('inputNameUser');

//     const saveId = {
//         username
//     };
//         let saveIds = [];
//     localStorage.setItem('username', JSON.stringify(saveIds));
    
    // username.addEventListener('input', () => {
    //      localStorage.setItem('tasks', JSON.stringify(username.value));
    //      let usuario = JSON.parse(localStorage.getItem('usuario'));
    // })

    

    // if (localStorage.getItem('saveIds') === null) {
    //     let saveIds = [];
    //     saveIds.unshift(saveId);
    //     localStorage.setItem('saveIds', JSON.stringify(saveIds.value));
    // } else {
    //     let saveIds = JSON.parse(localStorage.getItem('saveIds.value'));
    //     saveIds.unshift(saveId);
    //     localStorage.setItem('saveIds', JSON.stringify(saveIds.value));
    // }
    
    // saveName();
    // document.getElementById("inputNameUser").reset();
    // e.preventDefault();
// }
// saveName();


// let userInput  = document.getElementById("inputNameUser")
// userInput.addEventListener('input', () => {
//     //  console.log(userInput.value)
//      localStorage.setItem('tasks', JSON.stringify(userInput.value));

//      let usuario = JSON.parse(localStorage.getItem('usuario'));
// })

// const estudiantes = []
// class Estudiante {
//     constructor(literal) {
//         this.nombre = literal.nombre;
//      }
// }
// const formulario = document.createElement("formi");
// formulario.innerHTML = `<input type="text">
//                         <input type="submit">`;
// formulario.onsubmit = (e) => {
//     e.preventDefault();
//     const inputs = e.target.children;
//     estudiantes.push(new Estudiante({ 
//         nombre: inputs[0].value}));
    
//     document.body.append(formulario);
// }

// btnWelcome.addEventListener("click", () => {
//     document.getElementById("wrapWelcome").hidden = true;
//     document.getElementById("wrapContent").hidden = false;
//     e.preventDefault();
// });



//CODIGO JS
// let userInput  = document.getElementById("inputNameUser")
// userInput.addEventListener('input', () => {
//     //  console.log(userInput.value)
//      localStorage.setItem('tasks', JSON.stringify(userInput.value));

//      let usuario = JSON.parse(localStorage.getItem('usuario'));
// })

// let tasks = [];
//         tasks.unshift(task);
//         localStorage.setItem('tasks', JSON.stringify(tasks));



//Guarda datos de la guitarra para la venta
// document.getElementById('formTask').addEventListener('submit',saveGuitar);

// function saveGuitar(e) { 
//     let imageUrl = document.getElementById('imageUrl').value;
//     let brand = document.getElementById('brand').value;
//     let description = document.getElementById('description').value;
//     let price = document.getElementById('price').value;
 
// // let brandGuitar = document.getElementById("brand-guitar");
// // let modelGuitar = document.getElementById("model-guitar");
// // let priceGuitar = document.getElementById("price-guitar");

//     const task = {
//         imageUrl,
//         brand,
//         description,
//         price
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
//     let tasksView  = document.getElementById('tasksxxx');
    
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
//                     <a onclick="deleteTask('${brand}')" class="btn btn-danger ml-5">Delete</a>
//                 </div>
//             </div>
//         </div>`;
//     }
// }

// getTasks();



