class Player  {
    constructor(nombre,dorsal,edad,estado) {
        this.nombre = nombre; 
        this.dorsal = dorsal; 
        this.edad = edad; 
        this.estado = estado;
    }
}
const players = [];

players.push(new Player("Bart",2,4,true));
players.push(new Player("Milhouse",3,5,false));
players.push(new Player("Martin",6,5,true));
players.push(new Player("Nelson",7,3,false));

console.log(players);