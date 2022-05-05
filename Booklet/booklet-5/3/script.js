//Actividad 3: abierto y cerrado

// let ingresados = '';
class Tienda {
    constructor (nombre,direccion,duenio,rubro) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.duenio = duenio;
        this.rubro = rubro;
    }

    estaAbierto(hora){
        if (((hora  >= 8) && (hora  <= 12))||((hora  >= 15) && (hora  <= 19))) {
            return true;
        }
        return false;
    }

}

const tienda4 = new Tienda("33 cents Store", "Cheap 231", "Barato SRL","Ropa");
for (let index = 0; index < 3 ; index++) {
    
    let entrada = parseInt(prompt("INGRESAR HORA EN PUNTO"));
    
    if(tienda4.estaAbierto(entrada)){
         alert("LA TIENDA ESTA ABIERTA A LAS "+entrada)
    }else{
        alert("LA TIENDA ESTA CERRADA A LAS "+entrada)
    }
}



// for (let i = 0; i < 2; i++) {

//     let tienda = new Tienda (prompt('nombre'),
//                             prompt('direccion'),
//                             prompt('duenio'),
//                             prompt('rubro'));

//     ingresados+= "Tienda: "+tienda.nombre+" "+
//     "Direccion: "+tienda.direccion+" "+
//     "Propitario: "+tienda.propietario+" "+
//     "rubro: "+tienda.rubro+"\n";                            
// }
// alert (ingresados);

