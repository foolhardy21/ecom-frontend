const togglePassword = document.querySelector('#toggle-pass')
const passwordInput = document.querySelector('#pass-input')
const confirmPasswordInput = document.querySelector('#cpass-input')

togglePassword.addEventListener('change', () => {
    if(passwordInput.type === 'password') {
        passwordInput.type = 'text'
        confirmPasswordInput.type = 'text' 
    } else {
        passwordInput.type = 'password'
        confirmPasswordInput.type = 'password' 
    }
})
