const form = document.getElementById("form")
const username = document.getElementById("Username")
const email = document.getElementById("Email")
const password = document.getElementById("Password")
const confirmPassword = document.getElementById("Current-password")

//functions
function showError(input, message) {
  const formElements = input.parentElement
  formElements.className = "form-elements error"
  const parent = formElements.querySelector("small")
  parent.innerText = message
}
function showSuccess(input) {
  const formElements = input.parentElement
  formElements.className = "form-elements success"
}
function checkRequired(inputArray) {
  inputArray.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${input.id} is required`)
    } else {
      showSuccess(input)
    }
  })
}
function checkPasswordLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${input.id} must contain atleast ${min} characters`)
  } else if (input.value.length > max) {
    showError(input, `${input.id} must contain atmost ${max} characters`)
  } else {
    showSuccess(input)
  }
}

function checkPasswordMatch(input_1, input_2) {
  if (input_1.value !== input_2.value) {
    showError(input_2, `${input_1.id} and ${input_2.id} are not same`)
  }
}

function checkUserNameLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${input.id} must contain atleast ${min} characters`)
  } else if (input.value.length > max) {
    showError(input, `${input.id} must contain atmost ${max} characters`)
  } else {
    showSuccess(input)
  }
}
function checkMail(input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (re.test(input.value.trim())) {
    showSuccess(input)
  } else {
    showError(input, `Enter valid email`)
  }
}

//event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault()

  checkRequired([username, email, password, confirmPassword])
  checkMail(email)
  checkUserNameLength(username, 5, 30)
  checkPasswordLength(password, 5, 15)
  checkPasswordMatch(password, confirmPassword)
})
