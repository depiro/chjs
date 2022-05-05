// Actividad 5: El cliente

class Cliente {
    constructor(nombre, presupuesto, tarjeta, tel){
        this.nombre = nombre;
        this.presupuesto = parseFloat(presupuesto);
        this.tarjeta = tarjeta;
        this.tel = tel;
    }
    transferirDinero(valor) {
        if ((this.presupuesto >= 0) && (valor < this.presupuesto)){
            this.presupuesto -= valor;
            return valor;
        }else {
            return alert("El cliente" + " NO te puede pagar");
        }
    }
}

const cliente1 = new Cliente("John Doe", "1000", "true", "666-777-888");
const cliente2 = new Cliente("Ned Flander", "2000", "false", "333-555-333");
const cliente3 = new Cliente("Homero Thompson", "3000", "true", "222-344-775");

for (let i = 0; i < 5; i++) {
    let entrada = parseFloat(prompt("ingrese monto de $"));
 
    if (cliente1.transferirDinero(entrada)){
        alert("EL CLIENTE " + cliente1.nombre+ " TE PUEDE PAGAR "+entrada);
    }
    if (cliente2.transferirDinero(entrada)){
        alert("EL CLIENTE " + cliente2.nombre+ " TE PUEDE PAGAR "+entrada);
    }
    if (cliente3.transferirDinero(entrada)){
        alert("EL CLIENTE " + cliente3.nombre+ " TE PUEDE PAGAR "+entrada);
    }
}
