let categoryColors = ['#de493e', '#259b24', '#1e88e5', '#fbc02d', '#9c27b0', '#00897b'];

let contactListExpanded = false;

/**
 * call the add task page
 * 
 */
function insertAddTask() {
    contentDiv.innerHTML = insertTaskLeft();
    document.getElementById("help").classList.remove("help-none");
}

/**
 * inserts the add task content
 * 
 * @returns the html part of the page
 */
function insertTaskLeft() {
    return /*html*/ `
        <div class="task-main">
            <form class="task-left scrollbar1">
                ${insertTaskTitleHTML()}
                ${insertTaskContactlistHTML()}
                ${createSelectedContactIconsDivHTML()} 
                ${insertDueDateHTML()}
                ${insertCategorySelectorHTML()}
                ${insertCategoryListHTML()}
                ${addTaskCreateNewCategoryColorSelector()}
                ${insertPriorityHTML()}
                ${insertDescriptionHTML()}
                ${insertSubtasksHTML()}
            </form>
            <div class="task-right">
                ${insertTaskRightHTML()}
            </div>
        </div>
        `;
}
/**
 * inserts the right side of the add-task page
 * 
 * @returns the html part of the right hand side add-task page
 */
function insertTaskRightHTML(){
    return /*html*/ `
        <button class="btn-clear" onclick="clearTask()">Clear
            <svg width="14" height="13" viewBox="0 0 14 13" fill="blue" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.00106 6.50008L12.2441 11.7431M1.75806 11.7431L7.00106 6.50008L1.75806 11.7431ZM12.2441 1.25708L7.00006 6.50008L12.2441 1.25708ZM7.00006 6.50008L1.75806 1.25708L7.00006 6.50008Z" stroke="#647188" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <button class="btn-addTask" onclick="createTaskAddTaskSite()">Create Task</button>
    `;
}

/**
 * inserts the title of the add task page
 * 
 * @returns the html part of the title
 */
function insertTaskTitleHTML() {
    return /*html*/ `
        <input class="add-task-input-title" placeholder="Enter a title" required type="text" name="" id="addTaskInputTitle">
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
        <div class="add-task-category" id="addTaskCategory">
        <span>Category</span>
            <div onclick="toggleCategoryList()" class="add-task-category-form">
                <span id="selectedCategory">Select task category</span>
                <img class="rotate-arrow-90" id="addTaskCategoryListArrow" src="assets/img/dropdownicon.svg" alt="">
            </div>
        </div>
    `;
}

/**
 * "re"-insert the category selector if creating a new category is canceled.
 * 
 * @returns html for category selector
 */
function insertCategorySelectorFromInterruptHTML(){
    return /*html*/ `
        <span>Category</span>
            <div onclick="toggleCategoryList()" class="add-task-category-form">
                <span id="selectedCategory">Select task category</span>
                <img class="rotate-arrow-90" id="addTaskCategoryListArrow" src="assets/img/dropdownicon.svg" alt="">
            </div>
    `;
}

/**
 * inserts the category list
 * 
 * @returns  html part of the category list
 */
function insertCategoryListHTML() {
    return /*html*/ `
            <div id="addTaskCategoryList" class="add-task-category-list height-0 scrollbar scrollbar1">
                <input class="add-task-list-element" type="text" placeholder="New category" required minlength="1" maxlength="20">
            </div>
    `;
}

//SELECT CATEGORY

/**
 * inserts the category list
 * 
 */
function loadCategorylist() {
    document.getElementById('addTaskCategoryList').innerHTML = ``;
    document.getElementById('addTaskCategoryList').innerHTML += createCategoryInputHTML();
    for (i = 0; i < categoryList.length; i++) {
        document.getElementById('addTaskCategoryList').innerHTML += createCategoryListHTML(i);
    }
}

/**
 * inserts the category list
 * 
 * @returns the html part of single category
 */
function createCategoryInputHTML() {
    return `
    <div class="add-task-create-new-category">
        <li class="add-task-list-element" onclick="createNewCategory()">New category</li>
    </div>
    `
}

/**
 * create category list item
 * 
 * @returns html part of the category list
 */
function createCategoryListHTML(i) {
    return `
    <li onclick="addCategoryToClipboard(${i})" class="add-task-list-element">${categoryList[i]['categoryName']}<div style="background-color:${categoryList[i]['categoryColor']}; height: 19px; width: 19px; border-radius:100%; border: 1px solid white"></div></li>
    `
}

/**
 * function that build the surface to create a new category
 * 
 */
function createNewCategory(){
    toggleCategoryList();
    document.getElementById('addTaskCategory').innerHTML = ``;
    document.getElementById('addTaskCategory').innerHTML = createNewCategoryHTML();
     createNewCategoryColorSelectorHTML();
}

/**
 * create the input html and button html for creating a new category
 * 
 * @returns  html and button html for creating a new category
 */
function createNewCategoryHTML(){
    return /*html*/`
        <span>Category</span>
        <div class="add-task-create-new-category-container">
            <input class="add-task-list-element" id="newCategoryNameID" type="text" placeholder="New category name" required minlength="1" maxlength="20">
            <button class="interrupt-create-new-category" onclick="interruptCreateNewCategory()" style="border-right: solid 1px rgb(232,232,232)"><img src="assets/img/xblue.svg" alt=""></button> 
            <button class="confirm-create-new-category" onclick="confirmCreateNewCategory()"><img src="assets/img/check.svg" alt=""></button>
        </div>
    `
}

/**
 * button function that interrupt the creation of a new category and return back to the category selecor
 * 
 */
function interruptCreateNewCategory(){
    document.getElementById('addTaskCategory').innerHTML = insertCategorySelectorFromInterruptHTML();
    document.getElementById('addTaskCreateNewCategoryColorSelector').innerHTML = ``;
}


/**
 * button function: create new category, load new category to backend, put new category to current task, return to category selecter surface, fill input with new category
 * 
 */
function confirmCreateNewCategory(){
    let newCategoryName = document.getElementById('newCategoryNameID').value;
    let newCategoryColor = getNewCategoryColor();

    addCategory({"categoryName": newCategoryName, "categoryColor": newCategoryColor});
    initBackend();
    document.getElementById('addTaskCategory').innerHTML = insertCategorySelectorFromInterruptHTML();
    document.getElementById('addTaskCreateNewCategoryColorSelector').innerHTML = ``;
    addCategoryToClipboard(categoryList.length - 1);
}

/**
 * function that connects selected color with new category name in the "create new category part"
 * iterate all radio buttons, check for selected radio button, get value if button is selected, return value
 * 
 * @returns the html part of the category list
 */
function getNewCategoryColor(){
    let newCategoryColor;
    let colors = document.getElementsByClassName('radio-color-picker');
    for (let i = 0; i < colors.length; i++) {
        if(colors[i].checked == true){
            newCategoryColor = colors[i].value;
        }
    }
    return newCategoryColor;
}

/**
 * creates the container where all color selector radio buttons will be loaded in for the create new category section
 * 
 * @returns  the container where all color selector radio buttons will be loaded in for the create new category section
 */
function addTaskCreateNewCategoryColorSelector(){
    return /*html*/ `
        <div id="addTaskCreateNewCategoryColorSelector" class="add-task-create-new-category-color-selector"></div>
    `;
}

/**
 * creates the color selector html part for creating a new category
 * counting thew all available colors and creates a radio button for each color
 * 
 */
function createNewCategoryColorSelectorHTML(){
    for (let i = 0; i < categoryColors.length; i++) {
        document.getElementById('addTaskCreateNewCategoryColorSelector').innerHTML += createNewCategoryColorSelectorRadioButtonHTML(i); 
    } 
}

/**
 * returns the html part for each color picker radio button 
 * 
 * @returns  html part for each color picker radio button 
 */
function createNewCategoryColorSelectorRadioButtonHTML(i){
    return /*html*/`
        <div class="radio-color-picker-container">
            <input type="radio" class="radio-color-picker" id="radioColorPicker${i}" value="${categoryColors[i]}" name="color">
            <label for="radioColorPicker${i}" class="radio-color-picker-label" style="background-color:${categoryColors[i]};">
        </div>
    `
}

/**
 * function that add the created category values (name, color) to the clipboard and fill the input with new name and color
 * 
 */
function addCategoryToClipboard(i){
    document.getElementById('selectedCategory').innerHTML = addCategoryToClipboardHTML(i);
    taskClipboard.category = categoryList[i]['categoryName'];
    taskClipboard.categoryColor = categoryList[i]['categoryColor'];
    toggleCategoryList();
}

/**
 * html part for filling the category input  
 * 
 * @returns html part for filling the category input 
 */
function addCategoryToClipboardHTML(i){
    return `
    ${categoryList[i]['categoryName']}<div style="background-color:${categoryList[i]['categoryColor']}; height: 19px; width: 19px; border-radius:100%; border: 1px solid white; margin-left:10px;"></div>
    `
}

/**
 * inserts the priority selector
 * 
 * @returns the html part of it
 */
function insertPriorityHTML() {
    return /*html*/ `
        <div class="add-task-priority-container">
            <label class="add-task-priority-label" id="addTaskPriorityLabelUrgent">
                <input onclick="addTaskSetPriority('urgent')" class="add-task-priority-input" id="addTaskPriorityInputUrgent" type="radio" name="Urgent">
                <span class="">Urgent</span>
                <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.9041 14.7547C18.6695 14.7551 18.4409 14.6803 18.252 14.5412L9.99999 8.458L1.74794 14.5412C1.63209 14.6267 1.50051 14.6887 1.3607 14.7234C1.2209 14.7582 1.07562 14.7651 0.933153 14.7437C0.790685 14.7223 0.653821 14.6732 0.530376 14.599C0.40693 14.5247 0.299321 14.427 0.213692 14.3112C0.128063 14.1954 0.0660911 14.0639 0.0313145 13.9243C-0.00346214 13.7846 -0.0103624 13.6394 0.0110078 13.497C0.0541669 13.2095 0.209857 12.9509 0.443829 12.7781L9.34794 6.20761C9.53664 6.06802 9.76521 5.99268 9.99999 5.99268C10.2348 5.99268 10.4633 6.06802 10.652 6.20761L19.5562 12.7781C19.7421 12.915 19.88 13.1071 19.9501 13.327C20.0203 13.5469 20.0191 13.7833 19.9468 14.0025C19.8745 14.2216 19.7347 14.4124 19.5475 14.5475C19.3602 14.6826 19.1351 14.7551 18.9041 14.7547Z" fill="#FF3D00"/>
                    <path d="M18.9042 9.00568C18.6695 9.00609 18.441 8.93124 18.2521 8.79214L10 2.70898L1.74799 8.79214C1.51402 8.96495 1.22093 9.0378 0.933203 8.99468C0.645476 8.95155 0.386678 8.79597 0.213743 8.56218C0.0408069 8.32838 -0.0321009 8.03551 0.0110582 7.74799C0.0542172 7.46048 0.209908 7.20187 0.44388 7.02906L9.34799 0.458588C9.53669 0.318997 9.76526 0.243652 10 0.243652C10.2348 0.243652 10.4634 0.318997 10.6521 0.458588L19.5562 7.02906C19.7421 7.16598 19.88 7.35809 19.9502 7.57797C20.0203 7.79785 20.0192 8.03426 19.9468 8.25344C19.8745 8.47262 19.7348 8.66338 19.5475 8.79847C19.3603 8.93356 19.1351 9.00608 18.9042 9.00568Z" fill="#FF3D00"/>
                </svg>
            </label>
            <label class="add-task-priority-label" id="addTaskPriorityLabelMedium">
                <input onclick="addTaskSetPriority('medium')" class="add-task-priority-input" id="addTaskPriorityInputMedium" type="radio" name="Medium">
                <span class="">Medium</span>
                <svg width="20" height="9" viewBox="0 0 20 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.9041 8.22528H1.09589C0.805242 8.22528 0.526498 8.10898 0.320979 7.90197C0.11546 7.69495 0 7.41419 0 7.12143C0 6.82867 0.11546 6.5479 0.320979 6.34089C0.526498 6.13388 0.805242 6.01758 1.09589 6.01758H18.9041C19.1948 6.01758 19.4735 6.13388 19.679 6.34089C19.8845 6.5479 20 6.82867 20 7.12143C20 7.41419 19.8845 7.69495 19.679 7.90197C19.4735 8.10898 19.1948 8.22528 18.9041 8.22528Z" fill="#FFA800"/>
                    <path d="M18.9041 2.98211H1.09589C0.805242 2.98211 0.526498 2.86581 0.320979 2.6588C0.11546 2.45179 0 2.17102 0 1.87826C0 1.5855 0.11546 1.30474 0.320979 1.09772C0.526498 0.890712 0.805242 0.774414 1.09589 0.774414L18.9041 0.774414C19.1948 0.774414 19.4735 0.890712 19.679 1.09772C19.8845 1.30474 20 1.5855 20 1.87826C20 2.17102 19.8845 2.45179 19.679 2.6588C19.4735 2.86581 19.1948 2.98211 18.9041 2.98211Z" fill="#FFA800"/>
                </svg>
            </label>
            <label class="add-task-priority-label" id="addTaskPriorityLabelLow">
                <input onclick="addTaskSetPriority('low')" class="add-task-priority-input" id="addTaskPriorityInputLow" type="radio" name="Low">
                <span class="">Low</span>
                <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 9.00614C10.2654 9.00654 10.0369 8.9317 9.84802 8.79262L0.944913 2.22288C0.829075 2.13733 0.731235 2.02981 0.65698 1.90647C0.582724 1.78313 0.533508 1.64638 0.51214 1.50404C0.468986 1.21655 0.541885 0.923717 0.714802 0.689945C0.887718 0.456173 1.14649 0.300615 1.43418 0.257493C1.72188 0.21437 2.01493 0.287216 2.24888 0.460004L10.5 6.54248L18.7511 0.460004C18.867 0.374448 18.9985 0.312529 19.1383 0.277782C19.2781 0.243035 19.4234 0.236141 19.5658 0.257493C19.7083 0.278844 19.8451 0.328025 19.9685 0.402225C20.092 0.476425 20.1996 0.574193 20.2852 0.689945C20.3708 0.805697 20.4328 0.937168 20.4676 1.07685C20.5023 1.21653 20.5092 1.36169 20.4879 1.50404C20.4665 1.64638 20.4173 1.78313 20.343 1.90647C20.2688 2.02981 20.1709 2.13733 20.0551 2.22288L11.152 8.79262C10.9631 8.9317 10.7346 9.00654 10.5 9.00614Z" fill="#7AE229"/>
                    <path d="M10.5 14.7547C10.2654 14.7551 10.0369 14.6802 9.84802 14.5412L0.944913 7.97142C0.710967 7.79863 0.555294 7.54005 0.51214 7.25257C0.468986 6.96509 0.541886 6.67225 0.714802 6.43848C0.887718 6.20471 1.14649 6.04915 1.43418 6.00603C1.72188 5.96291 2.01493 6.03575 2.24888 6.20854L10.5 12.291L18.7511 6.20854C18.9851 6.03575 19.2781 5.96291 19.5658 6.00603C19.8535 6.04915 20.1123 6.20471 20.2852 6.43848C20.4581 6.67225 20.531 6.96509 20.4879 7.25257C20.4447 7.54005 20.289 7.79863 20.0551 7.97142L11.152 14.5412C10.9631 14.6802 10.7346 14.7551 10.5 14.7547Z" fill="#7AE229"/>
            </svg>
            </label>
        </div>
    `;
}

/**
 * Sets the prioritylevel of the Task
 * 
 * @param {*} priority name of the specific priority
 */
function addTaskSetPriority(priority) {
    let urgentBox = document.getElementById('addTaskPriorityLabelUrgent');
    let mediumBox = document.getElementById('addTaskPriorityLabelMedium');
    let lowBox = document.getElementById('addTaskPriorityLabelLow');

    if (priority == 'urgent') {
        urgentBox.classList.add('add-task-priority-urgent');
        mediumBox.classList.remove('add-task-priority-medium');
        lowBox.classList.remove('add-task-priority-low');
    } else if (priority == 'medium') {
        urgentBox.classList.remove('add-task-priority-urgent');
        mediumBox.classList.add('add-task-priority-medium');
        lowBox.classList.remove('add-task-priority-low');
    } else if (priority == 'low') {
        urgentBox.classList.remove('add-task-priority-urgent');
        mediumBox.classList.remove('add-task-priority-medium');
        lowBox.classList.add('add-task-priority-low');
    }
    pushPriorityToTaskClipboard()
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
        loadCategorylist();
    }
}

/**
 * inserts the the Description
 * 
 * @returns the html part of it
 */
function insertDescriptionHTML() {
    return /*html*/ `
        <div class="add-task-description">
            <span>Description</span>
            <textarea class="add-task-description-textarea" name="description" id="addTaskDescription" placeholder="Enter a Description" cols="30" rows="10"></textarea>
        </div>
    `;
}



/**
 * inserts the Subtask and subtasklist
 * 
 * @returns the html part of it
 */
function insertSubtasksHTML() {
    return /*html*/ `
        <div class="add-task-subtasks">
            <span>Subtasks</span>
            <div class="add-task-subtasks-form">
                <input class="add-task-subtasks-input" id="addTaskSubtasksInput" placeholder="Add a new subtask" type="text" name="addTaskSubtask" id="">
                <img src="assets/img/plussubtask.svg" class="add-task-create-subtask"  onclick="createSubtask()">
            </div>
            <div class="add-task-subtask-list" id="addTaskCreateSubtask"></div>
        </div>
    `;
}

/**
 * creates and inserts the subtask, while validate the form (no empty string, no duplicates)
 * 
 * @returns validation response
 */
function createSubtask() {
    let subtaskContainer = document.getElementById('addTaskCreateSubtask');
    let subtaskInput = document.getElementById('addTaskSubtasksInput');

    if (subtaskInput.value.trim() === '') {
        subtaskInput.setCustomValidity('Your subtask is empty!');
        subtaskInput.reportValidity();
        return;
    }

    if (!taskClipboard.subtasks.includes(subtaskInput.value)) {
        taskClipboard.subtasks.push(subtaskInput.value)
        subtaskContainer.innerHTML += /*html*/ `
        <div class="add-task-subtask-div">
            <input onclick="AddCheckedSubtaskToClipboard(this)" class="add-task-subtask-checkbox" type="checkbox" checked="" name="${subtaskInput.value}" id="">
            <span>${subtaskInput.value}</span>
        </div>
        `;
        subtaskInput.value = ``;
    } else {
        subtaskInput.setCustomValidity('Subtask already exists');
        subtaskInput.reportValidity();
        return;
    }
}

/**
 * checks the checked status of the checkboxes. push to task if checked
 * 
 * @param {*} checkbox the specific checkbox clicked by the user
 */
function AddCheckedSubtaskToClipboard(checkbox) {
    if (checkbox.checked) {
        taskClipboard.subtasks.push(checkbox.name);
    } else {
        for (let i = 0; i < taskClipboard.subtasks.length; i++) {
            const subtaskName = taskClipboard.subtasks[i];
            if (subtaskName == checkbox.name) {
                taskClipboard.subtasks.splice(i, 1)
            }
        }
    }
}

/**
 * pushes all remaining add-task-informations to the task clipboard
 * 
 * @returns form validation information
 */
async function createTaskAddTaskSite() {
    let title = document.getElementById('addTaskInputTitle');
    if (title.value.trim() === '') {
        title.setCustomValidity('You need a Title to create a Task!');
        title.reportValidity();
        return;
    } else {
        taskClipboard.title = title.value;
        pushDueDateToTaskClipboard()
        pushDescriptionToTaskClipboard()
        await pushTaskToBackend()
        confirmAddedTaskToBoard()
        await initBackend()
        clearTask()
        insertAddTask();
    }
}

/**
 * resets the add task window and clears the clipboard values
 * 
 */
function clearTask() {
    taskClipboard = {
        'title': '',
        'firstNames': [],
        'lastNames': [],
        'dueDate': '',
        'category': '',
        'priority': '',
        'description': '',
        'subtasks': [],
        'categoryColor': ''
    }
}

/**
 * pushes the due date information to the task clipboard
 * 
 */
function pushDueDateToTaskClipboard() {
    let dueDate = document.getElementById('addTaskInputDate');
    taskClipboard.dueDate = dueDate.value;
}

/**
 * pushes the priority information to the task clipboard
 * 
 */
function pushPriorityToTaskClipboard() {
    let priority = document.querySelectorAll('.add-task-priority-input:checked');
    taskClipboard.priority = priority[0].name;
}

/**
 * pushes the description information to the task clipboard
 * 
 */
function pushDescriptionToTaskClipboard() {
    let description = document.getElementById('addTaskDescription');
    taskClipboard.description = description.value;
}

/**
 * a slide-in of the added-task-to-board information
 * 
 */
function confirmAddedTaskToBoard() {
    let confirmInfo = document.getElementById('taskAddedToBoard');

    confirmInfo.classList.remove('display-none')
    setTimeout (function(){
        confirmInfo.classList.remove('translate-y-110');
    },0)
    setTimeout(function(){
        confirmInfo.classList.add('translate-y-110')
        setTimeout(function(){
            confirmInfo.classList.add('display-none')
        },80)
    },1500)
}

//ADD CONTACT TO TASK

/**
 * open contact list / load contacts 
 * search contact in the new task contact list
 */
function searchContacts() {
    expandContactList();

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

/**
 * check if contact list is expanded or not and toggles current status
 * 
 */
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

/**
 * open and close contact list in create new tast section
 * 
 */
function openAndCloseContactList() {
    if (contactListExpanded == false) {
        expandContactList();
        searchContacts();
    } else {
        hideContactList();
    }
}

/**
 * function that runs several functions for expanding contact list
 * 
 */
function expandContactList() {
    contactListExpanded = true;
    checkForExpandedContactList();
    loadContactList();
    checkCheckboxes();
    document.getElementById('addTaskContactList').classList.add('expand-contact-list');
}

/**
 * load all available contacts from userList and creates the html for them
 * 
 */
function loadContactList() {
    document.getElementById('addTaskContactList').innerHTML = ``;
    for (i = 0; i < userList.length; i++) {
        document.getElementById('addTaskContactList').innerHTML += createContactAddTaskHTML(i);
    }
}

/**
 * check each contact in contact list if its in the task and put it on checked=true if it is already in it
 * 
 */
function checkCheckboxes() {
    let nameStillInTask
    for (i = 0; i < userList.length; i++) {
        nameStillInTask = checkForContactInClipboard(i);

        if (nameStillInTask == true) {
            document.getElementById('checkBox' + userList[i].firstName + userList[i].lastName).checked = true;
        }
    }
}

/**
 * function that hides the contact list 
 * 
 */
function hideContactList() {
    contactListExpanded = false
    checkForExpandedContactList()
    document.getElementById('addTaskContactList').classList.remove('expand-contact-list');
}

/**
 * returns the html list element for each contact
 * 
 * @returns  html list element for each contact
 * @param {*} i
 */
function createContactAddTaskHTML(i) {
    return /*html*/ `
    <li class="add-task-contact-container" onclick="toggleContactTask(${i})">
        <input class="add-task-contact-checkbox" type="checkbox" id="checkBox${userList[i].firstName}${userList[i].lastName}">
        <label for="confirm" class="add-task-checkbox-container">${userList[i].firstName} ${userList[i].lastName}</label>
    </li>
 `
}

/**
 * function that removes/add contact to task
 * 
 */
function toggleContactTask(i) {
    let nameStillInTask = checkForContactInClipboard(i);

    if (nameStillInTask == true) {
        removeContactFromTask(i);
    } else {
        addContactToTask(i);
    }
}

/**
 * function that checks if contact is in task or not
 * 
 * @returns if contact is in task or not
 * @param {*} i
 */
function checkForContactInClipboard(i) {
    let nameStillInTask = false;
    for (k = 0; k < taskClipboard.firstNames.length; k++) {
        if (userList[i].firstName == taskClipboard.firstNames[k] && userList[i].lastName == taskClipboard.lastNames[k]) {
            nameStillInTask = true;
        }
    }
    return nameStillInTask;
}

/**
 * function that removes contact from task
 * 
 * @param {*} i 
 */
function removeContactFromTask(i) {
    for (j = 0; j < taskClipboard.firstNames.length; j++) {
        if (taskClipboard.firstNames[j] == userList[i].firstName && taskClipboard.lastNames[j] == userList[i].lastName) {
            taskClipboard.firstNames.splice(j, 1);
            taskClipboard.lastNames.splice(j, 1);
        }
    }
    createSelectedContactIcons();
}

/**
 * function that adds contact to task
 * 
 */
function addContactToTask(i) {
    let newFirstNameForTask = userList[i].firstName;
    let newLastNameForTask = userList[i].lastName;
    taskClipboard.firstNames.push(newFirstNameForTask);
    taskClipboard.lastNames.push(newLastNameForTask);
    createSelectedContactIcons();
}

/**
 * function that returns html code that creates a div where the selected contacts for the task gets shown as icon 
 * 
 * @returns  html code that creates a div where the selected contacts for the task gets shown as icon
 */
function createSelectedContactIconsDivHTML() {
    return /*html*/ `
        <div class="add-task-selected-contacts-icons" id="boardTaskAssignedContacts"></div>
    `;
}

/**
 * function that creates the contact icons from selected contacts for a task
 * 
 */
function createSelectedContactIcons() {
    let contactContainer = document.getElementById('boardTaskAssignedContacts');
    let firstNameFirstLetter;
    let lastNameFirstLetter;
    let backgroundcolor;

    contactContainer.innerHTML = ``;
    for (let i = 0; i < taskClipboard.firstNames.length; i++) {
        firstNameFirstLetter = taskClipboard.firstNames[i].charAt(0);
        lastNameFirstLetter = taskClipboard.lastNames[i].charAt(0);

        for (let j = 0; j < userList.length; j++) {
            if (taskClipboard.firstNames[i] == userList[j]['firstName'] && taskClipboard.lastNames[i] == userList[j]['lastName']) {
                backgroundcolor = userList[j]['backgroundColor'];
            }
        }

        contactContainer.innerHTML += `
        <div class="add-task-selected-contact" style="background-color:${backgroundcolor};">${firstNameFirstLetter}${lastNameFirstLetter}</div>
        `;
    }
}