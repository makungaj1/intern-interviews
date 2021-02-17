const WELCOME_TEXTS = ['Welcome!', 'Bienvenue!', 'Boyeyi Malamu!']
const TEXT_TO_BE_MODIFIED = document.getElementById('welcome-text')
const TIME = 5000
let index = 0

function changeText () {
  if (index < WELCOME_TEXTS.length - 1) index++
  else index = 0

  TEXT_TO_BE_MODIFIED.innerHTML = WELCOME_TEXTS[index]
  setTimeout(changeText, TIME)
}

window.onload = changeText
