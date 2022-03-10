const secondHand = document.querySelector(".second-hand")
const minuteHand = document.querySelector(".minute-hand")
const hourHand = document.querySelector(".hour-hand")
function setDate() {
  const date = new Date()
  const seconds = date.getSeconds()
  const secondDeg = (seconds / 60) * 360 + 90
  secondHand.style.transform = `rotate(${secondDeg}deg)`

  const minutes = date.getMinutes()
  const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6 + 90
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`

  const hour = date.getHours()
  const hourDeg = (hour / 12) * 360 + (minutes / 60) * 30 + 90
  hourHand.style.transform = `rotate(${hourDeg}deg)`
}
setInterval(setDate, 1000)
setDate()
