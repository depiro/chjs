const team = [];
let player = "";

while (player != "ESC") {
    team.push(player);
    player = prompt(`introduzca el nombre de los players`);
    
}
    for (let i = 1; i < team.length; i++) {
        console.log(i + ` ` + team[i]);
    }
