const a = document.querySelectorAll(".img")

a.forEach((panels) => {
  panels.addEventListener("click", () => {
    remove()
    panels.classList.add("active")
  })
})

function remove() {
  a.forEach((panels) => {
    panels.classList.remove("active")
  })
}
