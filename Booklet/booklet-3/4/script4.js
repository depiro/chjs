// Actividad 3: El innombrable
let personajes = '';
let ingresados = '';

while (personajes != 'voldemort') {
    ingresados += personajes +"\n";
    personajes = prompt("ingresar personajes de harry potter");
}
alert(ingresados);
