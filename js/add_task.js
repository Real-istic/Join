
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
            <div class="selected-contacts-icons" id="selectedContactIcons"></div>
            ${insertDueDateHTML()}
            ${insertCategorySelectorHTML()}
            ${insertCategoryListHTML()}
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
            <div id="addTaskContactList" class="add-task-contact-list scrollbar scrollbar1">
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

function insertCategorySelectorHTML() {
    return /*html*/ `
        <div class="add-task-category">
            <span>Category</span>
            <div onclick="toggleCategoryList()" class="add-task-category-form">
                <span>Select task category</span>
                <img class="rotate-arrow-90" id="addTaskCategoryListArrow" src="assets/img/dropdownicon.svg" alt="">
            </div>
        </div>
    `;
}

function insertCategoryListHTML(){
    return /*html*/ `
            <div id="addTaskCategoryList" class="add-task-category-list height-0 scrollbar scrollbar1">
                <input class="add-task-list-element" type="text" placeholder="New category" required minlength="1" maxlength="20">
                <li class="add-task-list-element">Sales</li>
                <li class="add-task-list-element">Backoffice</li>
                <li class="add-task-list-element">Management</li>
                <li class="add-task-list-element">Support</li>
            </div>
    `;
}

function toggleCategoryList(){
    let expandArrow = document.getElementById('addTaskCategoryListArrow');
    let categoryList = document.getElementById('addTaskCategoryList');
    if (categoryList.classList.contains('height-1')) {
        categoryList.classList.add('height-0')
        categoryList.classList.remove('height-1')
        expandArrow.classList.add('rotate-arrow-90');
        expandArrow.classList.remove('rotate-arrow-0');
    } else {
        categoryList.classList.add('height-1')
        categoryList.classList.remove('height-0')
        expandArrow.classList.add('rotate-arrow-0');
        expandArrow.classList.remove('rotate-arrow-90');
    }
}

//ADD CONTACT TO TASK

function searchContacts() {
    checkForExpandedContactList();

    let input = document.getElementById('addContactToTaskInput');
    let filter = input.value.toLowerCase();

    let contacts = document.getElementsByClassName('add-task-checkbox-container');
    let container = document.getElementsByClassName('add-task-contact-container');

    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].innerText.toLowerCase().includes(filter)) {
            container[i].style.display = 'flex';
        } else {
            container[i].style.display = 'none';
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
    checkForExpandedContactList();
    loadContactList();
    checkCheckboxes();
    document.getElementById('addTaskContactList').classList.add('expand-contact-list');
}

function loadContactList() {
    for (i = 0; i < userList.length; i++) {
        document.getElementById('addTaskContactList').innerHTML += createContactAddTaskHTML(i);
    }
}

function checkCheckboxes(){
    let nameStillInTask
    for (i = 0; i < userList.length; i++) {
        nameStillInTask = checkForContactInClipboard(i);
        
        if(nameStillInTask == true){
            document.getElementById('checkBox' + userList[i].name).checked = true ;
        }
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
        <input class="add-task-contact-checkbox" type="checkbox" id="checkBox${userList[i].name}">
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
    createSelectedContactIcons();
}

function addContactToTask(i) {
    let newContactForTask = userList[i].name;
    taskClipboard[0].contacts.push(newContactForTask);
    createSelectedContactIcons();
}

function createSelectedContactIcons(){
    let firstLetter;

    document.getElementById('selectedContactIcons').innerHTML = ``;
    for (let i = 0; i < taskClipboard[0].contacts.length; i++) {
        firstLetter = taskClipboard[0].contacts[i].charAt(0);
        document.getElementById('selectedContactIcons').innerHTML += `
        <div class="selectedContact">${firstLetter}</div>
        `;
    }
    
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