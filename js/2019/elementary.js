'use strict'
let scores = [0,0,0,0,0,0,0,0,0]

function update () {
  scores = [0,0,0,0,0,0,0,0,0]

  // Red, yellow, green and white passengers
  if (document.getElementById('npc1').value === 'p') {
    if (document.getElementById('dest1').value === 'r') {
      scores[0] = 5
    }
  } else if (document.getElementById('npc1').value === 'c') {
    scores[0] = 5
    if (document.getElementById('dest1').value === 'r') {
      scores[0] += 10
    }
    if (document.getElementById('s1').value === 's') {
      scores[0] += 5
    }
    if (scores[0] === 20) {
      scores[0] = 25
    }
  }

  if (document.getElementById('npc2').value === 'p') {
    if (document.getElementById('dest2').value === 'r') {
      scores[1] = 5
    }
  } else if (document.getElementById('npc2').value === 'c') {
    scores[1] = 5
    if (document.getElementById('dest2').value === 'r') {
      scores[1] += 10
    }
    if (document.getElementById('s2').value === 's') {
      scores[1] += 5
    }
    if (scores[1] === 20) {
      scores[1] = 25
    }
  }

  if (document.getElementById('npc3').value === 'p') {
    if (document.getElementById('dest3').value === 'r') {
      scores[2] = 5
    }
  } else if (document.getElementById('npc3').value === 'c') {
    scores[2] = 5
    if (document.getElementById('dest3').value === 'r') {
      scores[2] += 10
    }
    if (document.getElementById('s3').value === 's') {
      scores[2] += 5
    }
    if (scores[2] === 20) {
      scores[2] = 25
    }
  }

  if (document.getElementById('npc4').value === 'p') {
    if (document.getElementById('dest4').value === 'r') {
      scores[3] = 5
    }
  } else if (document.getElementById('npc4').value === 'c') {
    scores[3] = 5
    if (document.getElementById('dest4').value === 'r') {
      scores[3] += 10
    }
    if (document.getElementById('s4').value === 's') {
      scores[3] += 5
    }
    if (scores[3] === 20) {
      scores[3] = 25
    }
  }

  if (document.getElementById('npc5').value === 'p') {
    if (document.getElementById('dest5').value === 'r') {
      scores[4] = 5
    }
  } else if (document.getElementById('npc5').value === 'c') {
    scores[4] = 5
    if (document.getElementById('dest5').value === 'r') {
      scores[4] += 10
    }
    if (document.getElementById('s5').value === 's') {
      scores[4] += 5
    }
    if (scores[4] === 20) {
      scores[4] = 25
    }
  }

  // Calculate score for passengers
  let passengers = scores.reduce(function (partial_sum, a) { return partial_sum + a })

  // End position of robot and blue passenger
  if (passengers !== 0) {
    scores[5] = Number(document.getElementById('o-b').value)
    scores[8] = Number(document.getElementById('end').value)
  }

  // Batteries
  scores[6] = Number(document.getElementById('npc-bat').value)

  // Walls
  scores[7] = Number(document.getElementById('walls').value)

  // Calculate total score
  let total = scores.reduce(function (partial_sum, a) { return partial_sum + a })

  // Score can't be negative
  total = Math.max(total, 0)

  // Update table
  document.getElementById('result-1').innerHTML = String(scores[0])
  document.getElementById('result-2').innerHTML = String(scores[1])
  document.getElementById('result-3').innerHTML = String(scores[2])
  document.getElementById('result-4').innerHTML = String(scores[3])
  document.getElementById('result-5').innerHTML = String(scores[4])
  document.getElementById('result-b').innerHTML = String(scores[5])
  document.getElementById('result-battery').innerHTML = String(scores[6])
  document.getElementById('result-walls').innerHTML = String(scores[7])
  document.getElementById('result-end').innerHTML = String(scores[8])
  document.getElementById('result').innerHTML = String(total)
}

function load() {
  let inputs = document.getElementsByClassName('input')

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('change', update, false)
  }

  document.getElementById('scoreForm').addEventListener('reset', update, false)

  update()
}

function resetForm() {
  document.getElementById('scoreForm').reset()
  setTimeout(update)
}

document.addEventListener('DOMContentLoaded', load, false)
