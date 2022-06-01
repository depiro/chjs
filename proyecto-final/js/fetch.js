let productos

// const traerDatos = async () => {
//     let response = await fetch("../data/api.json")
//     // let data = await response.json()
//     // const data = response.data.results;
//     const data = await response.json();

//     productos = data

//     console.log(response)

//     data.forEach(character => {
//         const item = document.createElement("div");

//         item.innerHTML = ``;
        
//     });
// }
const lista = document.querySelector("#listado");
fetch(`./api.json`)
.then (response => response.json())
// .then (datajson => console.log(datajson))

.then((data) => {
    data.forEach((producto) => {
        const col = document.createElement("container");
        col.innerHTML = `
          <div class="col">
              <div class="card">
                  <img src="${producto.image}" class="card-img-top" alt="${producto.brand}">
                  <div class="card-body">
                      <h5 class="card-title">${producto.brand}</h5>
                      <p class="card-text">${producto.model}</p> 
                      <p class="card-text">U$S ${producto.price}</p> 
                      <button id="agregarCarrito" onclick="agregarCarrito(${producto.id}); toastyAgregar();" type="button" class="btn btn-primary">Agregar al carrito</button>
                  </div>
              </div>
          </div>
      `;
  
        lista.append(col);
    });
  });

// response.forEach(element => console.log(element));




// fetch(`./api.json`)
//   .then((res) => res.json())
//   .then((data) => {
//     data.forEach((producto) => {
//       const li = document.createElement("li");
//       li.innerHTML = `
//         <h4>${producto.nombre}</h4>
//         <p>${producto.precio}</p>
//         <p>Código: ${producto.id}</p>
//         <hr/>
//     `;

//       lista.append(li);
//     });
//   });







// const mercadoLibre = async () => {
    // const traerDatos = async () => {

    // let response = await fetch(`./api.json`)
    // let data = await response.json()
    // productos = data.results 

    // console.log(data)
    // container.innerHTML= ``
    // data.forEach(element => {
        
    // });

    
    // response.forEach(element => console.log(element));
    // PROBAR  CON FOREACH
    
    //     for (const product of productos) {
    //     let caja = document.createElement("div")
        
    //     caja.innerHTML = `
    //         <img src="${product.image}">
    //         <h2>${product.brand}</h2>
    //         <h2>${product.model}</h2>
    //         <p>$ ${product.price}</p>
    //     `
    //     container.append(caja)
    // }
    // console.log(data)
// }

// traerDatos()


// fetch("../json/api.json")
// .then(response => response.json())
// .then (json => console.log(json))

