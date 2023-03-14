function loadRegistrationPage() {
    setTimeout(createAnimation,300);
    setElementsFromLocalStorage();
}

//STARTING ANIMATION

function createAnimation(){
    changeBackgroundColor();
    changeLogoColor();
    changeLogoPosition();
    showLogInElements();
}

function changeBackgroundColor(){
    document.getElementById('registrationContainer').style.backgroundColor= '#ffffff';
}

function changeLogoColor(){
// Get all path elements with the class join-logo-login-color
    let paths = document.querySelectorAll('.join-logo-login-color');

// Loop through all the path elements and change the fill attribute
    for (let i = 0; i < paths.length; i++) {
        paths[i].setAttribute('fill', '#4589ff');
    }
}

function changeLogoPosition(){
    document.getElementById('joinLogoLogin').classList.add('join-logo-login-new-position');
}

function showLogInElements(){
    document.getElementById('LogInContainer').style.opacity = '1';
    document.getElementById('registrationUpperRightInnerContainer').style.opacity = '1';
}

//PASSWORD

function checkNumberOfLetters(){
    let passwordInput = document.getElementById('passwordInput');
    let passwordToggle = document.getElementById("passwordToggle");

    if(passwordInput.value == 0){
        passwordToggle.src = "./assets/img/password-icon.svg";
    }else{
        chooseRightPasswordImgage();
    }
}

function chooseRightPasswordImgage(){
    let passwordToggle = document.getElementById("passwordToggle");

    if(passwordToggle.type === "password"){
        passwordToggle.src = "./assets/img/passwordHide.svg";
    }else{
        passwordToggle.src = "./assets/img/passwordShow.svg";
    }
}

function togglePasswordVisibility() {
    let passwordInput = document.getElementById("passwordInput");
    let passwordToggle = document.getElementById("passwordToggle");
    if(passwordInput.value.length > 0){
        if (passwordInput.type === "password") {
            // Show the password
            passwordInput.type = "text";
            passwordToggle.src = "./assets/img/passwordHide.svg";
          } else {
            // Hide the password
            passwordInput.type = "password";
            passwordToggle.src = "./assets/img/passwordShow.svg";
          }
    }
  }

// GUEST LOGIN

function guestLogIn(){
    document.getElementById('registrationContainer').style.display = 'none';
    currentUser = 'guest';
    insertSummary();
}

//LOG IN

function logIn(){
    let inputElementPassword = document.getElementById('passwordInput');
    let emailFromInput = document.getElementById('logInEmail').value;

    rememberMe();
    for (let i = 0; i < userList.length; i++) {
        if (userList[i].password == inputElementPassword.value && userList[i].email == emailFromInput) {
            currentUser = userList[i].firstName;
            document.getElementById('registrationContainer').style.display = 'none';
            insertSummary();
        }
        else if (userList[i].password !== inputElementPassword.value && inputElementPassword.placeholder == `Password`){
            toggleWrongPasswordAlert();
            togglePasswordPlaceholder();
        }
        else if (userList[i].password !== inputElementPassword.value && inputElementPassword.placeholder == `Ups! Try again`){
            inputElementPassword.value = ``;
        }
    }
    setElementsFromLocalStorage();
}


function toggleWrongPasswordAlert(){
    const divElement = document.getElementById('wrongPasswordContainer');
    
    if (divElement.innerHTML.trim() === '') {
        divElement.innerHTML = `Wrong password or email`;
    } else {
        divElement.innerHTML = ``;
    }
}

function togglePasswordPlaceholder(){
    const inputElement = document.getElementById('passwordInput');
    
    if (inputElement.placeholder.trim() === 'Password') {
        inputElement.value = ``;
        inputElement.placeholder = `Ups! Try again`;
    } else {
        inputElement.placeholder = `Password`;
    }
}

//REMEMBER ME

function rememberMe(){
    let emailFromInput = document.getElementById('logInEmail').value

    if (document.getElementById('rememberMe').checked) {
        localStorage.setItem('rememberCheckbox', 'true');
        localStorage.setItem('rememberEmail', emailFromInput);
    }else{
        localStorage.setItem('rememberCheckbox', '');
        localStorage.setItem('rememberEmail', '');
    }
}

function setElementsFromLocalStorage(){
    let checkboxStatus = localStorage.getItem('rememberCheckbox');
    let emailFromLocalStorage = localStorage.getItem('rememberEmail');
    let emailFromInput = document.getElementById('logInEmail');

    if (!emailFromLocalStorage || emailFromLocalStorage === '') {
        emailFromInput.value = ``;
    }else{
        emailFromInput.value = localStorage.getItem('rememberEmail');
    }

    if(checkboxStatus == 'true'){
        document.getElementById('rememberMe').checked = true;
    }else{
        document.getElementById('rememberMe').checked = false;
    }
}