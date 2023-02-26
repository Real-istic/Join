
/**
 * 
 * call the contacts content
 */
function insertContacts() {
    contentDiv.innerHTML = contactsHTML();
    document.getElementById("help").classList.remove("help-none");
}

/**
 * renders the contacts content
 * 
 * @returns the html part
 */
function contactsHTML() {
    let firstLetters = [];
    for (let i = 0; i < userList.length; i++) {
        const firstLetter = userList[i].name.charAt(0);
        if (!firstLetters.includes(firstLetter)) {
            firstLetters.push(firstLetter);
        }
    }
    let userListHTML = "";
    for (let i = 0; i < firstLetters.length; i++) {
        const letter = firstLetters[i];
        userListHTML += /*html*/ `
            <div class="contact-letter-main">
                <h4 class="contact-letter">${letter}</h4>
                <div id="${letter}">
        `;
        for (let j = 0; j < userList.length; j++) {
            const user = userList[j];
            if (user.name.charAt(0) === letter) {
                userListHTML += /*html*/ `
                    <div class="contact-child-div" onclick="openDetailContact('${j}', '${user.name.charAt(0)}')" id="${j}">
                        <div style="background-color: #e36d6f" class="contact-child">
                            <p>${user.name.charAt(0)}</p>
                        </div>
                        <div>
                            <p class="contact-name">${user.name}</p>
                            <p class="contact-email">${user.email}</p>
                        </div>
                    </div>
                `;
            }
        }
        userListHTML += /*html*/ `
                </div>
            </div>
        `;
    }
    return /*html*/ `
        <div class="contact-main">
            <div class="contact-left">
                ${userListHTML}
            </div>
            <div class="contact-right">
                <div class="new-contact-button" onclick="">New Contact</div>
            </div>
        </div>
    `;
}


/**
 *
 * render userList
 * 
*/
function renderUserList() {
    let userListHTML = "";
    for (let i = 0; i < userList.length; i++) {
        userListHTML += /*html*/ `
        <div class="contact-letter-main">
                <h4 class="contact-letter">Test Letter </h4>
                    <div id="Test Letter">
                        <div class="contact-child-div" onclick="openDetailContact('0', 'BK' )" id="0">
                            <div style="background-color: #e36d6f" class="contact-child">
                                <p>BK</p>
                            </div>
                                <div>
                                    <p class="contact-name">${userList[i].name}</p>
                                    <p class="contact-email">${userList[i].email}</p>
                                </div>                               
                        </div>
                    </div>
            </div>
        `;
    }
    return userListHTML;
}

