let playerCount = Number(localStorage.getItem("players"));
let teamCount = Number(localStorage.getItem("teams"));

let container = document.getElementById("teamsContainer");

let draggedPlayer = null;

createTeams();

function createTeams(){

container.innerHTML = "";

// Create team areas
for(let t=0; t<teamCount; t++){

let team = document.createElement("div");
team.className = "team";

let title = document.createElement("h2");
title.innerText = "Team " + (t+1);

team.appendChild(title);

team.addEventListener("dragover", e => e.preventDefault());
team.addEventListener("drop", dropPlayer);

container.appendChild(team);

}

// Create players
for(let i=1;i<=playerCount;i++){

addPlayer("Player " + i, i % teamCount);

}

}

function addPlayer(name, teamIndex){

let teams = document.querySelectorAll(".team");

let player = document.createElement("div");
player.className = "player";
player.draggable = true;

player.addEventListener("dragstart", dragStart);
player.addEventListener("touchstart", touchStart);

let input = document.createElement("input");
input.type = "text";
input.value = name;

player.appendChild(input);

teams[teamIndex].appendChild(player);

}

function dragStart(e){
draggedPlayer = e.currentTarget;
}

function dropPlayer(e){

e.preventDefault();

if(draggedPlayer){

e.currentTarget.appendChild(draggedPlayer);

}

}

function touchStart(e){

draggedPlayer = e.currentTarget;

document.addEventListener("touchmove", touchMove);
document.addEventListener("touchend", touchEnd);

}

function touchMove(e){

let touch = e.touches[0];

let element = document.elementFromPoint(touch.clientX, touch.clientY);

let team = element.closest(".team");

if(team && draggedPlayer){
team.appendChild(draggedPlayer);
}

}

function touchEnd(){

draggedPlayer = null;

document.removeEventListener("touchmove", touchMove);
document.removeEventListener("touchend", touchEnd);

}

function randomizeTeams(){

let players = document.querySelectorAll(".player");

let names = [];

players.forEach(p=>{
names.push(p.querySelector("input").value);
});

names.sort(()=>Math.random()-0.5);

createTeams();

let inputs = document.querySelectorAll(".player input");

inputs.forEach((input,i)=>{
input.value = names[i];
});

}

function startGame(){

let teams = [];

document.querySelectorAll(".team").forEach(team=>{

let teamPlayers = [];

team.querySelectorAll("input").forEach(input=>{
teamPlayers.push(input.value);
});

teams.push(teamPlayers);

});

localStorage.setItem("teamsData",JSON.stringify(teams));

window.location.href="scoreboard.html";

}