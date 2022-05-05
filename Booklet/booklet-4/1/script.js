// let caracter = prompt("ingresa un caracter");

function entrada() {
    return parseInt(prompt("ingresa un numero"));
    // console.log("Funcion 1 e ingresaste" + " " + caracter);
    
}


function procesamiento(entrada) {
    entrada = Math.pow(entrada,2);
    return ("El cuadrado del numero ingresado es " + entrada);
}

function salida(valor) {
    document.write (valor);
}
salida(procesamiento(entrada()));





// let tienda = 0;

// function sumar(primerNumero, segundoNumero){
//     resultado = primerNumero + segundoNumero;
// }
// resultado = sumar(6,6);
// console.log(resultado);


// let resultado = 0;

// function restar(primerNumero, segundoNumero){
//     let resultado = primerNumero - segundoNumero;
//     return resultado * 2;
// }

// console.log(restar(20,10));