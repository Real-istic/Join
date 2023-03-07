function loadRegistrationPage(){
    loadRegistrationPageHTML();
}

function loadRegistrationPageHTML(){
    document.body.innerHTML += loadRegistrationPageBackgroundAndLogo();
}

function loadRegistrationPageBackgroundAndLogo(){
    return /*html*/`
        <div class="registration-container" id="registrationContainer">
            <img class="join-logo-login" src="assets/img/headerjoinlogo.svg">
            <div class="registration-upper-right-inner-container">
                <a>Not a Join user?</a>
                <button>Sign up</button>
            </div>
            <div class="log-in-container">
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
                        <input type="text" placeholder="Password">
                        <img src="./assets/img/password-icon.svg">
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