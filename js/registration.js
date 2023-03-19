function loadRegistrationPage() {
    setTimeout(createAnimation, 300);
    setElementsFromLocalStorage();
    //check URL for ? and @
}

//STARTING ANIMATION

function createAnimation() {
    changeBackgroundColor();
    changeLogoColor();
    changeLogoPosition();
    showLogInElements();
}

function changeBackgroundColor() {
    let backgroundColorLogin = document.getElementById('registrationContainer');
    if (backgroundColorLogin.style.backgroundColor == 'rgb(255, 255, 255)') {
        backgroundColorLogin.style.backgroundColor = 'rgb(69, 137, 255)';
    } else if (backgroundColorLogin.style.backgroundColor == 'rgb(69, 137, 255)' || backgroundColorLogin.style.backgroundColor == '') {
        backgroundColorLogin.style.backgroundColor = 'rgb(255, 255, 255)';
    }

}

function changeLogoColor() {
    let paths = document.querySelectorAll('.join-logo-login-color');

    for (let i = 0; i < paths.length; i++) {
        if (paths[i].getAttribute('fill') == 'rgb(69, 137, 255)') {
            paths[i].setAttribute('fill', 'rgb(255, 255, 255)');
        } else {
            paths[i].setAttribute('fill', 'rgb(69, 137, 255)');
        }
        paths[i].style.transition = 'fill 300ms ease-in-out';
    }
}

function changeLogoPosition() {
    document.getElementById('joinLogoLogin').classList.add('join-logo-login-new-position');
}

function showLogInElements() {
    document.getElementById('logInContainer').style.opacity = '1';
    if (document.getElementById('registrationUpperRightInnerContainer')) {
        document.getElementById('registrationUpperRightInnerContainer').style.display = 'flex';
    }
}

//PASSWORD

function checkNumberOfLetters() {
    let passwordInput = document.getElementById('passwordInput');
    let passwordToggle = document.getElementById("passwordToggle");

    if (passwordInput.value == 0) {
        passwordToggle.src = "./assets/img/password-icon.svg";
    } else {
        chooseRightPasswordImgage();
    }
}

function chooseRightPasswordImgage() {
    let passwordToggle = document.getElementById("passwordToggle");

    if (passwordToggle.type === "password") {
        passwordToggle.src = "./assets/img/passwordShow.svg";
    }
    else if (passwordToggle.type === "text") {
        passwordToggle.src = "./assets/img/passwordHide.svg";
    }
}

function togglePasswordVisibility() {
    let passwordInput = document.getElementById("passwordInput");
    let passwordToggle = document.getElementById("passwordToggle");
    if (passwordInput.value.length > 0) {
        if (passwordInput.type === "password") {
            // Show the password
            passwordInput.type = "text";
            passwordToggle.src = "./assets/img/passwordShow.svg";
        } else {
            // Hide the password
            passwordInput.type = "password";
            passwordToggle.src = "./assets/img/passwordHide.svg";
        }
    }
}

// GUEST LOGIN

function guestLogIn() {
    document.getElementById('registrationContainer').style.display = 'none';
    currentUser = 'guest';
    insertSummary();
}

//LOG IN

function logIn() {
    let inputElementPassword = document.getElementById('passwordInput');
    let emailFromInput = document.getElementById('logInEmail').value;

    rememberMe();
    for (let i = 0; i < userList.length; i++) {
        if (userList[i].password == inputElementPassword.value && userList[i].email == emailFromInput) {
            currentUser = userList[i].firstName;
            document.getElementById('registrationContainer').style.display = 'none';
            insertSummary();
        }
        else if (userList[i].password !== inputElementPassword.value && inputElementPassword.placeholder == `Password`) {
            toggleWrongPasswordAlert();
            togglePasswordPlaceholder();
        }
        else if (userList[i].password !== inputElementPassword.value && inputElementPassword.placeholder == `Ups! Try again`) {
            inputElementPassword.value = ``;
        }
    }
    setElementsFromLocalStorage();
}


function toggleWrongPasswordAlert() {
    const divElement = document.getElementById('wrongPasswordContainer');

    if (divElement.innerHTML.trim() === '') {
        divElement.innerHTML = `Wrong password or email`;
    } else {
        divElement.innerHTML = ``;
    }
}

function togglePasswordPlaceholder() {
    const inputElement = document.getElementById('passwordInput');

    if (inputElement.placeholder.trim() === 'Password') {
        inputElement.value = ``;
        inputElement.placeholder = `Ups! Try again`;
    } else {
        inputElement.placeholder = `Password`;
    }
}

//REMEMBER ME

function rememberMe() {
    let emailFromInput = document.getElementById('logInEmail').value

    if (document.getElementById('rememberMe').checked) {
        localStorage.setItem('rememberCheckbox', 'true');
        localStorage.setItem('rememberEmail', emailFromInput);
    } else {
        localStorage.setItem('rememberCheckbox', '');
        localStorage.setItem('rememberEmail', '');
    }
}

function setElementsFromLocalStorage() {
    let checkboxStatus = localStorage.getItem('rememberCheckbox');
    let emailFromLocalStorage = localStorage.getItem('rememberEmail');
    let emailFromInput = document.getElementById('logInEmail');

    if (!emailFromLocalStorage || emailFromLocalStorage === '') {
        emailFromInput.value = ``;
    } else {
        emailFromInput.value = localStorage.getItem('rememberEmail');
    }

    if (checkboxStatus == 'true') {
        document.getElementById('rememberMe').checked = true;
    } else {
        document.getElementById('rememberMe').checked = false;
    }
}

//Sign Up

function signUp() {
    changeBackgroundColor();
    changeLogoColor();
    changeLogInInputHTML();
    addReturnButtonHTML();
}

function changeLogInInputHTML() {
    document.getElementById('logInContainerHeadline').innerHTML = `Sign up`;
    document.getElementById('logInInputContainer').innerHTML = SignUpInputHTML();
    document.getElementById('logInRememberMeForgotPasswordSection').innerHTML = ``;
    document.getElementById('logInCommitGuestLogInSection').innerHTML = SignUpButtonHTML();
    document.getElementById('logInContainer').innerHTML += addReturnButtonHTML();
    document.getElementById('registrationUpperRightInnerContainer').style.display = 'none';
    document.getElementById('logInCommitGuestLogInSection').style.justifyContent = `center`;
    document.getElementById('logInRememberMeForgotPasswordSection').style.display = 'none';
    document.getElementById('logInInputContainer').style.height = '185px';
}

function SignUpInputHTML() {
    return /*html*/ `
    <div class="log-in-input-field">
        <input type="text" placeholder="First and last name" id="logInName">
        <img src="./assets/img/signup-user.svg">
    </div>
    <div class="log-in-input-field">
        <input type="email" placeholder="Email" id="logInEmail">
        <img src="./assets/img/login-email.svg">
    </div>
    <div class="log-in-input-field" >
        <input type="password" placeholder="Password" id="passwordInput" onkeyup="checkNumberOfLetters()">
        <img class="cursor-pointer" src="./assets/img/password-icon.svg" id="passwordToggle" onclick="togglePasswordVisibility()">
    </div>
    `;
}

function SignUpButtonHTML() {
    return /*html*/ `
    <button class="log-in-commit-guest-log-in-section-button-log-in" onclick="signUpNewUser()">Sign Up</button>
    `
}

function signUpNewUser() {
    const newContactName = document.getElementById("logInName");
    const newContactEmail = document.getElementById("logInEmail");
    const newContactPassword = document.getElementById("passwordInput");

    // Verify that the first and last name have been entered.
    if (newContactName.value === "" || newContactName.value.split(" ").length < 2) {
        newContactName.setCustomValidity("Please enter your first and last name.");
        newContactName.reportValidity();

    } if (newContactEmail.value === "") {
        newContactEmail.setCustomValidity("Please enter your email.");
        newContactEmail.reportValidity();

    } if (newContactPassword.value === "") {
        newContactPassword.setCustomValidity("Please enter your password.");
        newContactPassword.reportValidity();
    }

    // Separate first and last names and make sure that the first letter is capitalized.
    let nameParts = newContactName.value.split(" ");
    let firstName = nameParts[0].charAt(0).toUpperCase() + nameParts[0].slice(1);
    let lastName = nameParts[1].charAt(0).toUpperCase() + nameParts[1].slice(1);

    let newUser = {
        firstName: firstName,
        lastName: lastName,
        email: newContactEmail.value,
        password: newContactPassword.value,
        backgroundColor: `${getRandomColor()}`,
    };

    addUser(newUser);
    returnToLoginPage();
    showNewContactMessage();
    insertContacts();

}

function addReturnButtonHTML() {
    return /*html*/ `
    <button onclick="returnToLoginPage()" class="return-to-log-in-page-button"><img src="assets/img/arrow-left.svg" alt=""></button>
    `
}

//Return to Login page

function returnToLoginPage() {
    if (window.location.href.includes('change_password.html')) {
        window.location.href = 'index.html';
      } else if (window.location.href.includes('index.html')) {
        returnToLoginPageCSSHTML();
      }
}

function returnToLoginPageCSSHTML(){
    changeBackgroundColor();
    changeLogoColor();
    showLogInElements();
    document.getElementById('registrationUpperRightInnerContainer').style.display = 'flex';
    document.getElementById('logInContainer').innerHTML = createLogInElementsHTML();
    document.getElementById('logInCommitGuestLogInSection').style.justifyContent = `space-between`;
    document.getElementById('logInRememberMeForgotPasswordSection').style.display = 'flex';
    document.getElementById('logInInputContainer').style.height = '130px';
    document.getElementById('logInContainer').style.width = '652px';
    document.getElementById('forgotPasswordDescriptionContainer').style.display = 'none';
}

function createLogInElementsHTML() {
    return /*html*/`
    <div class="log-in-headline-container" id="logInHeadlineContainer">
        <div class="log-in-headline-and-border-container">
            <span id="logInContainerHeadline">Log in</span>
        </div>
    </div>
    <div class="forgot-password-description-container" id="forgotPasswordDescriptionContainer">
                <span class="forgot-password-description" id="forgotPasswordDescription">Don't worry! We will send you an email with the instructions to reset your password.</span>
            </div>
    <div class="log-in-input-container" id="logInInputContainer">
        <div class="log-in-input-field">
            <input type="email" placeholder="Email" id="logInEmail">
            <img src="./assets/img/login-email.svg">
        </div>
        <div class="log-in-input-field" >
            <input type="password" placeholder="Password" id="passwordInput" onkeyup="checkNumberOfLetters()">
            <img class="cursor-pointer" src="./assets/img/password-icon.svg" id="passwordToggle" onclick="togglePasswordVisibility()">
        </div>
        <div class="wrong-password-container" id="wrongPasswordContainer"></div>
    </div>
    <div class="log-in-remember-me-forgot-password-section" id="logInRememberMeForgotPasswordSection">
        <div class="log-in-remember-me-input-label">
            <input type="checkbox" name="rememberMe" id="rememberMe" class="remember-me-checkbox">
            <span>Remember me</span>
        </div>
        <a onclick="forgotPassword()">Forgot my password</a>
    </div>
    <div class="log-in-commit-guest-log-in-section" id="logInCommitGuestLogInSection">
        <button class="log-in-commit-guest-log-in-section-button-log-in" onclick="logIn()">Log in</button>
        <button class="log-in-commit-guest-log-in-section-button-guest" onclick="guestLogIn()">Guest log in</button>
    </div>
    `
}


//Forgot Password

function forgotPassword() {
    changeBackgroundColor();
    changeLogoColor();
    createForgotPasswordHTML();
}

function createForgotPasswordHTML() {
    document.getElementById('registrationUpperRightInnerContainer').style.display = 'none';
    document.getElementById('logInContainerHeadline').innerHTML = `I forgot my password`;
    document.getElementById('logInRememberMeForgotPasswordSection').style.display = 'none';
    document.getElementById('logInInputContainer').innerHTML = forgotPasswordInputHTML();
    document.getElementById('logInInputContainer').style.height = '50px';
    document.getElementById('logInCommitGuestLogInSection').innerHTML = ``;
    //document.getElementById('logInCommitGuestLogInSection').innerHTML = forgotPasswordButtonHTML();
    document.getElementById('logInCommitGuestLogInSection').style.justifyContent = `center`;
    document.getElementById('logInContainer').innerHTML += addReturnButtonHTML();
    document.getElementById('logInContainer').style.width = '750px';
    document.getElementById('forgotPasswordDescriptionContainer').style.display = 'flex';
}

function forgotPasswordInputHTML() {
var recipient = ``;

    return /*html*/`
        <div class="log-in-input-field">
            <form class="log-in-input-field" action="http://gruppenarbeit-join-473.developerakademie.net/Join/send_mail.php" method="POST">
                <input type="email" placeholder="Email" required id="logInEmail" name="recipient" value="${recipient}">
                <img src="./assets/img/login-email.svg">
                <button class="log-in-commit-guest-log-in-section-button-log-in" type="submit" onsubmit="sendEmail()" style="width:270px;">Send me the email</button>
            </form>
        </div>
    `; 
}

function forgotPasswordButtonHTML() {
    return /*html*/ `
    <button class="log-in-commit-guest-log-in-section-button-log-in" type="submit" onsubmit="sendEmail()" style="width:270px;">Send me the email</button>
    `;
}

function addForgotPasswordHTML() {
    return /*html*/ `
    <span>Don't worry! We will send you an email with the instructions to reset your password.</span>
    `;
}

function sendEmail(){
    sendEmailAnimation();
}

function sendEmailAnimation(){
    document.getElementById('emailSendMessageBackground').style.display = 'flex';
    document.getElementById('emailSendMessage').style.opacity = '1';
    setTimeout(removeEmailAnimation, 1500);
}

function removeEmailAnimation(){
    document.getElementById('emailSendMessageBackground').style.display = 'none';
    document.getElementById('emailSendMessage').style.opacity = '0';    
}

// function sendLinktoEmail() {
//     let email = document.getElementById('logInEmail').value;
//     let subject = 'Reset your password';
//     let body = 'Hello,\n\nPlease click on the link to set your new password:\n\nC:\Users\Konrad\Documents\Developer Akademie\Join\change_password.html?email=' + encodeURIComponent(email) + '\n\nGreetings,\ngroup work - join - 473';

//     window.location.href = 'mailto:' + encodeURIComponent(email) + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
// }

//LOAD CHANGE PASSWORD PAGE

function loadChangePasswordPage() {
    setTimeout(createForgotPasswordAnimation, 300);
    createForgotPasswordNewURLHTML();
}

function createForgotPasswordAnimation() {
    changeLogoPosition();
    showLogInElements();
}

function createForgotPasswordNewURLHTML() {
    document.getElementById('logInContainer').innerHTML += addReturnButtonHTML();
    document.getElementById('forgotPasswordDescriptionContainer').style.display = 'flex';
    document.getElementById('logInCommitGuestLogInSection').style.justifyContent = `center`;
    document.getElementById('logInContainer').style.height = '540px';
    document.getElementById('logInContainer').style.width = '760px';
    document.getElementById('logInContainer').style.justifyContent = 'space-between';
}

function commitChangePassword() {
    checkForSameInput();
}

function checkForSameInput() {
    let passwordInput = document.getElementById('passwordInput').value;
    let passwordInputConfirm = document.getElementById('confirmPasswordInput').value;

    if (passwordInput === passwordInputConfirm) {
        updatePassword(passwordInput);
    } else {
        document.getElementById('wrongPasswordContainer').innerHTML = wrongPasswordHTML();
    }
}

function updatePassword(passwordInput) {
    for (let i = 0; i < userList.length; i++) {

    }
}

function wrongPasswordHTML() {
    return /*html*/ `
    <span>Make sure the second password you typed matches the first.</span>
    `;
}

//LOGOUT

function openLogOutButton(){
    document.getElementById('logOutBackground').style.display = 'flex';
}

function logOut(){
    currentUser = '';
    location.reload()
}

function closeLogout(){
    document.getElementById('logOutBackground').style.display = 'none';
}