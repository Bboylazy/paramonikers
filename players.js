const container = document.getElementById("playerFields")

const playerCount = parseInt(localStorage.getItem("playerCount"))
const teamCount = parseInt(localStorage.getItem("teamCount"))

const playersPerTeam = Math.ceil(playerCount / teamCount)

let playerIndex = 1

for(let t=1; t<=teamCount; t++){

const teamDiv = document.createElement("div")

teamDiv.innerHTML = `<h2>Team ${t}</h2>`

for(let i=0; i<playersPerTeam && playerIndex<=playerCount; i++){

const input = document.createElement("input")

input.value = "Player" + playerIndex

input.id = "player"+playerIndex

teamDiv.appendChild(input)

playerIndex++

}

container.appendChild(teamDiv)

}

function savePlayers(){

let players = []

for(let i=1;i<=playerCount;i++){

players.push(document.getElementById("player"+i).value)

}

localStorage.setItem("players", JSON.stringify(players))

window.location.href="scores.html"

}