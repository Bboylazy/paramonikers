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

localStorage.setItem("playerCount", players.value)
localStorage.setItem("teamCount", teams.value)

window.location.href = "players.html"

}