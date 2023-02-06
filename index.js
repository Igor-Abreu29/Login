let button = document.querySelector("#submit")

button.addEventListener('submit', validateForm)

function validateForm(e) {
  e.preventDefault()

  const nameInput = document.querySelector("#text")
  const emailInput = document.querySelector("#email")
  const passInput = document.querySelector("#password")

  if (nameInput.value.length == 0 
    || emailInput.value.length == 0 
    || validadeTotalOfNumbers(passInput.value.length, 6)) {
      nameInput.classList.add('nameInput')
      emailInput.classList.add('emailInput')
      passInput.classList.add('passwordInput')
  } else {
    alert("Formulário preenchido corretamente!")
    location.href = 'https://github.com/Igor-Abreu29'

    nameInput.value = ''
    emailInput.value = ''
    passInput.value = ''
  }

}

function validadeTotalOfNumbers(total, number) {
  if (total < number) {
    alert("A senha deve possuir no minímo 6 caracters")
    return true
  }
  return false
}