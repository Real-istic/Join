/**
 *
 * Call the contacts-page
 */
function insertContacts() {
  markActiveNavElement('contacts');
  removeHelp();
  insertContentHTML();
  addTaskFillSlideInMenu();
  eventOnEditContact();
}

/**
 *
 * remove classlist of ID help
 */
function removeHelp() {
  document.getElementById("help").classList.remove("help-none");
}

/**
 * Renders the contacts content
 * @returns The HTML part
 * */
function insertContentHTML() {
  contentDiv.innerHTML = /*html*/ `
      ${addTaskSlideInMenu()}
      <div class="contact-main">
        <div class="contact-left-fadeIn-bg" id="contact-left-fadeIn-bg"></div>
        <div class="contact-left-fadeIn" id="contact-left-fadeIn"></div>
            <div class="contact-left">${renderUserList()}</div>
            <div class="contact-right" id="contact-right"></div>
      </div>
        <div class="new-contact-button" onclick="openNewContact()">New contact
        <img class="new-contact-button-img" src="./assets/img/contact-member.svg" alt="">
      </div>
      <div class="newContactCreated" id="newContactCreated"><img src="./assets/img/contactCreated.svg"></div>`;
}

/**
 *
 * Call an event on editContact content
 */
function eventOnEditContact() {
  const editContactFadeInBg = document.getElementById("contact-left-fadeIn-bg");
  const editContactFadeIn = document.getElementById("contact-left-fadeIn");
  editContactFadeInBg.addEventListener("click", function () {
    editContactFadeInBg.classList.remove("show-left");
    editContactFadeIn.classList.remove("show-left");
  });
}

/**
 * Renders the contacts content with a sort the list of initial letters alphabetically
 * @returns The HTML part
 */
function renderUserList() {
  let userListHTML = "";
  let initialLetters = [];

  // get a list of initial letters for all first names
  for (let h = 0; h < userList.length; h++) {
    const firstNameLetter = userList[h].firstName.charAt(0);
    if (!initialLetters.includes(firstNameLetter)) {
      initialLetters.push(firstNameLetter);
    }
  }

  // sort the list of initial letters alphabetically
  initialLetters.sort();

  // create a list of users for each initial letter
  for (let x = 0; x < initialLetters.length; x++) {
    const initialLetter = initialLetters[x];
    let usersForLetterHTML = "";

    for (let i = 0; i < userList.length; i++) {
      const firstNameLetter = userList[i].firstName.charAt(0);
      const lastNameLetter = userList[i].lastName.charAt(0);
      const contactName = userList[i].firstName + " " + userList[i].lastName;

      if (firstNameLetter === initialLetter && userList[i].lastName !== "") {
        usersForLetterHTML += /*html*/ `
        <div class="contact-child-div" onclick ="contactRightSide(${i})">
          <div class="contact-child-div">
            <div style="background-color: ${userList[i]["backgroundColor"]}" class="contact-child">
              <p>${firstNameLetter}${lastNameLetter}</p>
            </div>
            <div>
              <p class="contact-name">${contactName}</p>
              <p class="contact-email">${userList[i].email}</p>
            </div>
          </div>
        </div>`;
      }
    }
    userListHTML += /*html*/ `
      <div class="contact-letter-main" >
        <h4 class="contact-letter">${initialLetter}</h4>
        ${usersForLetterHTML}
      </div>`;
  }
  return userListHTML;
}

/**
 * Call the renderContactSideScroll content and add show class for fade in from right
 * 
 * @param {number} i The index of the user in the userList
 * */
function contactRightSide(i) {
  let rightSide = document.getElementById("contact-right");
  rightSide.classList.add("show");
  rightSide.innerHTML = renderContactSideScroll(i);
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
          </div>        
          <div class="contact-detail-head">
            <div style="background-color: ${userList[i]["backgroundColor"]}" class="contact-detail-big-letter">${contactNameLetter}</div>
              <div class="contact-detail-name-task">
                <p class="contact-detail-big-name">${contactName}</p>
                <p class="contact-detail-add-task" onclick="toggleAddTaskMenuOffScreen()"><img src="./assets/img/blue-plus.svg" alt="">Add Task</p>
              </div>
            </div>
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
      </div>
    </div>`;
  return ContactSideScrollHTML;
}

/**
 * Call the editContact content
 *
 * @param {number} i The index of the user in the userList
 */
function editContact(i) {
  showEditContacts();
  showEditContactsHTML(i);
}

/**
 * show the editContact content
 * @param {number} i The index of the user in the userList
 */
  function showEditContacts() {
    const editContactFadeIn = document.getElementById("contact-left-fadeIn");
    const editContactFadeInBg = document.getElementById("contact-left-fadeIn-bg");
    editContactFadeInBg.classList.add("show-left");
    editContactFadeIn.classList.add("show-left");
   }

/**
 * show the editContact HMTMLcontent
 * 
 */
function showEditContactsHTML(i) {
  const firstNameLetter = userList[i].firstName.charAt(0);
  const lastNameLetter = userList[i].lastName.charAt(0);
  const contactNameLetter = firstNameLetter + lastNameLetter;
  const editContactFadeIn = document.getElementById("contact-left-fadeIn");
  editContactFadeIn.innerHTML = /*html*/ `
  <div class="edit-contact">
    <div class="edit-contact-head">
      <div class="edit-contact-cross">
        <img class="img-cross" src="./assets/img/theCross.svg" onclick="hideEditContacts()" alt="">
      </div>

      <div class="edit-contact-header-info">
        <div><img class="img-edit-contact" src="./assets/img/headerjoinlogo.svg" alt=""></div>
          <div class="edit-contact-h">Edit contact</div>                   
        </div>
      </div>
      <div class="edit-contact-main">
        <div style="background-color: ${userList[i]["backgroundColor"]}" class="contact-detail-big-letter">
          <p>${contactNameLetter}</p>
        </div>
        <form onsubmit="invEditContact(${i}); return false">
          <div class="input-contact-main">
            <div class="input-contact">
              <input required type="text" id="contactEditName" class="input-contact-name" value="${userList[i].firstName} ${userList[i].lastName}">
              <img src="./assets/img/signup-user.svg" alt="">
            </div>
            <div class="input-contact">
              <input required type="email" id="contactEditEmail" class="input-contact-email" value="${userList[i].email}">
                <img src="./assets/img/login-email.svg" alt="">
            </div>
            <div class="input-contact">
              <input required type="number" id="contactEditNumber" class="input-contact-name" value="${userList[i].phoneNumber}">
                <img src="./assets/img/phone.svg" alt="">
            </div>          
          </div>
            <div class="button-container">
              <button class="button-create">Save</button>
            </div>
        </form>
    </div>
  </div>`;
return editContactFadeIn;
}

/**
 *
 * invite the editContact content
 */
function invEditContact(index) {
  const contactEditName = document.getElementById("contactEditName").value;
  const contactEditEmail = document.getElementById("contactEditEmail").value;
  const contactEditNumber = document.getElementById("contactEditNumber").value;

  // Save changes in the userList
  userList[index].firstName = contactEditName.split(" ")[0];
  userList[index].lastName = contactEditName.split(" ")[1];
  userList[index].email = contactEditEmail;
  userList[index].phoneNumber = contactEditNumber;

  // Update user data
  const contactName = `${userList[index].firstName} ${userList[index].lastName}`;
  const firstNameLetter = userList[index].firstName.charAt(0);
  const lastNameLetter = userList[index].lastName.charAt(0);
  const contactNameLetter = firstNameLetter + lastNameLetter;
  const contactDetailBigLetter = document.querySelector(".contact-detail-big-letter");
  contactDetailBigLetter.textContent = contactNameLetter;
  const contactDetailBigName = document.querySelector(".contact-detail-big-name");
  contactDetailBigName.textContent = contactName;

hideEditContacts();
saveEditContact(userList);
insertContacts();
initbackend();
}

/**
 * Hide the editContact content
 * @param {number} i The index of the user in the userList
 */
  function hideEditContacts() {
    const editContactFadeInBg = document.getElementById("contact-left-fadeIn-bg");
    const editContactFadeIn = document.getElementById("contact-left-fadeIn");
    editContactFadeInBg.classList.remove("show-left");
    editContactFadeIn.classList.remove("show-left");
  }

/**
 *
 * Call the newContact content
 */
function openNewContact() {
  for (let i = 0; i < userList.length; i++) {
    showAddContact();
  }
}

/**
 *
 * Hide the content in gray background
 */
function bgHide() {
  const bgHide = document.getElementById("contact-left-fadeIn-bg");
  bgHide.classList.add("show-left");
}

/**
 *
 * remove the gray background from content
 */
function bgHideRemove() {
  removeAddContact();
  const bgHideRemove = document.getElementById("contact-left-fadeIn-bg");
  bgHideRemove.classList.remove("show-left");
}

/**
 *
 *  remove the Add contact content from the left Side
 */
function removeAddContact() {
  let newContactFadeIn = document.getElementById("contact-left-fadeIn");
  newContactFadeIn.classList.remove("show-left");
}

/**
 *
 * proof the validation of the addContact Formular
 */
function validateForm() {
  const input = document.getElementById("contactNewName");
  const name = input.value.trim();
  if (name.value === "" || name.value.split(" ").length < 2) {
    input.setCustomValidity("Bitte geben Sie Ihren Vor- und Nachnamen ein.");
    input.reportValidity();
    return false;
  }
  input.setCustomValidity("");
  return true;
}

/**
 *
 * show the Add contact content from the left Side
 */
function showAddContact() {
  bgHide();
  let newContactFadeIn = document.getElementById("contact-left-fadeIn");
  newContactFadeIn.classList.add("show-left");
  newContactFadeIn.innerHTML = /*html*/ `

    <div class="new-contact">
    <div class="new-contact-head">
        <div class="new-contact-cross">
            <img class="img-cross" src="./assets/img/theCross.svg" onclick="bgHideRemove()" alt="">
        </div>
        <div class="new-contact-header-info">
            <div>
                <img class="img-edit-contact" src="./assets/img/headerjoinlogo.svg" alt="">
            </div>
            <div class="new-contact-h">Add contact</div>
            <div class="add-contact-text">
                Tasks are better with a team!
            </div>
            <div class="new-contact-main" >
                <img src="./assets/img/addNewContactProfil.svg">
                <form onsubmit="return validateForm(); addNewContact()">
                    <div class="input-newContact-main">
                        <div class="input-contact">
                            <input required type="text" id="contactNewName" class="input-contact-name" placeholder="Name">
                                <img src="./assets/img/signup-user.svg" alt="">
                                </div>
                                <div class="input-contact">
                                    <input required="" type="email" id="contactNewEmail" class="input-contact-email" placeholder="Email">
                                        <img src="./assets/img/login-email.svg" alt="">
                                        </div>
                                        <div class="input-contact">
                                            <input required="" type="number" id="contactNewNumber" class="input-contact-name" placeholder="Phone">
                                                <img src="./assets/img/phone.svg" alt="">
                                                </div>
                                        </div>
                                        <div class="button-container">
                                            <button class="button-cancel" onclick="bgHideRemove()">Cancel
                                                <svg width="14" height="13" viewBox="0 0 14 13" fill="blue" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.00106 6.50008L12.2441 11.7431M1.75806 11.7431L7.00106 6.50008L1.75806 11.7431ZM12.2441 1.25708L7.00006 6.50008L12.2441 1.25708ZM7.00006 6.50008L1.75806 1.25708L7.00006 6.50008Z" stroke="#647188" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </button>
                                            <button class="button-create" onclick="addNewContact()">
                                                Create contact
                                                <img class="create-contact" src="./assets/img/akar-icons_check.svg" alt=""></button>
                                        </div>
                                </div>
                        </div>
                    </div>
                </form>   
        `;
  return newContactFadeIn;
}

/**
 *
 * invite the NewContact content
 */
function addNewContact() {
  const contactEditName = document.getElementById("contactNewName");
  const contactEditEmail = document.getElementById("contactNewEmail");
  const contactEditNumber = document.getElementById("contactNewNumber");

  // Verify that the first and last name have been entered.
  if (contactEditName.value === "" || contactEditName.value.split(" ").length < 2) {
    contactEditName.setCustomValidity("Please enter your first and last name.");
    contactEditName.reportValidity();
    return;
  } if (contactEditEmail.value === "") {
    contactEditEmail.setCustomValidity("Please enter your email.");
    contactEditEmail.reportValidity();
    return;
  } if (contactEditNumber.value === "") {
    contactEditNumber.setCustomValidity("Please enter your phone number.");
    contactEditNumber.reportValidity();
    return;
  }

  // Separate first and last names and make sure that the first letter is capitalized.
  let nameParts = contactEditName.value.split(" ");
  let firstName = nameParts[0].charAt(0).toUpperCase() + nameParts[0].slice(1);
  let lastName = nameParts[1].charAt(0).toUpperCase() + nameParts[1].slice(1);

  let newUser = {
    firstName: firstName,
    lastName: lastName,
    email: contactEditEmail.value,
    phoneNumber: contactEditNumber.value,
    backgroundColor: `${getRandomColor()}`,
  };

  addUser(newUser);
  hideEditContacts();
  insertContacts();
  showNewContactMessage();
}

/**
 * show new contact created message
 * 
 */
function showNewContactMessage() {
  const newContactMessage = document.getElementById("newContactCreated");
  newContactMessage.classList.add("showNewContactFadeIn");
  setTimeout(() => {
    newContactMessage.classList.remove("showNewContactFadeIn");
  }, 3000);
}  
 

/**
 *
 * Load the editContact content
 */
async function loadEditContact() {
  // userList aus dem Backend laden
  const userList = await backend.getItem("users", JSON.stringify(userList));
  return userList;
}

/**
 *
 * Close the editContact content and remove the show class from the editContactFadeIn-bg
 */
function hideEditContacts() {
  bgHideRemove();
  removeAddContact()
}

/**
 *
 * Prevent the editContact content from closing when clicking inside the content
 */
function doNotClose() {
  const editContactFadeIn = document.getElementById("contact-left-fadeIn");
  editContactFadeIn.addEventListener("click", (event) => {
    event.stopPropagation();
  });
}

/**
 * returns a random hex color code
 *
 * @returns a string representing a hex color code
 */
function getRandomColor() {
  let color = Math.floor(Math.random() * 16777215).toString(16);
  const randomColor = `#${color}`;
  return randomColor;
}
