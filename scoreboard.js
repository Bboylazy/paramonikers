const teams = parseInt(localStorage.getItem("teams")) || 2;

const scoreBody = document.getElementById("scoreBody");
const roundDisplay = document.getElementById("roundDisplay");

let currentRound = 1;
let timerInterval = null;
let timeLeft = 60;
let isRunning = false;
let isPaused = false;
setRecommendedTime();
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

function setRecommendedTime(){

let players = parseInt(localStorage.getItem("players")) || 4;

let recommended = 60;

if(players >= 4 && players <= 7){
recommended = 60;
}
else if(players <= 9){
recommended = 50;
}
else if(players <= 11){
recommended = 40;
}
else if(players <= 13){
recommended = 35;
}
else if(players <= 16){
recommended = 30;
}

let recommendedTime = document.getElementById("timerInput").value = recommended;

let recommendedText = document.getElementById("recommendedTime")

recommendedText.innerHTML = "Recommended time: " + recommended + " seconds";

}

function startTimer(){

clearInterval(timerInterval);

timeLeft = parseFloat(document.getElementById("timerInput").value) || 60;

updateTimerDisplay();

timerInterval = setInterval(()=>{

if(!isPaused){

timeLeft -= 0.01;

if(timeLeft <= 0){

timeLeft = 0;
updateTimerDisplay();

clearInterval(timerInterval);

playBeep();

document.getElementById("timerToggleBtn").innerText = "Start";

isRunning = false;

alert("Time's up!");

return;

}

updateTimerDisplay();

}

},10);

}

function updateTimerDisplay(){

let display = document.getElementById("timerDisplay");

display.innerText = timeLeft.toFixed(2);

if(timeLeft <= 10){
display.classList.add("timerWarning");
}
else{
display.classList.remove("timerWarning");
}

}

function toggleTimer(){

const btn = document.getElementById("timerToggleBtn");

if(!isRunning){

startTimer();
btn.innerText = "Pause";
isRunning = true;

}
else if(!isPaused){

isPaused = true;
btn.innerText = "Resume";

}
else{

isPaused = false;
btn.innerText = "Pause";

}

}


function pauseTimer(){

isPaused = !isPaused;

}

function resetTimer(){

clearInterval(timerInterval);

timeLeft = parseFloat(document.getElementById("timerInput").value) || 60;

isRunning = false;
isPaused = false;

document.getElementById("timerToggleBtn").innerText = "Start";

updateTimerDisplay();

}


function newGame(){

localStorage.clear();

window.location.href = "index.html";

}

function goBack(){

window.location.href = "players.html";

}


updateTimerDisplay();