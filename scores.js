const table = document.getElementById("scoreTable")

const teamCount = parseInt(localStorage.getItem("teamCount"))

let header = `
<tr>
<th>Team</th>
<th>Round 1</th>
<th>Round 2</th>
<th>Round 3</th>
<th>Total</th>
</tr>
`

table.innerHTML = header

for(let i=1;i<=teamCount;i++){

table.innerHTML += `
<tr>
<td>Team ${i}</td>
<td><input type="number" value="0" onchange="updateTotal(this)"></td>
<td><input type="number" value="0" onchange="updateTotal(this)"></td>
<td><input type="number" value="0" onchange="updateTotal(this)"></td>
<td class="total">0</td>
</tr>
`

}

function updateTotal(input){

const row = input.parentElement.parentElement

const nums = row.querySelectorAll("input")

let total = 0

nums.forEach(n=> total += parseInt(n.value))

row.querySelector(".total").innerText = total

}