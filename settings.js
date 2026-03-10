const players = document.getElementById("playerCount")
const teams = document.getElementById("teamCount")

players.addEventListener("change", updateTeams)

function updateTeams(){

const count = parseInt(players.value)
const cardDistribution = document.getElementById("cardDistribution");

if(count <= 10){
teams.value = 2
}else{
teams.value = 3
}

}

let dealAmount = 1;
let keepAmount = 1;


if(playerCount>=4 && playerCount<=8){
    dealAmount=10
    keepAmount=4;
    document.createElement("Deal "+dealAmount+" cards");

    let cardDiv = document.createElement("div");
    cardDiv.innerHTML = row.innerHTML = `
        abc123
        `;

}


function updateCardInfo(){

let players = parseInt(document.getElementById("playerCount").value);
let info = document.getElementById("cardInfo");

if(players >= 4 && players <= 8){

info.innerText = "Deal 10\nKeep 6\nTotal cards "+players*6;


}
else if(players >= 9 && players <= 10){

info.innerText = "Deal 9\nKeep 5\nTotal cards "+players*5;

}
else if(players >= 11 && players <= 13){

info.innerText = "Deal 8\nKeep 4\nTotal cards "+players*4;

}
else if(players >= 14 && players <= 16){

info.innerText = "Deal 7\nKeep 3\nTotal cards "+players*3;

}
else{

info.innerText = "";

}

}



function saveSettings(){

let players = document.getElementById("playerCount").value;
let teams = document.getElementById("teamCount").value;

localStorage.setItem("players", players);
localStorage.setItem("teams", teams);

window.location.href = "players.html";

}

updateCardInfo();