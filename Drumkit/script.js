window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  audio.currentTime = 0
  audio.play()
})
