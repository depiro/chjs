//Actividad 1: El cuadrado ordinario
let lados = prompt("Escribí un numero cuadrado");

// for (let i = 1; i <= 4; i++) {
//     alert(i + "lados");
//     if (i >= 5) {
//         break
//     }
// }


// for (let i = 0; i < lados; i++) {
    
//     if (i > 3) {
//         break;
//     }
//     alert (lados + " "  + "lado");
// }

for (let i = 1; i < lados; i++) {
    if (i > 4 ) {
    break;  
    }
    document.write (i + "lado" + "<br>");
    alert (i + "lado" );
}