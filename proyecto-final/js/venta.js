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
                    <a onclick="deleteTask('${brand}')" class="btn btn-danger ml-5">Delete</a>
                </div>
            </div>
        </div>`;
    }
}

getTasks();
