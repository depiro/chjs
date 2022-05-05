//Actividad 2: Redondeo

function proceso(valor) {
    return Math.round(valor);
}

for (let i = 1; i < 5; i++) {
    let numero = prompt("ingresa un numero decimal");
    alert(proceso(numero));
    
}