const reset = document.getElementById('reset')
const score = document.querySelector('.score')
const message = document.querySelector('.message')
const heads = document.getElementById('heads')
const img = document.getElementById('img')

let headVal = 1
let tailVal = 0

let current_score = 0
reset.addEventListener('click', () => {
  score.innerText = '0'
  message.innerText = 'Start Guessing'

  img.src = './images/background.jpg'
  current_score = 0
})

heads.addEventListener('click', () => {
  guessing()
  if (val === true) {
    current_score += 10
    message.innerText = 'Good Guess...'
  } else {
    if (current_score != 0) {
      current_score -= 10
      message.innerText = 'Try Again...'
    }
  }
  score.innerHTML = current_score
})
tails.addEventListener('click', () => {
  guessing()
  if (val === false) {
    current_score += 10
    message.innerText = 'Good Guess...'
  } else {
    if (current_score != 0) {
      current_score -= 10
      message.innerText = 'Try Again...'
    }
  }
  score.innerHTML = current_score
})

let val = false
function guessing() {
  let randomNo = Math.floor(Math.random() * 2)

  if (randomNo === 1) {
    img.src = './images/heads.png'
    val = true
  } else {
    img.src = './images/tails.png'
    val = false
  }
}
