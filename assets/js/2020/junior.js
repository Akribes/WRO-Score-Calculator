let scores = [0,0,0,0,0,0,0,0,0,0,0,0]
function get(id) { return document.getElementById(id) }

function update () {
  scores = [0,0,0,0,0,0,0,0,0,0,0,0]

  // Snow
  scores[0] = parseInt(get('snow').value)
  let depot = 12 - get('snow').selectedIndex
  
  get('snow-elevated').selectedIndex = Math.min(get('snow-elevated').selectedIndex, depot)
  for (i = 0; i <= 12; i++) {
    if (i > depot) get('snow-elevated').options[i].disabled = true
    else get('snow-elevated').options[i].disabled = false
  }
  scores[0] += get('snow-elevated').selectedIndex * (3 + parseInt(get('depot-damaged').value))

  // Abrasive material
  scores[1] = get('sections10-1').value
  let blackLeft = 3 - get('sections10-1').selectedIndex
  get('sections01-2').selectedIndex = Math.min(get('sections01-2').selectedIndex, blackLeft)
  for (i = 0; i <= 3; i++) {
    if (i > blackLeft) get('sections01-2').options[i].disabled = true
    else get('sections01-2').options[i].disabled = false
  }
  scores[4] = get('sections01-2').value
  
  scores[3] = get('sections01-1').value
  let blueLeft = 3 - get('sections01-1').selectedIndex
  get('sections10-2').selectedIndex = Math.min(get('sections10-2').selectedIndex, blueLeft)
  for (i = 0; i <= 3; i++) {
    if (i > blueLeft) get('sections10-2').options[i].disabled = true
    else get('sections10-2').options[i].disabled = false
  }
  scores[2] = get('sections10-2').value

  // Vehicles
  scores[5] = get('vehicle00-1').value
  scores[6] = get('vehicle00-2').value

  // Penalties
  scores[10] = get('trees').value

  // Finish
  let total = scores.reduce(function (partial_sum, a) { return parseInt(partial_sum) + parseInt(a) })
  if (total != 0 && get('end').value === 'y') scores[11] = 14
  else scores[11] = 0

  // Bonus
  scores[7] = get('vehicles').value
  scores[8] = get('dispensers').value
  scores[9] = get('borders').value
  
  // Calculate total score
  total = scores.reduce(function (partial_sum, a) { return parseInt(partial_sum) + parseInt(a) })

  // Score can't be negative
  total = Math.max(total, 0)

  // Update table
  get('result-snow').innerHTML = String(scores[0])
  get('result-ab1').innerHTML = String(scores[1])
  get('result-ab2').innerHTML = String(scores[2])
  get('result-ab3').innerHTML = String(scores[3])
  get('result-ab4').innerHTML = String(scores[4])
  get('result-v1').innerHTML = String(scores[5])
  get('result-v2').innerHTML = String(scores[6])
  get('result-vehicles').innerHTML = String(scores[7])
  get('result-dispensers').innerHTML = String(scores[8])
  get('result-borders').innerHTML = String(scores[9])
  get('result-trees').innerHTML = String(scores[10])
  get('result-end').innerHTML = String(scores[11])
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
