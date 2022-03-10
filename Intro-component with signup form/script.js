const fname = document.getElementById("fname")
const lname = document.getElementById("lname")
const email = document.getElementById("email")
const password = document.getElementById("password")
const form = document.getElementById("form-id")
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

form.addEventListener("submit", (e) => {
  {
    if (fname.value === "" || fname.value === null) {
      e.preventDefault()
      fname.classList.add("red")
    } else {
      fname.classList.remove("fname")
    }
  }
  {
    if (lname.value === "" || lname.value === null) {
      e.preventDefault()
      lname.classList.add("red")
    } else {
      lname.classList.remove("red")
    }
  }

  {
    if (
      email.value.match(pattern) &&
      email.value !== "" &&
      email.value !== null
    ) {
      email.classList.remove("red")
    } else {
      e.preventDefault()
      email.classList.add("red")
    }
  }
  {
    if (password.value === "" || password.value === null) {
      e.preventDefault()
      password.classList.add("red")
    } else {
      password.remove("red")
    }
  }
})
// const btn = document.querySelector("button")
// btn.addEventListener("click", () => {
//   const input = document.getElementById("input-value").value
//   const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
//   if (input.match(pattern)) {
//     error.classList.add("valid")
//     error.classList.remove("invalid")
//   } else {
//     error.classList.add("invalid")
//     error.classList.remove("valid")
//   }
//   if (input === "") {
//     error.classList.remove("invalid")
//     error.classList.remove("valid")
//   }
// })
