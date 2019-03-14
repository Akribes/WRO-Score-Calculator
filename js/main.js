'use strict'
function updateLang () {
  let newUrl = window.location.origin + '/WRO-Score-Calculator/'
  if (document.getElementById('lang').value !== '') {
    newUrl += document.getElementById('lang').value + window.location.pathname.replace('WRO-Score-Calculator/', '')
  }
  window.location.href = newUrl
}
