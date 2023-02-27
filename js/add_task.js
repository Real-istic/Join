
let taskClipboard = [
    {
        'title': 'TestTitle',
        // 'contacts': [],
        'firstNames': [],
        'lastNames': [],
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
            ${createSelectedContactIconsDivHTML()} 
            ${insertDueDateHTML()}
            ${insertCategorySelectorHTML()}
            ${insertCategoryListHTML()}
            ${insertPriorityHTML()}
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

/**
 * inserts the category selector
 * 
 * @returns the html part of the category selector
 */
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

/**
 * inserts the category list
 * 
 * @returns the html part of the category list
 */
function insertCategoryListHTML() {
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

function insertPriorityHTML() {
    return /*html*/ `
        <div class="add-task-priority-container">
            <label class="add-task-priority-label" id="addTaskPriorityLabelUrgent">
                <input onclick="addTaskSetPriority('urgent')" class="add-task-priority-input" id="addTaskPriorityInputUrgent" type="radio" name="radio">
                <span class="">Urgent</span>
                <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.9041 14.7547C18.6695 14.7551 18.4409 14.6803 18.252 14.5412L9.99999 8.458L1.74794 14.5412C1.63209 14.6267 1.50051 14.6887 1.3607 14.7234C1.2209 14.7582 1.07562 14.7651 0.933153 14.7437C0.790685 14.7223 0.653821 14.6732 0.530376 14.599C0.40693 14.5247 0.299321 14.427 0.213692 14.3112C0.128063 14.1954 0.0660911 14.0639 0.0313145 13.9243C-0.00346214 13.7846 -0.0103624 13.6394 0.0110078 13.497C0.0541669 13.2095 0.209857 12.9509 0.443829 12.7781L9.34794 6.20761C9.53664 6.06802 9.76521 5.99268 9.99999 5.99268C10.2348 5.99268 10.4633 6.06802 10.652 6.20761L19.5562 12.7781C19.7421 12.915 19.88 13.1071 19.9501 13.327C20.0203 13.5469 20.0191 13.7833 19.9468 14.0025C19.8745 14.2216 19.7347 14.4124 19.5475 14.5475C19.3602 14.6826 19.1351 14.7551 18.9041 14.7547Z" fill="#FF3D00"/>
                    <path d="M18.9042 9.00568C18.6695 9.00609 18.441 8.93124 18.2521 8.79214L10 2.70898L1.74799 8.79214C1.51402 8.96495 1.22093 9.0378 0.933203 8.99468C0.645476 8.95155 0.386678 8.79597 0.213743 8.56218C0.0408069 8.32838 -0.0321009 8.03551 0.0110582 7.74799C0.0542172 7.46048 0.209908 7.20187 0.44388 7.02906L9.34799 0.458588C9.53669 0.318997 9.76526 0.243652 10 0.243652C10.2348 0.243652 10.4634 0.318997 10.6521 0.458588L19.5562 7.02906C19.7421 7.16598 19.88 7.35809 19.9502 7.57797C20.0203 7.79785 20.0192 8.03426 19.9468 8.25344C19.8745 8.47262 19.7348 8.66338 19.5475 8.79847C19.3603 8.93356 19.1351 9.00608 18.9042 9.00568Z" fill="#FF3D00"/>
                </svg>
            </label>
            <label class="add-task-priority-label" id="addTaskPriorityLabelMedium">
                <input onclick="addTaskSetPriority('medium')" class="add-task-priority-input" id="addTaskPriorityInputMedium" type="radio" name="radio">
                <span class="">Medium</span>
                <svg width="20" height="9" viewBox="0 0 20 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.9041 8.22528H1.09589C0.805242 8.22528 0.526498 8.10898 0.320979 7.90197C0.11546 7.69495 0 7.41419 0 7.12143C0 6.82867 0.11546 6.5479 0.320979 6.34089C0.526498 6.13388 0.805242 6.01758 1.09589 6.01758H18.9041C19.1948 6.01758 19.4735 6.13388 19.679 6.34089C19.8845 6.5479 20 6.82867 20 7.12143C20 7.41419 19.8845 7.69495 19.679 7.90197C19.4735 8.10898 19.1948 8.22528 18.9041 8.22528Z" fill="#FFA800"/>
                    <path d="M18.9041 2.98211H1.09589C0.805242 2.98211 0.526498 2.86581 0.320979 2.6588C0.11546 2.45179 0 2.17102 0 1.87826C0 1.5855 0.11546 1.30474 0.320979 1.09772C0.526498 0.890712 0.805242 0.774414 1.09589 0.774414L18.9041 0.774414C19.1948 0.774414 19.4735 0.890712 19.679 1.09772C19.8845 1.30474 20 1.5855 20 1.87826C20 2.17102 19.8845 2.45179 19.679 2.6588C19.4735 2.86581 19.1948 2.98211 18.9041 2.98211Z" fill="#FFA800"/>
                </svg>
            </label>
            <label class="add-task-priority-label" id="addTaskPriorityLabelLow">
                <input onclick="addTaskSetPriority('low')" class="add-task-priority-input" id="addTaskPriorityInputLow" type="radio" name="radio">
                <span class="">Low</span>
                <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 9.00614C10.2654 9.00654 10.0369 8.9317 9.84802 8.79262L0.944913 2.22288C0.829075 2.13733 0.731235 2.02981 0.65698 1.90647C0.582724 1.78313 0.533508 1.64638 0.51214 1.50404C0.468986 1.21655 0.541885 0.923717 0.714802 0.689945C0.887718 0.456173 1.14649 0.300615 1.43418 0.257493C1.72188 0.21437 2.01493 0.287216 2.24888 0.460004L10.5 6.54248L18.7511 0.460004C18.867 0.374448 18.9985 0.312529 19.1383 0.277782C19.2781 0.243035 19.4234 0.236141 19.5658 0.257493C19.7083 0.278844 19.8451 0.328025 19.9685 0.402225C20.092 0.476425 20.1996 0.574193 20.2852 0.689945C20.3708 0.805697 20.4328 0.937168 20.4676 1.07685C20.5023 1.21653 20.5092 1.36169 20.4879 1.50404C20.4665 1.64638 20.4173 1.78313 20.343 1.90647C20.2688 2.02981 20.1709 2.13733 20.0551 2.22288L11.152 8.79262C10.9631 8.9317 10.7346 9.00654 10.5 9.00614Z" fill="#7AE229"/>
                    <path d="M10.5 14.7547C10.2654 14.7551 10.0369 14.6802 9.84802 14.5412L0.944913 7.97142C0.710967 7.79863 0.555294 7.54005 0.51214 7.25257C0.468986 6.96509 0.541886 6.67225 0.714802 6.43848C0.887718 6.20471 1.14649 6.04915 1.43418 6.00603C1.72188 5.96291 2.01493 6.03575 2.24888 6.20854L10.5 12.291L18.7511 6.20854C18.9851 6.03575 19.2781 5.96291 19.5658 6.00603C19.8535 6.04915 20.1123 6.20471 20.2852 6.43848C20.4581 6.67225 20.531 6.96509 20.4879 7.25257C20.4447 7.54005 20.289 7.79863 20.0551 7.97142L11.152 14.5412C10.9631 14.6802 10.7346 14.7551 10.5 14.7547Z" fill="#7AE229"/>
            </svg>
            </label>
        </div>
    `;
}


function addTaskSetPriority(priority){
    let urgentBox = document.getElementById('addTaskPriorityLabelUrgent');
    let mediumBox = document.getElementById('addTaskPriorityLabelMedium');
    let lowBox = document.getElementById('addTaskPriorityLabelLow');

    if (priority == 'urgent') {
        urgentBox.classList.add('add-task-priority-urgent');
        mediumBox.classList.remove('add-task-priority-medium');
        lowBox.classList.remove('add-task-priority-low');
    } else if (priority == 'medium'){
        urgentBox.classList.remove('add-task-priority-urgent');
        mediumBox.classList.add('add-task-priority-medium');
        lowBox.classList.remove('add-task-priority-low');
    } else if (priority == 'low') {
        urgentBox.classList.remove('add-task-priority-urgent');
        mediumBox.classList.remove('add-task-priority-medium');
        lowBox.classList.add('add-task-priority-low');
    }
}

    



/**
 * toggles the categorylist while rotating the arrow by 90deg
 * 
 */
function toggleCategoryList() {
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
    expandContactList();
    // contactListExpanded = true;
    // checkForExpandedContactList();
    
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
        document.getElementById('addTaskContactList').classList.add('expand-contact-list');
    }
}

function openAndCloseContactList() {
    if (contactListExpanded == false) {
        expandContactList();
        searchContacts();
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
    document.getElementById('addTaskContactList').innerHTML = ``;
    for (i = 0; i < userList.length; i++) {
        document.getElementById('addTaskContactList').innerHTML += createContactAddTaskHTML(i);
    }
}

function checkCheckboxes() {
    let nameStillInTask
    for (i = 0; i < userList.length; i++) {
        nameStillInTask = checkForContactInClipboard(i);

        if (nameStillInTask == true) {
            document.getElementById('checkBox' + userList[i].firstName + userList[i].lastName).checked = true;
        }
    }
}

function hideContactList() {
    contactListExpanded = false
    checkForExpandedContactList()
    document.getElementById('addTaskContactList').classList.remove('expand-contact-list');
    // @ Konrad, warum leerst du hier den contact list Container? 
    
}

function createContactAddTaskHTML(i) {
    return /*html*/ `
    <li class="add-task-contact-container" onclick="toggleContactTask(${i})">
        <input class="add-task-contact-checkbox" type="checkbox" id="checkBox${userList[i].firstName}${userList[i].lastName}">
        <label for="confirm" class="add-task-checkbox-container">${userList[i].firstName} ${userList[i].lastName}</label>
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
    for (k = 0; k < taskClipboard[0].firstNames.length; k++) {
        if (userList[i].firstName == taskClipboard[0].firstNames[k] && userList[i].lastName == taskClipboard[0].lastNames[k]) {
            nameStillInTask = true;
        }
    }
    return nameStillInTask;
}

function removeContactFromTask(i) {
    for (j = 0; j < taskClipboard[0].firstNames.length; j++) {
        if (taskClipboard[0].firstNames[j] == userList[i].firstName && taskClipboard[0].lastNames[j] == userList[i].lastName) {
            taskClipboard[0].firstNames.splice(j, 1);
            taskClipboard[0].lastNames.splice(j, 1);
        }

    }
    createSelectedContactIcons();
}

function addContactToTask(i) {
    let newFirstNameForTask = userList[i].firstName;
    let newLastNameForTask = userList[i].lastName;
    taskClipboard[0].firstNames.push(newFirstNameForTask);
    taskClipboard[0].lastNames.push(newLastNameForTask);
    createSelectedContactIcons();
}

function createSelectedContactIconsDivHTML() {
    return /*html*/ `
        <div class="add-task-selected-contacts-icons" id="selectedContactIcons"></div>
    `;
}

function createSelectedContactIcons() {
    let firstNameFirstLetter;
    let lastNameFirstLetter;
    let backgroundcolor;

    document.getElementById('selectedContactIcons').innerHTML = ``;
    for (let i = 0; i < taskClipboard[0].firstNames.length; i++) {
        firstNameFirstLetter = taskClipboard[0].firstNames[i].charAt(0);
        lastNameFirstLetter = taskClipboard[0].lastNames[i].charAt(0);

        for (let j = 0; j < userList.length; j++) {
            if(taskClipboard[0].firstNames[i] == userList[j]['firstName'] && taskClipboard[0].lastNames[i] == userList[j]['lastName']){
                backgroundcolor = userList[j]['background-color'];
            }           
        
        }

        document.getElementById('selectedContactIcons').innerHTML += `
        <div class="add-task-selected-contact" style="background-color:${backgroundcolor};">${firstNameFirstLetter}${lastNameFirstLetter}</div>
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