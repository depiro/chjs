// Actividad 1, clase 5: La tienda

class Tienda {
    constructor (nombre,direccion,duenio,rubro) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.duenio = duenio;
        this.rubro = rubro;
    }
}

const tienda1 = new Tienda('Wallmart', 'Av. Siempreviva 200', 'pepe pistola', 'super');
const tienda2 = new Tienda('Super Vea', 'Av. Siempreviva 22', 'mister vea', 'gomeria');
const tienda3 = new Tienda('Changos', 'Illia  122', 'Don chango', 'floreria');

console.log(tienda1);
console.log(tienda2);
console.log(tienda3);
