
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
    return /*html*/ `
    <div class="contact-main">
        <div class="contact-left">
            ${renderUserList()}
        </div>
        <div class="contact-right">
            <div class="new-contact-button" onclick="">New Contact
                
            </div>
        </div>


    </div>
    
    
    `
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
        <div class="contact">
            <div class="contact-name">${userList[i].name}</div>
            <div class="contact-email">${userList[i].email}</div>
            
        </div>
        `;
    }
    return userListHTML;
}