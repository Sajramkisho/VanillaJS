const button = document.querySelector(".btn")
const input = document.querySelector(".input")
const content = document.querySelector(".content")

button.addEventListener("click", () => {
  let input_value = input.value * 0.15

  const output = input_value.toFixed(2)
  content.style.fontFamily = "Dancing script,sans-serif"

  content.innerHTML = `<h3>Don't give more than $${output} as tip to the waiter!!!</h3>`
})
