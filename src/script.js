let formSignIn = document.querySelector('#signin');

let formSignUp = document.querySelector('#signup');

let btnColor = document.querySelector('.btn-color')

document.querySelector('#btn-signin')
.addEventListener('click', () => {
    formSignIn.style.left = "25px"
    formSignUp.style.left = '450px'
    btnColor.style.left = '0px'
})

document.querySelector('#btn-signup')
.addEventListener('click', () => {
    formSignIn.style.left = "-450px"
    formSignUp.style.left = '25px'
    btnColor.style.left = '110px'
})