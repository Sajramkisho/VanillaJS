const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissor = document.getElementById('scissor')

const replay = document.getElementById('replay')
const reseting = document.getElementById('reset')

const computerScore = document.getElementById('computer-score')
const playerScore = document.getElementById('player-score')

let computer_score = 0
let player_score = 0

function reset() {
  rock.src = './images/rock.png'
  paper.src = './images/paper.png'
  scissor.src = './images/scissors.png'
}

rock.addEventListener('click', () => {
  if (random() === 0) {
    rock.src = './images/tie.png'
    paper.src = './images/tie.png'
    scissor.src = '/images/tie.png'
  } else if (random() === 1) {
    rock.src = './images/paper-1.png'
    paper.src = './images/paper-1.png'
    scissor.src = './images/paper-1.png'

    computer_score += 5

    computerScore.innerHTML = 'Computer: ' + computer_score
  } else if (random() === 2) {
    rock.src = './images/rock-2.png'
    paper.src = './images/rock-2.png'
    scissor.src = './images/rock-2.png'

    player_score += 5

    playerScore.innerHTML = 'Player: ' + player_score
  }
})

paper.addEventListener('click', () => {
  if (random() === 0) {
    rock.src = './images/paper-2.png'
    paper.src = './images/paper-2.png'
    scissor.src = './images/paper-2.png'

    player_score += 5

    playerScore.innerHTML = 'Player: ' + player_score
  } else if (random() === 1) {
    rock.src = './images/tie.png'
    paper.src = './images/tie.png'
    scissor.src = './images/tie.png'
  } else if (random() === 2) {
    rock.src = './images/scissors-1.png'
    paper.src = './images/scissors-1.png'
    scissor.src = './images/scissors-1.png'

    computer_score += 5
    computerScore.innerHTML = 'Computer: ' + computer_score
  }
})
scissor.addEventListener('click', () => {
  if (random() === 0) {
    rock.src = './images/rock-1.png'
    paper.src = './images/rock-1.png'
    scissor.src = './images/rock-1.png'

    computer_score += 5
    computerScore.innerHTML = 'Computer: ' + computer_score
  } else if (random() === 1) {
    rock.src = './images/paper-2.png'
    paper.src = './images/paper-2.png'
    scissor.src = './images/paper-2.png'

    player_score += 5
    playerScore.innerHTML = 'Player: ' + player_score
  } else if (random() === 2) {
    rock.src = './images/tie.png'
    paper.src = './images/tie.png'
    scissor.src = './images/tie.png'
  }
})

replay.addEventListener('click', () => {
  rock.src = './images/rock.png'
  paper.src = './images/paper.png'
  scissor.src = './images/scissors.png'
})
reseting.addEventListener('click', () => {
  rock.src = './images/rock.png'
  paper.src = './images/paper.png'
  scissor.src = './images/scissors.png'
  playerScore.innerHTML = 'Player: 0'
  computerScore.innerHTML = 'Computer: 0'
})

function random() {
  const randomNo = Math.floor(Math.random() * 3)

  return randomNo
}
