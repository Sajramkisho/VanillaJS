const image = document.getElementById('image')
const music = document.getElementById('audio')
const button = document.getElementById('button')

image.addEventListener('click', () => {
  music.play()
})

button.addEventListener('click', () => {
  if (random() === 0) {
    image.src = './images/drum.jpg'
    music.src = './images/drum.mp3'
  } else if (random() === 1) {
    image.src = './images/violin.jpg'
    music.src = './images/violin.mp3'
  } else if (random() === 2) {
    image.src = './images/harp.jpg'
    music.src = './images/harp.mp3'
  } else if (random() === 3) {
    image.src = './images/piano.jpg'
    music.src = './images/piano.mp3'
  } else if (random() === 4) {
    image.src = './images/flute.jpg'
    music.src = './images/flute.mp3'
  }
})

function random() {
  let randomNo = Math.floor(Math.random() * 5)
  console.log(randomNo)
  return randomNo
}
//add media queries also
//sometimes the image not getting loaded
