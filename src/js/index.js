const campo = document.getElementById('email')
const form = document.querySelector('form')
const emailSalvo = document.querySelector('span')
const card_1 = document.querySelector('.card')
const card_2 = document.querySelector('.card-2')
const validEmail = document.querySelector('.invalid-input')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (campo.value === '') {
        campo.classList.add('active')
        validEmail.classList.add('ativo')

    } else {
        campo.classList.remove('active')
        validEmail.classList.remove('ativo')

        emailSalvo.value = campo.value
        emailSalvo.innerHTML = emailSalvo.value

        card_1.classList.add('hide')
        card_2.classList.remove('hide')
    }
})