let round = 1;

let team1Total = 0;
let team2Total = 0;

function submitRound(){

let t1 = Number(document.getElementById("team1Score").value);
let t2 = Number(document.getElementById("team2Score").value);

team1Total += t1;
team2Total += t2;

document.getElementById("team1Total").innerText = team1Total;
document.getElementById("team2Total").innerText = team2Total;

document.getElementById("team1Score").value = "";
document.getElementById("team2Score").value = "";

round++;

if(round <= 3){

document.getElementById("roundTitle").innerText = "Round " + round;

}else{

let winner = team1Total > team2Total ? "Team 1 Wins!" : "Team 2 Wins!";

alert(winner);

}

}

function resetGame(){

round = 1;
team1Total = 0;
team2Total = 0;

document.getElementById("team1Total").innerText = 0;
document.getElementById("team2Total").innerText = 0;

document.getElementById("roundTitle").innerText = "Round 1";

}