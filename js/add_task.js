
let taskClipboard = [
    {
        'title': 'TestTitle',
        'contacts': [],
        'date': '10.01.2022',
        'categories': [],
        'priority': 'urgent',
        'description': 'testtest',
        'subtasks': [],
    }
]

let contactListExpanded = false;

/**
 * call the add task page
 * 
 */
function Task() {
    contentDiv.innerHTML = insertTask();
    document.getElementById("help").classList.remove("help-none");
}

/**
 * inserts the add task content
 * 
 * @returns the html part of the page
 */
function insertTask() {
    return /*html*/ `
    <div class="task-main">
        <form class="task-left">
            ${insertTaskTitleHTML()}
            ${insertTaskContactlistHTML()}
            ${insertDueDateHTML()}
            <!--more to do -->
        </form>
        <div class="task-right">
            <button class="btn-clear" onclick="clear()">Clear
                <svg width="14" height="13" viewBox="0 0 14 13" fill="blue" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.00106 6.50008L12.2441 11.7431M1.75806 11.7431L7.00106 6.50008L1.75806 11.7431ZM12.2441 1.25708L7.00006 6.50008L12.2441 1.25708ZM7.00006 6.50008L1.75806 1.25708L7.00006 6.50008Z" stroke="#647188" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <button class="btn-addTask" onclick="addTask()">Create Task</button>
        </div>
    </div>
    `;

}

/**
 * inserts the title of the add task page
 * 
 * @returns the html part of the title
 */
function insertTaskTitleHTML() {
    return /*html*/ `
        <input class="add-task-input-title" placeholder="Enter a title" required type="text" name="" id="taskTitle">
    `;
}

/**
 * inserts the contact list of the add task page
 * 
 * @returns the html part of the contact list
 */
function insertTaskContactlistHTML() {
    return /*html*/ `
            <div class="add-task-contacts-assign" id="taskContacts">
                <input required class="add-task-select-contacts" placeholder="Select Contacts to assign" onkeyup="searchContacts()" id="addContactToTaskInput">
                <img class="rotate-arrow-90" id="addTaskExpandArrow" src="assets/img/dropdownicon.svg" onclick="openAndCloseContactList()">
            </div>
            <div id="addTaskContactList" class="add-task-contact-list">
            </div>
    `;
}
/**
 * inserts the due date of the add task page
 * 
 * @returns the html part of the due date
 */
function insertDueDateHTML() {
    return /*html*/ `
        <div class="add-task-date">
            <span>Due Date</span>
            <div class="add-task-date-form">
                <input class="add-task-input-date" id="addTaskInputDate" type="date" required minlength="10" maxlength="10" placeholder="dd-mm-yyyy" name="" id="">
            </div>
        </div>
    `;
}

function insertCategoryHTML(){
    
}
/**
 * changes the color of the "due date" to black if a date is picked
 * 
 */
document.querySelector('add-task-input-date').onchange = function(){
    this.style.color="black";
  }

//ADD CONTACT TO TASK

function searchContacts() {
    checkForExpandedContactList();

    let input = document.getElementById('addContactToTaskInput');
    let filter = input.ariaValueMax.toLowerCase();

    let contacts = document.getElementsByClassName('contact');

    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].innerText.toLowerCase().includes(filter)) {
            contacts[i].style.display = 'flex';
        } else {
            contacts[i].style.display = 'none';
        }
    }
}

function checkForExpandedContactList() {
    let expandArrow = document.getElementById('addTaskExpandArrow');
    if (contactListExpanded == false) {
        expandArrow.classList.add('rotate-arrow-90');
        expandArrow.classList.remove('rotate-arrow-0');
    } else {
        expandArrow.classList.add('rotate-arrow-0');
        expandArrow.classList.remove('rotate-arrow-90');
    }
}

function openAndCloseContactList() {
    if (contactListExpanded == false) {
        expandContactList();
    } else {
        hideContactList();
    }
}

function expandContactList() {
    contactListExpanded = true;
    checkForExpandedContactList()
    loadContactList();
    document.getElementById('addTaskContactList').classList.add('expand-contact-list');
}


function loadContactList() {
    for (i = 0; i < userList.length; i++) {
        document.getElementById('addTaskContactList').innerHTML += createContactAddTaskHTML(i);
    }
}

function hideContactList() {
    contactListExpanded = false
    checkForExpandedContactList()
    document.getElementById('addTaskContactList').classList.remove('expand-contact-list');
    document.getElementById('addTaskContactList').innerHTML = ``;
}

function createContactAddTaskHTML(i) {
    return /*html*/ `
    <li class="add-task-contact-container" onclick="toggleContactTask(${i})">
        <input class="add-task-contact-checkbox" type="checkbox">
        <label for="confirm" class="add-task-checkbox-container">${userList[i].name}</label>
    </li>
 `
}

function toggleContactTask(i) {
    let nameStillInTask = checkForContactInClipboard(i);

    if (nameStillInTask == true) {
        removeContactFromTask(i);
    } else {
        addContactToTask(i);
    }
}

function checkForContactInClipboard(i) {
    let nameStillInTask = false;
    for (k = 0; k < taskClipboard[0].contacts.length; k++) {
        if (userList[i].name == taskClipboard[0].contacts[k]) {
            nameStillInTask = true;
        }
    }
    return nameStillInTask;
}

function removeContactFromTask(i) {
    for (j = 0; j < taskClipboard[0].contacts.length; j++) {
        if (taskClipboard[0].contacts[j] == userList[i].name) {
            taskClipboard[0].contacts.splice(j, 1);
        }

    }
}

function addContactToTask(i) {
    let newContactForTask = userList[i].name;
    taskClipboard[0].contacts.push(newContactForTask);
}

// function addContactToTask(i){
// let newContactForTask;
//     for(j = 0; j < userList.length; j++){
//         if (j == i){
//             newContactForTask = userList[i].name;
//         }
//     }
// taskClipborad[0].contacts.push(newContactForTask);
// }

//
// ----- ACHTUNG CSS -------
//.expand-contact-list{
//  height: 400px;
//  overflow-y: scroll;
//  transition: 120ms ease-in-out;
//}
//--------------------------