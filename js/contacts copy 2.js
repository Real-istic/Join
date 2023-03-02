/**
 * Call the contacts content
 */


function insertContacts() {

  document.getElementById("help").classList.remove("help-none");

  contentDiv.innerHTML = /*html*/ `
      <div class="contact-main">
          <div class="contact-left">
            ${renderUserList()}
          </div>

          <div class="contact-right" id="contact-right"></div>
      </div>

      <div class="contact-left-fadeIn-bg" id="contact-left-fadeIn-bg">
        <div class="contact-left-fadeIn" id="contact-left-fadeIn"></div>
      </div>

      
      
      <div class="new-contact-button" onclick="">New Contact
      <img class="new-contact-button-img" src="./assets/img/contact-member.svg" alt="">
      </div>
  `;
  eventOnEditContact();
}

/**
 * 
 * Call an event on editContact content
 */

function eventOnEditContact() {
  const editContactFadeInBg = document.getElementById('contact-left-fadeIn-bg');
  const editContactFadeIn = document.getElementById('contact-left-fadeIn');
  editContactFadeInBg.addEventListener("click", function () {
    editContactFadeInBg.classList.remove("show-left");
    editContactFadeIn.classList.remove("show-left");
  });
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
    <div class="contact-letter-main" onclick ="contactRightSide(${i})">
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
    </div >
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
              <img class="arrow-back-in-media" onclick="insertContacts()" src="./assets/img/help-arrow.svg" alt="">
            </div>
          </div>        
          <div class="contact-detail-head">
            <div style="background-color: ${userList[i]['background-color']}" class="contact-detail-big-letter">${contactNameLetter}</div>
              <div class="contact-detail-name-task">
                <p class="contact-detail-big-name">${contactName}</p>
                <p class="contact-detail-add-task" onclick="addTaskOfScreenMenu()"><img src="./assets/img/blue-plus.svg" alt="">Add Task</p>
              </div>
            </div >
          </div>

          <div class="contact-detail-info-main">
            <p class="contact-detail-info">Contact Information</p>
            <p class="contact-detail-edit" onclick="editContact(${i})"><img class="icon-edit-contact" src="./assets/img/edit-contact.svg" alt=""> Edit Contact</p>
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
      </div >
    </div >
    

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
  let editContactFadeInBg = document.getElementById('contact-left-fadeIn-bg');
  editContactFadeInBg.classList.add("show-left")
  editContactFadeIn.classList.add("show-left")
  const firstNameLetter = userList[i].firstName.charAt(0);
  const lastNameLetter = userList[i].lastName.charAt(0);
  const contactNameLetter = firstNameLetter + lastNameLetter;
 
  editContactFadeIn.innerHTML += /*html*/ `
    <div class="edit-contact">
      <div class="edit-contact-head" onclick="hideEditContacts()">
        <div class="edit-contact-cross">
          <img class="img-cross" src="./assets/img/theCross.svg" alt="">
        </div>

        <div class="edit-contact-header-info">
          <div><img class="img-edit-contact" src="./assets/img/headerjoinlogo.svg" alt=""></div>
            <div class="edit-contact-h">Edit contact</div>                   
          </div>
        </div>

        <div class="edit-contact-main" onclick="doNotClose()">
          <div style="background-color: ${userList[i]['background-color']}" class="contact-detail-big-letter">
            <p>${contactNameLetter}</p>
          </div>

          <form onsubmit="invEditContact(${i}); return false">
            <div>
              <div class="input-contact">
                <input required="" type="text" id="contactEditName" class="input-contact-name" value="${userList[i].firstName} ${userList[i].lastName}">
                <img src="./assets/img/signup-user.svg" alt="">
              </div>

              <div class="input-contact">
                <input required="" type="email" id="contactEditEmail" class="input-contact-email" value="${userList[i].email}">
                  <img src="./assets/img/login-email.svg" alt="">
              </div>

              <div class="input-contact">
                <input required="" type="text" id="contactEditNumber" class="input-contact-name" value="${userList[i].phoneNumber}">
                  <img src="./assets/img/phone.svg" alt="">
              </div>          
            </div>
              <div class="button-container">
                <button class="button-create" type="submit" onclick="saveEditContact(${i})">Save</button>
              </div>
          </form>
      </div>
    </div>

`;

  return editContactFadeIn;
}

/**
 * 
 * invite the editContact content
 */
async function invEditContact(index) {
  const contactEditName = document.getElementById('contactEditName').value;
  const contactEditEmail = document.getElementById('contactEditEmail').value;
  const contactEditNumber = document.getElementById('contactEditNumber').value;

  // Änderungen in der userList speichern
  userList[index].firstName = contactEditName.split(" ")[0];
  userList[index].lastName = contactEditName.split(" ")[1];
  userList[index].email = contactEditEmail;
  userList[index].phoneNumber = contactEditNumber;

  // Benutzerdaten aktualisieren
  const contactName = `${userList[index].firstName} ${userList[index].lastName}`;
  const firstNameLetter = userList[index].firstName.charAt(0);
  const lastNameLetter = userList[index].lastName.charAt(0);
  const contactNameLetter = firstNameLetter + lastNameLetter;
  const backgroundColor = userList[index]['background-color'];

  const contactDetailBigLetter = document.querySelector('.contact-detail-big-letter');
  contactDetailBigLetter.textContent = contactNameLetter;
  contactDetailBigLetter.style.backgroundColor = backgroundColor;

  const contactDetailBigName = document.querySelector('.contact-detail-big-name');
  contactDetailBigName.textContent = contactName;


  // Edit Kontakt ausblenden
  const editContactFadeInBg = document.getElementById('contact-left-fadeIn-bg');
  const editContactFadeIn = document.getElementById('contact-left-fadeIn');
  editContactFadeInBg.classList.remove('show-left');
  editContactFadeIn.classList.remove('show-left');

  saveEditContact(userList);
  insertContacts();
}




/**
 * 
 * Save the editContact content
 */
async function saveEditContact(userList) {
    // userList im Backend speichern
    await backend.setItem('userList', JSON.stringify(userList));
}


/*
/**
 * 
 * Load the editContact content
 
async function loadEditContact() {
  // userList aus dem Backend laden
  const userList = await backend.getItem('userList', JSON.stringify(userList));
  return userList;
}
*/



/**
 * 
 * Close the editContact content and remove the show class from the editContactFadeIn-bg
 */
function hideEditContacts() {
  const editContactFadeInBg = document.getElementById('contact-left-fadeIn-bg');
  const editContactFadeIn = document.getElementById('contact-left-fadeIn');
  editContactFadeInBg.addEventListener("click", function () {
    editContactFadeInBg.classList.remove("show-left");
    editContactFadeIn.classList.remove("show-left");
  });
}

/**
 * 
 * Prevent the editContact content from closing when clicking inside the content
 */
function doNotClose() {
  const editContactFadeIn = document.getElementById('contact-left-fadeIn');
  editContactFadeIn.addEventListener("click", (event) => {
    event.stopPropagation();
  });
}







