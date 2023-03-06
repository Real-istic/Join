function loadRegistrationPage(){
    loadRegistrationPageHTML();
}

function loadRegistrationPageHTML(){
    document.body.innerHTML += loadRegistrationPageBackgroundAndLogo();
}

function loadRegistrationPageBackgroundAndLogo(){
    return /*html*/`
        <div class="registration-container" id="registrationContainer" style="display:flex;width:100%; height:100vh; position:relative; align-items:center; justify-content:center; z-index: 3; background-color: #4589FF;">
            <img class="join-logo-login" src="assets/img/headerjoinlogo.svg" style="position:absolute; width:265px; height:323px; display:none;">
            <div class="registration-upper-right-inner-container" style="position:absolute; display:flex; width:350px; height: 50px; align-items:center; top:65px; right: 90px; gap:35px;">
                <a href="" style="width: 168px; height: 28px;font-family: 'Open Sans';font-style: normal;font-weight: 400;font-size: 23px;line-height: 28px;">Not a Join user?</a>
                <button style="display:flex; justify-content: center; align-items:center; padding: 10px 16px; width:112px; height: 48px; background: #4589FF; border-radius: 8px; border:none;">Sign up</button>
            </div>
            <div class="log-in-container" style="display: flex;flex-direction: column;align-items: center;padding: 35px 0px;gap: 35px;width: 652px;height: 457px;background: #FFFFFF;box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.08);border-radius: 30px;">
                <div class="log-in-headline-container" style="display: flex;flex-direction: column;align-items: center;padding: 0px;gap: 24px;width: 315px;height: 82px;">
                    <div class="log-in-headline-and-border-container" style="display:flex; flex-direction: column; align-items:center; justify-content:flex-start; border-bottom: 3px solid #4589FF;height:100%;width:150px;">
                        <span style="font-family: 'Open Sans';font-style: normal;font-weight: 700;font-size: 48px;line-height: 58px;text-align: center;">Log in</span>
                    </div>
                </div>
                <div class="log-in-input-container" style="display: flex;flex-direction: column;align-items: flex-start; justify-content:space-between;width: 420px;height: 130px;">
                    <div class="log-in-input-field" style="display: flex;flex-direction: row;justify-content:space-between;align-items: center;padding: 13px 21px;gap: 10px;width: 100%;height: 50px;border-bottom: 1px solid #D1D1D1;">
                        <input style="border:none; font-size:20px; width: 100%;" type="email" placeholder="Email">
                        <img style="width:20px; height:20px;" src="./assets/img/login-email.svg" alt="">
                    </div>
                    <div class="log-in-input-field" style="display: flex;flex-direction: row;justify-content:space-between;align-items: center;padding: 13px 21px;gap: 10px;width: 100%;height: 50px;border-bottom: 1px solid #D1D1D1;">
                        <input style="border:none; font-size:20px;    width: 100%;" type="text" placeholder="Password">
                        <img style="width:20px; height:20px;" src="./assets/img/password-icon.svg" alt="">
                    </div>
                </div>
                <div class="log-in-remember-me-forgot-password-section" style="display: flex;flex-direction: row;justify-content: center;align-items: flex-start;gap: 35px;width: 384px;height: 23px;">

                </div>
            </div>
        </div>
    `;
}