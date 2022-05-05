// Actividad 2, clase 5: Registro de tiendas
let ingresados = '';

class Tienda {
    constructor (nombre,direccion,duenio,rubro) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.duenio = duenio;
        this.rubro = rubro;
    }
}


for (let i = 0; i < 2; i++) {

    let tienda = new Tienda (prompt('nombre'),
                            prompt('direccion'),
                            prompt('duenio'),
                            prompt('rubro'));

    ingresados+= "Tienda: "+tienda.nombre+" "+
    "Direccion: "+tienda.direccion+" "+
    "Propitario: "+tienda.propietario+" "+
    "rubro: "+tienda.rubro+"\n";                            
}
alert (ingresados);
