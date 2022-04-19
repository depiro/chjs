// Desafio: CREAR UN ALGORITMO UTILIZANDO UN CICLO
//ingresar un numero del 1 al 10 para conocer la tabla de multiplicación
let numero = prompt("ingrese un numero del 1 al 10 para conocer la tabla de multiplicación");
let resultado;

for (let i = 1; i < 10 ; i++) {
    resultado = numero * i;
    document.write(numero +" X "+ i +" = "+ resultado + "</br>");

    if (numero != parseInt(numero)) {
        alert("ingresaste un caracter no valido");
        break;
    }
}
