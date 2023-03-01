/**
 * Call the contacts content
 */
function insertContacts() {
  contentDiv.innerHTML = /*html*/ `
    <div class="contact-main">
          <div class="contact-left">
            ${renderUserList()}
          </div>

          <div class="contact-right" id="contact-right"></div>
    </div>

    <div class="contact-left-fadeIn" id="contact-left-fadeIn"></div>
    
    <div class="new-contact-button" onclick="">New Contact</div>
  `;

  document.getElementById("help").classList.remove("help-none");
}

/**
 * Renders the contacts content
 * 
 * @returns The HTML part
 */
function renderUserList() {
  let userListHTML = "";
  for (let i = 0; i < userList.length; i++) {
    const firstNameLetter = userList[i].firstName.charAt(0);
    const lastNameLetter = userList[i].lastName.charAt(0);
    const contactName = userList[i].firstName + " " + userList[i].lastName;

    userListHTML += /*html*/ `
      <div class="contact-letter-main" onclick="contactRightSide(${i})" >
       <h4 class="contact-letter" >${userList[i].firstName.charAt(0)}</h4>
        <div class="contact-child-div">
          <div class="contact-child-div">
            <div style="background-color: ${userList[i]['background-color']}" class="contact-child">
              <p>${firstNameLetter}${lastNameLetter}</p>
            </div>
            <div>
              <p class="contact-name">${contactName}</p>
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
* Call the renderContactSideScroll content and add show class for fade in from right
* 
* @param {number} i The index of the user in the userList
* 
* */
function contactRightSide(i) {
  let rightSide = document.getElementById('contact-right')
  rightSide.classList.add("show")
  rightSide.innerHTML = renderContactSideScroll(i)
}

/**
 * Renders the contactSideScroll content
 * 
 * @returns The HTML part
 */
function renderContactSideScroll(i) {
  let ContactSideScrollHTML;
  const firstNameLetter = userList[i].firstName.charAt(0);
  const lastNameLetter = userList[i].lastName.charAt(0);
  const contactNameLetter = firstNameLetter + lastNameLetter;
  const contactName = userList[i].firstName + " " + userList[i].lastName;

  ContactSideScrollHTML = /*html*/ `
  <div class="contact-right-side">
  <div class="show-contact">
      <div id="contactdetails">
          <div class="contact-detail-main-side" id="0">
              <div class="back-in-media-contact">
                  <img onclick="insertContacts()" src="./assets/img/help-arrow.svg" alt="">
              </div>
              <div class="contact-detail-head">
                  <div style="background-color: ${userList[i]['background-color']}" class="contact-detail-big-letter">${contactNameLetter}</div>
                      <div class="contact-detail-name-task">
                          <p class="contact-detail-big-name">${contactName}</p>
                          <p class="contact-detail-add-task" onclick="OpenContactAddTask('0', 0)"><img src="./assets/img/blue-plus.svg" alt="">Add Task</p>
                      </div>
                  </div >
              </div>
                  <div class="contact-detail-info-main">
                      <p class="contact-detail-info">Contact Information</p>
                      <p class="contact-detail-edit" onclick="editContact(${i})"><img class="icon-edit-contact" src="./assets/img/edit-contact.svg" alt=""> Edit Contact</p>
                  </div>
          </div>
              <div>
                  <p class="contact-detail-email-number">Email</p>
                  <a href="mailto:${userList[i].email}"><span>${userList[i].email}</span></a>
              </div>
              <div>
                  <p class="contact-detail-email-number">Mobile</p>
                  <p>${userList[i].phoneNumber}</p>
              </div>
      </div>
  </div>
</div>

`;

  return ContactSideScrollHTML;
}



/**
 * Call the editContact content
 *  
 * @param {number} i The index of the user in the userList
 * 
 */

function editContact(i) {
  let editContactFadeIn = document.getElementById('contact-left-fadeIn');
  editContactFadeIn.classList.add("show-left")
  const firstNameLetter = userList[i].firstName.charAt(0);
  const lastNameLetter = userList[i].lastName.charAt(0);
  const contactNameLetter = firstNameLetter + lastNameLetter;
  
  editContactFadeIn.innerHTML += /*html*/ `
<div class="add-contact" onclick="doNotClose(event)">
<div class="add-contact-head">
    <div class="add-contact-cross" onclick="hideAddContacts()">
        <img class="img-cross" src="./assets/img/theCross.svg" alt="">
    </div>
    <div class="add-contact-header-info">
        <div class="add-contact-h">
            Edit contact
        </div>                   
    </div>
</div>
<div class="add-contact-main">
    <div style="background-color: ${userList[i]['background-color']}" class="contact-detail-big-letter">
        <p>${contactNameLetter}</p>
    </div>
        <form onsubmit="invEditContact(${userList[i].email}, ${i}, ${contactNameLetter}); return false">
            <div>
                <div class="input-contact">
                    <input required="" type="text" id="contactEditName" class="input-contact-name">
                    <img src="./assets/img/signup-user.svg" alt="">
                </div>
                <div class="input-contact">
                    <input required="" type="email" id="contactEditEmail" class="input-contact-name">
                    <img src="./assets/img/login-email.svg" alt="">
                </div>
                <div class="input-contact">
                    <input required="" type="text" id="contactEditNumber" class="input-contact-name">
                    <img src="./assets/img/phone.svg" alt="">
                </div>
            </div>
            <div class="button-container">
                <button class="button-create" type="submit">Save <img src="./assets/img/ok.svg" alt=""></button>
            </div>
        </form>
</div>
</div>

`;

return editContactFadeIn;
}





