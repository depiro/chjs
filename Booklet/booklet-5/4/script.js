//Actividad 4: validar propietario

class Tienda{
    constructor(nombre, direccion, propietario, rubro){
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
      esPropietario(nombre){
        return this.propietario == nombre;
    }
}
const tienda1 = new Tienda("Kwik-E-Mart", "Park 123", "Apu", "Almacen");
const tienda2 = new Tienda("Edna's Edibles", "PEREZ 323", "Edna Krabappel", "Panaderia");
const tienda3 = new Tienda("Springfield Mall", "Hall 231", "Mr. Burns", "Shopping");

for (let index = 0; index < 5; index++) {
    let entrada = prompt("INGRESAR NOMBRE DE PROPITARIO");
    
    // switch (entrada) {
    //     case (tienda1.esPropietario(entrada)):
    //          alert(entrada + " ES PROPIETARIO DE LA TIENDA " + tienda1.nombre);
    //         break;
    //     case (tienda2.esPropietario(entrada)):
    //         alert(entrada + " ES PROPIETARIO DE LA TIENDA " + tienda2.nombre);
    //         break;
    //     case (tienda3.esPropietario(entrada))
    //         alert(entrada + " ES PROPIETARIO DE LA TIENDA " + tienda3.nombre);
    //         break;
    //     default:
    //         alert("no es nadie");
    //         break;
    // }
    for (let index = 0; index < 5; index++) {
        let entrada = prompt("INGRESAR NOMBRE DE PROPITARIO");
    
        if (tienda1.esPropietario(entrada)){
            alert(entrada + " ES PROPIETARIO DE LA TIENDA " + tienda1.nombre);
        }
        if (tienda2.esPropietario(entrada)){
            alert(entrada + " ES PROPIETARIO DE LA TIENDA " + tienda2.nombre);
        }
        if (tienda3.esPropietario(entrada)){
            alert(entrada + " ES PROPIETARIO DE LA TIENDA " + tienda3.nombre);
        }
    }
}



