/**
 * 
 * call the contacts content
 */
function insertContacts() {
    contentDiv.innerHTML = `
        <div class="contact-main">
            <div class="contact-left">
                ${renderUserList()};
            </div>

            <div class="contact-right">
                <div class="new-contact-button" onclick="">New Contact</div>
            </div>
        </div> 
    `;
        
    document.getElementById("help").classList.remove("help-none");
}

/**
 * renders the contacts content
 * 
 * @returns the html part
 */
function renderUserList() {
    let userListHTML = "";
    for (let i = 0; i < userList.length; i++) {
        const firstNameLetter = userList[i].vorname.charAt(0);
        const lastNameLetter = userList[i].nachname.charAt(0);
        const contactName = firstNameLetter + lastNameLetter;
        const randomColor = getRandomColor();

        userListHTML += /*html*/ `
            <div class="contact-letter-main">
                <h4 class="contact-letter">${userList[i].vorname.charAt(0)}</h4>
                <div id="testLetter">
                    <div class="contact-child-div" onclick="openDetailContact('0', '${contactName}')" id="0">
                        <div style="background-color: ${randomColor}" class="contact-child">
                            <p>${contactName}</p>
                        </div>
                        <div>
                            <p class="contact-name">${userList[i].vorname} ${userList[i].nachname}</p>
                            <p class="contact-email">${userList[i].email}</p>
                        </div>                               
                    </div>
                </div>
            </div>
        `;
       
    }

    return userListHTML;

}

/**
 * returns a random hex color code
 * 
 * @returns a string representing a hex color code
 */
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
