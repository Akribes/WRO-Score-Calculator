let score = 0

const update = function () {
  let questions = document.getElementsByClassName('question')

  // TODO: add up all values

  document.getElementById('result').innerHTML = score
}

function load() {
  let inputs = document.getElementsByClassName('input')

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', update, false)
  }

  document.getElementById('result').innerHTML = score
}

document.addEventListener('DOMContentLoaded', load, false)