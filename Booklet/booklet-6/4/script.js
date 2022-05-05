class Player  {
    constructor(nombre,dorsal,edad,estado) {
        this.nombre = nombre; 
        this.dorsal = dorsal; 
        this.edad = edad; 
        this.estado = estado;
    }
}
const players = [];

players.push(new Player("BART",2,4,true));
players.push(new Player("Milhouse",3,5,false));
players.push(new Player("MARTIN",6,5,true));
players.push(new Player("Nelson",7,3,false));

console.log(players);



function buscarJugador(equipo, player) {
    return equipo.find(objeto => objeto.nombre === player.toUpperCase());
}
for (let i = 1; i < 3; i++) {
    let busqueda = buscarJugador(players, prompt('INGRESAR NOMBRE DE JUGADOR'));

    if(busqueda != undefined){
        alert('JUGADOR '+busqueda.nombre+' CAMISETA '+busqueda.dorsal+' EDAD '+busqueda.edad);
    }else{
        alert('NO EXISTE JUGADOR CON ESE NOMBRE');
    }


    
}
