let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");
let signupForm  = document.querySelector("form.Signup")
let loginForm  = document.querySelector("form.login")

signupForm.classList.add("hide");

signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
    signupForm.classList.remove("hide");
    loginForm.classList.add("hide");
}); 

login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
    signupForm.classList.add("hide");
    loginForm.classList.remove("hide");
});








//Login

const formLogin = document.querySelector('form.login')
const usernameLogin = document.getElementById('usernameLogin')
const passwordLogin = document.getElementById('passwordLogin')
const password2Login= document.getElementById('password2Login')

function showError(input,message){
    let parent = input.parentElement
    let small = parent.querySelector('small')
    parent.classList.add('error')
    small.innerText =  message;
}
function showSuccess(input){
    let parent = input.parentElement
    let small = parent.querySelector('small')
    parent.classList.remove('error')
    small.innerText =  ''
}

function checkEmptyError(listInput){
    let isEmptyError = false;
    listInput.forEach(input => {
        input.value = input.value.trim()
        if(!input.value){
            isEmptyError = true
            showError(input,'You cannot leave it blank')
        }
        else{
            showSuccess(input)
        }
    });
    return isEmptyError
}

function checkEmailError(input){
    const regexEmail = /(([^<>()\[\]\\.,;:\s+@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/
    let isEmailError = false
    if(regexEmail.test(input.value)){
        showSuccess(input)
        return isEmailError = false
    }
    else{
        showError(input,"Email is required")
        return isEmailError = true
    }
    return isEmailError;
}

function checkPasswordError(input){
    const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\w\d\S]{8,}$/
    let isPasswordError = false
    if (regexPassword.test(input.value)){
        showSuccess(input)
        return isPasswordError = false
    }
    else{
        showError(input,"Password is required")
        return isPasswordError = true
    }
}
function checkMatchPasswordError(passI,passCf){
    if(passI !== passCf){
        showError(passCf,"Password Incorrect")
        return true
    }
    return false
}
formLogin.addEventListener('submit',function(e){
    e.preventDefault()
    
    let isEmptyError= checkEmptyError([usernameLogin, passwordLogin])
    let isPasswordError = checkPasswordError(passwordLogin)
    if(isEmptyError || isPasswordError ){
        //do nothing
    }
    else{
        //call API, logic,.....
    }
})

//Signup
const formSignup = document.querySelector('form.Signup')
const usernameSignup = document.getElementById('usernameSignup')
const emailSignup = document.getElementById('emailSignup')
const passwordSignup= document.getElementById('passwordSignup')
const password2Signup= document.getElementById('password2Signup')

function showError(input,message){
    let parent = input.parentElement
    let small = parent.querySelector('small')
    parent.classList.add('error')
    small.innerText =  message;
}
function showSuccess(input){
    let parent = input.parentElement
    let small = parent.querySelector('small')
    parent.classList.remove('error')
    small.innerText =  ''
}

function checkEmptyError(listInput){
    let isEmptyError = false;
    listInput.forEach(input => {
        input.value = input.value.trim()
        if(!input.value){
            isEmptyError = true
            showError(input,'You cannot leave it blank')
        }
        else{
            showSuccess(input)
        }
    });
    return isEmptyError
}

function checkEmailError(input){
    const regexEmail = /(([^<>()\[\]\\.,;:\s+@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/
    let isEmailError = false
    if(regexEmail.test(input.value)){
        showSuccess(input)
        return isEmailError = false
    }
    else{
        showError(input,"Email is required")
        return isEmailError = true
    }
    return isEmailError;
}

function checkPasswordError(input){
    const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\w\d\S]{8,}$/
    let isPasswordError = false
    if (regexPassword.test(input.value)){
        showSuccess(input)
        return isPasswordError = false
    }
    else{
        showError(input,"Password is required")
        return isPasswordError = true
    }
}
function checkMatchPasswordError(passI,passCf){
    if(passI !== passCf){
        showError(passCf,"Password Incorrect")
        return true
    }
    return false
}
formSignup.addEventListener('submit',function(e){
    e.preventDefault()
    
    let isEmptyError= checkEmptyError([usernameSignup, emailSignup, passwordSignup, password2Signup])
    let isEmailError = checkEmailError(emailLogin)
    let isPasswordError = checkPasswordError(passwordLogin)
    let isPasswoedMatch = checkMatchPasswordError(passwordSignup,password2Signup)
    if(isEmptyError || isEmailError || isPasswordError || isPasswoedMatch){
        //do nothing
    }
    else{
        //call API, logic,.....
    }
})