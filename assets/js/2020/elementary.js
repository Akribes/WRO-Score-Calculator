let scores = [0,0,0,0,0,0,0,0,0]
function get(id) { return document.getElementById(id) }

function update () {
  scores = [0,0,0,0,0,0,0,0,0]

  // Fallen tree
  scores[0] = get('tree').value

  // Supplies
  for (i = 1; i <= 3; i++) {
    if (get('npc'+i).value === 'n') {
      get('hide'+i).style.visibility = 'hidden'
    } else {
      get('hide'+i).style.visibility = 'visible'
      if (get('target'+i).value === 'w') scores[i] = 4
      else if (get('npc'+i).value === 'p') scores[i] = 7
      else scores[i] = 12
    }
  }

  // Cables
  scores[4] = get('we1').value
  scores[5] = get('we2').value
  
  // Trees
  scores[7] = get('trees').value
  
  // Calculate total score
  let total = scores.reduce(function (partial_sum, a) { return parseInt(partial_sum) + parseInt(a) })

  // Start/finish area
  if (total != 0) {
    scores[8] = get('end').value === 'y' ? 11 : 0
	total += parseInt(scores[8])
  }

  // Old generator
  scores[6] = get('generator').value
  total += parseInt(scores[6])

  // Score can't be negative
  total = Math.max(total, 0)

  // Update table
  get('result-tree').innerHTML = String(scores[0])
  get('result-1').innerHTML = String(scores[1])
  get('result-2').innerHTML = String(scores[2])
  get('result-3').innerHTML = String(scores[3])
  get('result-c1').innerHTML = String(scores[4])
  get('result-c2').innerHTML = String(scores[5])
  get('result-generator').innerHTML = String(scores[6])
  get('result-trees').innerHTML = String(scores[7])
  get('result-end').innerHTML = String(scores[8])
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
