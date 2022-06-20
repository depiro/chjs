//Guarda datos de la guitarra para la venta 
document.getElementById('formTask').addEventListener('submit',saveGuitar);

function saveGuitar(e) { 
    let imageUrl = document.getElementById('imageUrl').value;
    let brand = document.getElementById('brand').value;
    let description = document.getElementById('description').value;
    let price = document.getElementById('price').value;
 
    const tasksGuitar = {
        imageUrl,
        brand,
        description,
        price,
    };
    
    if (localStorage.getItem('tasksGuitars') === null) {
        let tasksGuitars = [];
        tasksGuitars.unshift(tasksGuitar);
        localStorage.setItem('tasksGuitars', JSON.stringify(tasksGuitars));
    } else {
        let tasksGuitars = JSON.parse(localStorage.getItem('tasksGuitars'));
        tasksGuitars.unshift(tasksGuitar);
        localStorage.setItem('tasksGuitars', JSON.stringify(tasksGuitars));
    }
    
    getTasks();
    document.getElementById("formTask").reset();
    e.preventDefault();
}

// Publica nueva guitarra a la venta
function getTasks () {
    let tasksGuitars = JSON.parse(localStorage.getItem('tasksGuitars'));
    let tasksView  = document.getElementById('publicarInstrumento');

    tasksView.innerHTML = '';

    for (let i = 0; i < tasksGuitars.length; i++) {
        let imageUrl = tasksGuitars[i].imageUrl;
        let brand = tasksGuitars[i].brand;
        let description = tasksGuitars[i].description;
        let price = tasksGuitars[i].price;
        
        tasksView.innerHTML += `
        <div class="col">
            <div class="card">
                <img src="${imageUrl}" class="card-img-top" alt="${imageUrl}">
                <div class="card-body">
                    <h5 class="card-title">${brand}</h5>
                    <p class="card-text">${description}</p> 
                    <p class="card-text">U$S ${price}</p> 
                    <a onclick="deleteTask('${brand}'); toastyBorrar();" class="btn btn-danger ml-5">Borrar</a>
                </div>
            </div>
        </div>`;
        console.log(tasksView.length);
    }
    
}
setTimeout(()=> {
    getTasks();
}, 1500)

// Borrar guitarra publicada
function deleteTask(brand){
    let tasksGuitars = JSON.parse(localStorage.getItem(`tasksGuitars`));

    for (let i = 0; i < tasksGuitars.length; i++) {
        if (tasksGuitars[i].brand == brand) {
            tasksGuitars.splice(i, 1);
        }  
    }
    localStorage.setItem(`tasksGuitars`, JSON.stringify(tasksGuitars));
    getTasks();
}