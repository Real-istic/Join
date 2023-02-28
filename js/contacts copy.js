/**
 * 
 * call the contacts content
 */
function insertContacts() {
    contentDiv.innerHTML = /*html*/`
        <div class="contact-main">
            <div class="contact-left">
                ${renderUserList()};
            </div>

            <div class="contact-right" id="contact-right">
               
            </div>
                
        </div>
            
        <div class="new-contact-button" onclick="">New Contact</div>
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
        const firstNameLetter = userList[i].firstName.charAt(0);
        const lastNameLetter = userList[i].lastName.charAt(0);
        const contactName = firstNameLetter + lastNameLetter;
        const randomColor = getRandomColor();

        userListHTML += /*html*/ `
            <div class="contact-letter-main">
                <h4 class="contact-letter">${userList[i].firstName.charAt(0)}</h4>
                <div class="contact-child-div">
                    <div class="contact-child-div" onclick="openDetailContact('${i}', '${contactName}')">
                    <div style="background-color: ${userList[i]['background-color']}" class="contact-child">

                            <p>${contactName}</p>
                        </div>
                        <div>
                            <p class="contact-name">${userList[i].firstName} ${userList[i].lastName}</p>
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
 * renders the contactSideScroll content
 * 
 * @returns the html part
 */
function renderContactSideScroll() {
    let ContactSideScrollHTML = "";
    for (let i = 0; i < userList.length; i++) {
        const firstNameLetter = userList[i].firstName.charAt(0);
        const lastNameLetter = userList[i].lastName.charAt(0);
        const contactNameLetter = firstNameLetter + lastNameLetter;
        const contactName = userList[i].firstName + " " + userList[i].lastName;

        ContactSideScrollHTML += /*html*/ `
            <div class="contact-right-side">
                <div class="show-contact">
                    <div id="contactdetails">
                        <div class="contact-detail-main-side animationFadeInRight" id="0">
                            <div class="back-in-media-contact">
                                <img onclick="insertSummary()" src="./assets/img/help-arrow.svg" alt="">
                            </div>
                            <div class="contact-detail-head">
                                <div style="background-color: #e36d6f" class="contact-detail-big-letter">${contactNameLetter}</div>
                                    <div class="contact-detail-name-task">
                                        <p class="contact-detail-big-name">${contactName}</p>
                                        <p class="contact-detail-add-task" onclick="OpenContactAddTask('0', 0)"><img src="./assets/img/blue-plus.svg" alt="">Add Task</p>
                                    </div>
                                </div >
                            </div>
                                <div class="contact-detail-info-main">
                                    <p class="contact-detail-info">Contact Information</p>
                                    <p class="contact-detail-edit" onclick="editContact('0', 'BK')"><img class="icon-edit-contact" src="./assets/img/edit-contact.svg" alt=""> Edit Contact</p>
                                </div>
                        </div>
                            <div>
                                <p class="contact-detail-email-number">Email</p>
                                <a href="mailto:bk@alles.de"><span>${userList[i].email}</span></a>
                            </div>
                            <div>
                                <p class="contact-detail-email-number">Mobile</p>
                                <p>${userList[i].phoneNumber}</p>
                            </div>
                    </div>
                </div>
            </div>
        
            `;

}
return ContactSideScrollHTML;
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
