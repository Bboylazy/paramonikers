const players = document.getElementById("playerCount")
const teams = document.getElementById("teamCount")

players.addEventListener("change", updateTeams)

function updateTeams(){

const count = parseInt(players.value)

if(count <= 10){
teams.value = 2
}else{
teams.value = 3
}

}

function saveSettings(){

let players = document.getElementById("playerCount").value;
let teams = document.getElementById("teamCount").value;

localStorage.setItem("players", players);
localStorage.setItem("teams", teams);

window.location.href = "players.html";

}