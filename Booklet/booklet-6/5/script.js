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

function filterPlayers(equipo, edad) {
    return equipo.filter(objeto => objeto.edad == parseInt(edad));
}

function listPlayers(players) {
    let lista = "";
    for (const player of players) {
        lista += 'jugador ' + player.nombre + ' dorsal ' + player.dorsal + ' edad ' + player.edad + '\n'
    }
    return lista;
}

for (let i = 1; i < 5; i++) {
    let filtro = filterPlayers(players, prompt('INGRESAR la edad del JUGADOR'));

    if(filtro.length > 0){
        alert(listPlayers(filtro));
    }else{
        alert('NO EXISTE JUGADOR CON ESE NOMBRE');
    }
}
