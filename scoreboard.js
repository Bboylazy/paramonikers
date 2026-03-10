const teams = parseInt(localStorage.getItem("teams")) || 2;

const scoreBody = document.getElementById("scoreBody");
const roundDisplay = document.getElementById("roundDisplay");

let currentRound = 1;

buildTable();
updateRoundDisplay();

function buildTable(){

const teamsData = JSON.parse(localStorage.getItem("teamsData")) || [];

for(let i=0;i<teams;i++){

let teamName = "Team " + (i+1);

if(teamsData[i] && teamsData[i].length > 0){
teamName = "Team <br>" + teamsData[i][0];
}

let row = document.createElement("tr");

row.innerHTML = `
<td>${teamName}</td>

<td>
<input type="number" class="scoreInput"
data-team="${i+1}" data-round="1"
oninput="updateScores()">
</td>

<td>
<input type="number" class="scoreInput"
data-team="${i+1}" data-round="2"
oninput="updateScores()">
</td>

<td>
<input type="number" class="scoreInput"
data-team="${i+1}" data-round="3"
oninput="updateScores()">
</td>

<td class="total" id="total${i+1}">0</td>
`;

scoreBody.appendChild(row);

}

}

function updateScores(){

for(let i=1;i<=teams;i++){

let total = 0;

for(let r=1;r<=3;r++){

let input = document.querySelector(
`input[data-team="${i}"][data-round="${r}"]`
);

let value = parseInt(input.value) || 0;

total += value;

}

document.getElementById("total"+i).innerText = total;

}

highlightWinner();

}

function highlightWinner(){

let highest = -Infinity;
let winner = null;

for(let i=1;i<=teams;i++){

let score = parseInt(
document.getElementById("total"+i).innerText
);

if(score > highest){

highest = score;
winner = i;

}

}

let rows = document.querySelectorAll("#scoreBody tr");

rows.forEach(r => r.classList.remove("winner"));

if(winner){
rows[winner-1].classList.add("winner");
}

}



function resetGame(){

document.querySelectorAll(".scoreInput").forEach(input=>{
input.value = "";
});

document.querySelectorAll(".total").forEach(total=>{
total.innerText = "0";
});

document.querySelectorAll("#scoreBody tr").forEach(row=>{
row.classList.remove("winner");
});

currentRound = 1;
updateRoundDisplay();

}

function newGame(){

localStorage.clear();

window.location.href = "index.html";

}

function goBack(){

window.location.href = "players.html";

}