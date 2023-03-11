function loadRegistrationPage() {
    loadRegistrationPageHTML();
    setTimeout(createAnimation,300);
}

function loadRegistrationPageHTML() {
    document.body.innerHTML += loadRegistrationPageBackgroundAndLogo();
}

function loadRegistrationPageBackgroundAndLogo() {
    return /*html*/`
        <div class="registration-container" id="registrationContainer">
            <svg class="join-logo-login" id="joinLogoLogin" viewBox="0 0 47 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="join-logo-login-color" d="M33.6743 0H23.2637V11.9773H33.6743V0Z" fill="white"/>
                <path class="join-logo-login-color" d="M23.2638 21.7183H33.6744V38.6103C33.722 42.675 32.5651 46.6622 30.351 50.0648C28.1648 53.3708 23.9445 57.3042 16.1365 57.3042C7.63179 57.3042 2.67473 53.2823 0 51.0783L6.56671 42.9782C9.17737 45.1098 11.6919 46.8633 16.1765 46.8633C19.572 46.8633 20.9254 45.4798 21.7182 44.2732C22.796 42.5973 23.3535 40.6374 23.3198 38.6425L23.2638 21.7183Z" fill="white"/>
                <path class="join-logo-login-color" d="M17.9543 14.1567H7.5437V24.6137H17.9543V14.1567Z" fill="white"/>
                <path class="join-logo-login-color" d="M39.128 52.3974C39.128 54.6255 37.9988 55.8241 36.4212 55.8241C34.8436 55.8241 33.8105 54.4003 33.8105 52.51C33.8105 50.6197 34.8756 49.1235 36.5093 49.1235C38.143 49.1235 39.128 50.5956 39.128 52.3974ZM35.0198 52.4859C35.0198 53.8292 35.5563 54.8186 36.4773 54.8186C37.3982 54.8186 37.9187 53.7729 37.9187 52.4054C37.9187 51.2069 37.4383 50.0808 36.4773 50.0808C35.5163 50.0808 35.0198 51.1667 35.0198 52.4859Z" fill="white"/>
                <path class="join-logo-login-color" d="M41.1941 49.2202V55.7196H40.0409V49.2202H41.1941Z" fill="white"/>
                <path class="join-logo-login-color" d="M42.4434 55.7196V49.2202H43.7247L45.1021 51.8988C45.4567 52.5992 45.7721 53.3189 46.047 54.0546V54.0546C45.975 53.2502 45.9429 52.3251 45.9429 51.2955V49.2202H47V55.7196H45.8068L44.4134 52.9847C44.0445 52.2663 43.7156 51.5278 43.4284 50.7727V50.7727C43.4284 51.5771 43.4844 52.486 43.4844 53.6041V55.7116L42.4434 55.7196Z" fill="white"/>
            </svg>
            <div class="registration-upper-right-inner-container" id="registrationUpperRightInnerContainer">
                <span>Not a Join user?</span>
                <button>Sign up</button>
            </div>
            <div class="log-in-container" id="LogInContainer">
                <div class="log-in-headline-container">
                    <div class="log-in-headline-and-border-container">
                        <span>Log in</span>
                    </div>
                </div>
                <div class="log-in-input-container">
                    <div class="log-in-input-field">
                        <input type="email" placeholder="Email">
                        <img src="./assets/img/login-email.svg">
                    </div>
                    <div class="log-in-input-field" >
                        <input type="password" placeholder="Password" id="passwordInput" onkeyup="checkNumberOfLetters()">
                        <img class="cursor-pointer" src="./assets/img/password-icon.svg" id="passwordToggle" onclick="togglePasswordVisibility()">
                    </div>
                </div>
                <div class="log-in-remember-me-forgot-password-section">
                    <div class="log-in-remember-me-input-label">
                        <input type="checkbox" name="rememberMe" id="rememberMe" class="remember-me-checkbox">
                        <span>Remember me</span>
                    </div>
                    <a onclick="">Forgot my password</a>
                </div>
                <div class="log-in-commit-guest-log-in-section">
                    <button class="log-in-commit-guest-log-in-section-button-log-in" style="">Log in</button>
                    <button class="log-in-commit-guest-log-in-section-button-guest" style="">Guest log in</button>
                </div>
            </div>
        </div>
    `;
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

