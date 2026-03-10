function shuffle(array){
return array.sort(()=>Math.random()-0.5)
}

function generateTeams(){

const playersInput = document.getElementById("players").value
const teamCount = parseInt(document.getElementById("teamCount").value)

const players = playersInput.split(",").map(p=>p.trim())

const shuffled = shuffle(players)

const teams = Array.from({length:teamCount},()=>[])

shuffled.forEach((player,i)=>{
teams[i % teamCount].push(player)
})

displayTeams(teams)

}

function displayTeams(teams){

const container = document.getElementById("teamsContainer")

container.innerHTML=""

teams.forEach((team,i)=>{

const div = document.createElement("div")
div.className="team"

div.innerHTML=`
<h2>Team ${i+1}</h2>
<p>${team.join(", ")}</p>
`

container.appendChild(div)

})

}
