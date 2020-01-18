let scores = [0,0,0,0,0,0,0,0,0,0,0,0]
function get(id) { return document.getElementById(id) }

function update () {
  scores = [0,0,0,0,0,0,0,0,0,0,0,0]

  // Rescue people
  for (i = 0; i <= 3; i++) {
    scores[i] = get('p'+(i+1)).value
  }

  // Water
  scores[4] = get('water').value
  scores[5] = get('sound').value
  
  // Trees
  for (i = 6; i <= 9; i++) {
    scores[i] = get('t'+(i-5)).value
  }
  
  // Calculate total score
  let total = scores.reduce(function (partial_sum, a) { return parseInt(partial_sum) + parseInt(a) })

  // Penalties
  scores[11] = - get('penalties').value 
  total += scores[11]

  
  // Start/finish area
  if (total != 0) {
    scores[10] = get('end').value
	total += parseInt(scores[10])
  }

  // Score can't be negative*/
  total = Math.max(total, 0)

  // Update table
  get('result-p1').innerHTML = String(scores[0])
  get('result-p2').innerHTML = String(scores[1])
  get('result-p3').innerHTML = String(scores[2])
  get('result-p4').innerHTML = String(scores[3])
  get('result-water').innerHTML = String(scores[4])
  get('result-sound').innerHTML = String(scores[5])
  get('result-t1').innerHTML = String(scores[6])
  get('result-t2').innerHTML = String(scores[7])
  get('result-t3').innerHTML = String(scores[8])
  get('result-t4').innerHTML = String(scores[9])
  get('result-end').innerHTML = String(scores[10])
  get('result-penalties').innerHTML = String(scores[11])
  get('result').innerHTML = String(total)
}

function load() {
  let inputs = document.getElementsByClassName('input')

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('change', update, false)
  }

  get('scoreForm').addEventListener('reset', update, false)

  update()
}

function resetForm() {
  get('scoreForm').reset()
  setTimeout(update)
}

document.addEventListener('DOMContentLoaded', load, false)
