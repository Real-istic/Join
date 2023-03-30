/**
 * variable for the addTaskOffScreenMenu() function.
 * so the function is able to push the task to the specific column in the board
 */
let boardTaskStatus;

/**
 * calls the board-page and loads drag-and-drop functionality
 * 
 */
function insertBoard() {
    markActiveNavElement('board');
    removeHelp();
    contentDiv.innerHTML = insertBoardHTML();
    insertTaskTolistHTML()
    loadDragAndDrop()
}

/**
 * inserts the board content
 * 
 * @returns the html part
 */
function insertBoardHTML() {
    return /*html*/ `
        ${insertBoardHeaderHTML()}
        ${insertBoardTasks()}
        ${addTaskSlideInMenu()}
    `;
}

/**
 * inserts board header
 * 
 * @returns board header content
 */
function insertBoardHeaderHTML() {
    return /*html*/ `
            <div class="board-header">
            <div class="task-form" action="" >
                <input onkeyup="event.preventDefault(); insertTaskTolistHTML()" class="search-task-input-field" id="searchTaskInputField" type="text" placeholder="Find Task">
                <img src="assets/img/barrier.svg" alt="">
                <img class="search-glass" onclick="insertTaskTolistHTML()" src="assets/img/searchglass.svg" alt="">
            </div>
            <button class="add-task-button" onclick="addTaskOffScreenMenu('toDo')">Add task <img src="assets/img/plus.svg" alt=""></button>
        </div>`;
}

/**
 * inserts board task status header
 * 
 * @returns board task content
 */
function insertBoardTasks() {
    return /*html*/ `
    <div class="board-tasks">
     ${insertTodoTasksHeaderHTML()}
     ${insertInProgressTasksHeaderHTML()}
     ${insertAwaitFeedbackTasksHeaderHTML()}
     ${insertDoneTasksHeaderHTML()}
    </div>
    `;
}

/**
 * inserts to-do tasks header
 * 
 * @returns the html part
 */
function insertTodoTasksHeaderHTML() {
    return/*html*/ `
        <div class="to-do-tasks">
            <div class="to-do-header">
                <span>To do</span>
                <img class="board-add-task-plus-icon" onclick="addTaskOffScreenMenu('toDo')" src="assets/img/plusbutton.svg" alt="">
            </div>
            <div class="to-do-tasks-container" id="toDoTasksContainer">
                <!-- tasks here -->
            </div>
        </div>
        `;
}

/**
 * inserts in progress tasks header
 * 
 * @returns the html part
 */
function insertInProgressTasksHeaderHTML() {
    return /*html*/ `
        <div class="in-progress-tasks">
            <div class="in-progress-header">
                <span>In progress</span>
                <img class="board-add-task-plus-icon" onclick="addTaskOffScreenMenu('inProgress')" src="assets/img/plusbutton.svg" alt="">
            </div>
            <div class="in-progress-tasks-container" id="inProgressTasksContainer">
                <!-- tasks here -->
            </div>
        </div>
    `;
}

/**
 * inserts await feedback tasks header
 * 
 * @returns the html part
 */
function insertAwaitFeedbackTasksHeaderHTML() {
    return /* html */ `
        <div class="await-feedback-tasks">
            <div class="await-feedback-header">
                <span>Await feedback</span>
                <img class="board-add-task-plus-icon" onclick="addTaskOffScreenMenu('awaitFeedback')" src="assets/img/plusbutton.svg" alt="">
            </div>
            <div class="await-feedback-tasks-container" id="awaitFeedbackTasksContainer">
                <!-- tasks here -->
            </div>
        </div>
    `;
}

/**
 * inserts the done tasks header
 * 
 * @returns the html part
 */
function insertDoneTasksHeaderHTML() {
    return /*html*/ `
        <div class="done-tasks">
            <div class="done-header">
                <span>Done</span>
                <img class="board-add-task-plus-icon" onclick="addTaskOffScreenMenu('done')" src="assets/img/plusbutton.svg" alt="">
            </div>
            <div class="done-tasks-container" id="doneTasksContainer">
                <!-- tasks here -->
            </div>
        </div>
    `;
}

/**
 * calls the add-task-slide-in-menu from the side,
 * and sets the div for it
 *
 */
function addTaskOffScreenMenu(taskStatus) {
    boardTaskStatus = taskStatus;
    clearTaskClipboard()
    addTaskFillSlideInMenu()
    toggleAddTaskMenuOffScreen()
}

/**
 * inserts the div for the add-task-slide-in-menu
 * 
 * @returns the html part
 */
function addTaskSlideInMenu() {
    return /*html*/ `
        <div class="add-task-slide-in-menu transform-x-off-screen scrollbar1" id="addTaskSlideInMenu">
        </div>
    `;
}

/**
 * inserts the whole html part of the slide-in-menu
 * 
 */
function addTaskFillSlideInMenu() {
    document.getElementById('addTaskSlideInMenu').innerHTML = /*html*/ `
        ${insertTaskSlideInHeader()}
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
        `;
}

/**
 * toggles the add-task-slide-in-menu in or out
 * 
 */
function toggleAddTaskMenuOffScreen() {
    let slideInMenu = document.getElementById('addTaskSlideInMenu');
    slideInMenu.classList.toggle('transform-x-off-screen');
    let opacityDiv = document.getElementById('reduceOpacity');
    opacityDiv.classList.toggle('reduce-opacity');
}

/**
 * creates a task at the board
 * 
 */
function insertTaskTolistHTML() {
    document.getElementById('toDoTasksContainer').innerHTML = ``;
    document.getElementById('inProgressTasksContainer').innerHTML = ``;
    document.getElementById('awaitFeedbackTasksContainer').innerHTML = ``;
    document.getElementById('doneTasksContainer').innerHTML = ``;
    let lists;
    let searchInput = document.getElementById('searchTaskInputField').value;

    for (let i = 0; i < taskList.length; i++) {
        lists = document.getElementById(taskList[i].taskStatus + 'TasksContainer');
        const task = taskList[i];
        
        if (task.title.toLowerCase().includes(searchInput.toLowerCase()) || task.description.toLowerCase().includes(searchInput.toLowerCase())) {
            
            lists.innerHTML += /*html*/ `
            <div class="task-wrapper" id="${i}">
                <div onclick="openTask(${i})" class="board-task" id="boardTask${i}">
                    <div class="board-task-category-div">
                        <span style="background: ${task.categoryColor};" class="board-task-category">${task.category}</span>
                    </div>
                    <div class="board-task-title-and-description">
                        <span class="board-task-title">${task.title}</span>
                        <span class="board-task-description">${task.description}</span>
                    </div>
                    <div class="board-task-subtask-status" id="boardTaskSubtaskStatus${i}">
                        ${insertSubtaskProgress(i)}
                    </div>
                    <div class="board-task-assigned-contacts-and-prority">
                        <div class="board-task-assigned-contacts" id="boardTaskAssignedContacts${task.title}"></div>
                        <img src="assets/img/priority${task.priority.toLowerCase()}.svg">
                    </div>
                </div>
            </div>
            `;
        }
    }
    insertAssignedContactsToTaskHTML()
}



/**
 * checks if subtasks exist, if the exist, the subtaskstatus gets implemented
 * 
 * @param {*} i for the specific task
 * @returns the html part
 */
function insertSubtaskProgress(i) {
    const task = taskList[i]
    if (task.subtasks.length > 0) {
        return /*html*/ `
            <div class="board-task-subtask-statusbar">
                <div class="board-task-subtask-filled-statusbar" id="boardTaskSubtaskFilledStatusbar" style="width:${fillSubtaskStatusbar(i) / task.subtasksState.length * 100}%;"></div>
            </div>
            <span class="board-task-subtask-status-info">
                    ${fillSubtaskStatusbar(i)} / ${task.subtasksState.length} Done
            </span>
        `;
    } else {
        return /*html*/ `
            <div class="board-task-subtask-filled-statusbar"></div>
        `;
    }
}

/**
 * fills the subtask-statusbar and sets the status-count on the board-tasks
 * 
 * @param {*} i for the specific task
 * @returns the checked subtask-count
 */
function fillSubtaskStatusbar(i) {
    const task = taskList[i];
    let checkedSubtaskCount = 0;

    for (let j = 0; j < task.subtasksState.length; j++) {
        const state = task.subtasksState[j];
        if (state === true) {
            checkedSubtaskCount++;
        }
    }
    return checkedSubtaskCount;
}

/**
 * inserts the assigned contacts to the task while considering the search-input
 * 
 */
function insertAssignedContactsToTaskHTML() {
    let searchInput = document.getElementById('searchTaskInputField').value;

    for (let i = 0; i < taskList.length; i++) {
        let contactContainer = document.getElementById('boardTaskAssignedContacts' + taskList[i].title);
        let task = taskList[i];

        if (task.title.toLowerCase().includes(searchInput.toLowerCase()) || task.description.toLowerCase().includes(searchInput.toLowerCase())) {
            if (!(taskList[i].firstNames.length > 2)) {
                for (let j = 0; j < taskList[i].firstNames.length; j++) {
                    let firstNameTask = taskList[i].firstNames[j];
                    let lastNameTask = taskList[i].lastNames[j];
                    for (let k = 0; k < userList.length; k++) {
                        if (firstNameTask == userList[k].firstName && lastNameTask == userList[k].lastName) {
                            let userBackgroundColor = userList[k].backgroundColor;
                            contactContainer.innerHTML += /*html*/ `
                        <div class="add-task-selected-contact" style="background:${userBackgroundColor};">${firstNameTask.charAt(0)}${lastNameTask.charAt(0)}</div>
                        `;
                        }
                    }
                }
            } else {
                for (let j = 0; j < 2; j++) {
                    let firstNameTask = taskList[i].firstNames[j];
                    let lastNameTask = taskList[i].lastNames[j];
                    for (let k = 0; k < userList.length; k++) {
                        if (firstNameTask == userList[k].firstName && lastNameTask == userList[k].lastName) {
                            let userBackgroundColor = userList[k].backgroundColor;
                            contactContainer.innerHTML += /*html*/ `
                        <div class="add-task-selected-contact" style="background:${userBackgroundColor};">${firstNameTask.charAt(0)}${lastNameTask.charAt(0)}</div>
                        `;
                        }
                    }
                }
                contactContainer.innerHTML += /*html*/ `
                <div class="add-task-assigned-contact-overflow">+${taskList[i].firstNames.length - 2}</div>
                `;
            }
        }
    }
}

/**
 * inserts the specific header and buttons to the add-task-slide-in-menu
 * 
 * @returns the html part
 */
function insertTaskSlideInHeader() {
    return /*html*/ `
        <div class="add-task-slide-in-header">
            <span>Add Task</span>
            <button class="add-task-slide-in-create-task-button" onclick="createTaskBoardSite()">Create Task<img class="add-task-slide-in-check-icon" src="assets/img/checkicon.svg" alt=""></button>
            </button>
            <img onclick="toggleAddTaskMenuOffScreen()" src="assets/img/x.svg" alt="">
        </div>
    `;
}

/**
 * toggle and inserts the board-task-slide-in-menu
 * 
 * @param {*} i the specific task
 */
function openTask(i) {
    pushBoardTaskToClipboard(i)
    toggleTaskBoardTask()
    insertOpenTaskSlideInHTML(i)
}

/**
 * the pure toggle for the board-task-slide-in-menu
 * 
 */
function toggleTaskBoardTask() {
    clearTaskClipboard()

    let opacityDiv = document.getElementById('reduceOpacityBehindTask');
    let taskDiv = document.getElementById('boardTaskSlideInDiv');
    if (taskDiv.classList.contains('display-none')) {
        taskDiv.classList.toggle('display-none');
        setTimeout(() => {
            opacityDiv.classList.toggle('reduce-opacity');
            taskDiv.classList.toggle('board-task-translate-y');
        }, 100);
    } else {
        opacityDiv.classList.toggle('reduce-opacity');
        taskDiv.classList.toggle('board-task-translate-y');
        setTimeout(() => {
            taskDiv.classList.toggle('display-none');
        }, 100);
    }


}

/**
 * inserts the whole html part for the board-task-slide-in-menu
 * 
 * @param {*} i for the specific Task
 */
function insertOpenTaskSlideInHTML(i) {
    let taskSlideInDiv = document.getElementById('boardTaskSlideInDiv');

    taskSlideInDiv.innerHTML = /*html*/ `
        ${insertBoardTaskSlideInCategoryHTML(i)}
        ${insertBoardTaskSlideInTitleHTML(i)}
        ${insertBoardTaskSlideInDescriptionHTML(i)}
        ${insertBoardTaskSlideInDueDateHTML(i)}
        ${insertBoardTaskSlideInPriorityHTML(i)}
        ${boardTaskSlideInSubtaskHeaderHTML()}
        <div class="add-task-subtask-list" id="addTaskCreateSubtask${i}"></div>
        ${insertBoardTaskSlideInAssigned(i)}
    `;
    insertBoardTaskSlideInAssignedContactsIteration(i)
    boardTaskSlideInInsertSubtasks(i)
}

/**
 * saves the edited task to the task-list, then the task gets pushed to the backend
 *  
 * @param {*} i for the specific task
 * @returns validation information
 */
async function boardTaskSaveEditTaskTolist(i) {
    let title = document.getElementById('addTaskInputTitle');
    let searchKey = 'title';
    let searchValue = title.value
    let valueIsPresent = taskList.some(obj => obj[searchKey] == searchValue);
    if (title.value.trim() === '') {
        title.setCustomValidity('You need a Title to create a Task!');
        title.reportValidity();
        return;
    } else if (title.value.length >= 35) {
        title.setCustomValidity('Title is too long!');
        title.reportValidity();
        return;
    } else if (!(title.value == taskClipboard.title) && (valueIsPresent)) {
        title.setCustomValidity('Title is already assigned!');
        title.reportValidity();
        return
    } else {
        pushEditedTaskTolist(i)
        await backend.setItem('tasks', JSON.stringify(taskList));
        insertTaskTolistHTML()
        insertOpenTaskSlideInHTML(i)
        clearTaskClipboard()
    }
}

/**
 * pushes the edited task to the task-list
 * 
 * @param {*} i for the specific task
 */
function pushEditedTaskTolist(i) {
    taskList[i].title = document.getElementById('addTaskInputTitle').value;
    taskList[i].firstNames = taskClipboard.firstNames
    taskList[i].lastNames = taskClipboard.lastNames
    taskList[i].dueDate = document.getElementById('addTaskInputDate').value;
    taskList[i].category = taskClipboard.category
    taskList[i].categoryColor = taskClipboard.categoryColor
    pushPriorityToTaskClipboard()
    taskList[i].description = document.getElementById('addTaskDescription').value
    taskList[i].subtasks = taskClipboard.subtasks
    taskList[i].subtasksState = taskClipboard.subtasksState
}

/**
 * inserts the the board-task-slide-in-category
 * 
 * @param {*} i for the specific task
 * @returns the html part
 */
function insertBoardTaskSlideInCategoryHTML(i) {
    return /*html*/ `
        <div class="board-task-slide-in-category">
            <img onclick="toggleTaskBoardTask()" src="assets/img/x.svg" alt="">
            <span class="board-task-category" style="background:${taskList[i].categoryColor};">${taskList[i].category}</span>
        </div>
    `;
}

/**
 * inserts the the board-task-slide-in-title
 * 
 * @param {*} i for the specific task
 * @returns the html part
 */
function insertBoardTaskSlideInTitleHTML(i) {
    return /*html*/ `
        <span class="board-task-slide-in-title">${taskList[i].title}</span>
    `;
}

/**
 * inserts the board-task-slide-in-description
 * 
 * @param {*} i for the specific task
 * @returns the html part
 */
function insertBoardTaskSlideInDescriptionHTML(i) {
    return /*html*/ `
    <span class="board-task-slide-in-description">${taskList[i].description}</span>
`;
}

/**
 * inserts the board-task-slide-in-due_date
 * 
 * @param {*} i for the specific task
 * @returns the html part
 */
function insertBoardTaskSlideInDueDateHTML(i) {
    return /*html*/ `
    <div class="board-task-slide-in-date-div">
        <span class="board-task-slide-in-datename">Due Date:</span>
        <span class="board-task-slide-in-datevalue">${taskList[i].dueDate}</span>
    </div>
`;
}

/**
 * inserts the board-task-slide-in-priority
 * 
 * @param {*} i for the specific task
 * @returns the html part of it
 */
function insertBoardTaskSlideInPriorityHTML(i) {
    return /*html*/ `
    <div class="board-task-slide-in-priority-div">
        <span class="board-task-slide-in-priorityname">Priority:</span>
        <span class="board-task-slide-in-priorityvalue board-task-slide-in-priority-${taskList[i].priority.toLowerCase()}">${taskList[i].priority} <img src="assets/img/priority${taskList[i].priority.toLowerCase()}.svg" alt=""></span>
    </div>
`;
}

/**
 * inserts the board-task-slide-in-assigned-contacts-container
 * 
 * @param {*} i for the specific task
 * @returns the html part of it
 */
function insertBoardTaskSlideInAssigned(i) {
    return /*html*/ `
            <span class="board-task-slide-in-assignedto">Assigned to:</span>
    `;
}

/**
 * inserts the board-task-slide-in-assigned-contacts (iteration)
 * 
 * @param {*} i for the specific task
 */
function insertBoardTaskSlideInAssignedContactsIteration(i) {
    let contactContainer = document.getElementById('boardTaskSlideInDiv');

    for (let j = 0; j < taskList[i].firstNames.length; j++) {
        let firstNameTask = taskList[i].firstNames[j];
        let lastNameTask = taskList[i].lastNames[j];
        for (let k = 0; k < userList.length; k++) {
            if (firstNameTask == userList[k].firstName && lastNameTask == userList[k].lastName) {
                let userBackgroundColor = userList[k].backgroundColor;
                contactContainer.innerHTML += /*html*/ `
                    <div class="board-task-slide-in-contact">
                        <div class="add-task-selected-contact" style="background:${userBackgroundColor}; margin:0;">${firstNameTask.charAt(0)}${lastNameTask.charAt(0)}</div><span class="board-task-slide-in-contact-name">${firstNameTask} ${lastNameTask}</span>
                    </div>    
                `;
            }
        }
    }
    contactContainer.innerHTML += /*html*/ `
        <div onclick="boardTaskSlideInEditTask(${i})" class="board-task-slide-in-editbutton">
            <img src="assets/img/edit_task.svg" alt="">
        </div>
        `;
}

/**
 * inserts the edit window of the board area (klick on task -> edit)
 * 
 * @param {*} i for the specific task
 */
function boardTaskSlideInEditTask(i) {
    pushBoardTaskToClipboard(i)
    let slideInTask = document.getElementById('boardTaskSlideInDiv');
    slideInTask.innerHTML = /*html*/ `
    <div class="board-task-slide-in-edit-div">
        <img onclick="toggleTaskBoardTask()" src="assets/img/x.svg" alt="">
        ${insertTaskTitleHTML()}
        <div style="margin-bottom: 25px"></div>
        ${insertDescriptionHTML()}
        ${insertDueDateHTML()}
        ${insertPriorityHTML()}
        <div style="margin-bottom: 25px"></div>
        ${boardTaskSlideInAssignedToHeaderHTML()}
        ${insertTaskContactlistHTML()}
        ${createSelectedContactIconsDivHTML()} 
        ${boardTaskSlideInOkButton(i)}
    </div>
    `;
    boardTaskEditSlideInInsertValues(i)
    createSelectedContactIcons();
}

/**
 * pushes the board-task-values to the clipboard
 * 
 * @param {*} i for the specific task
 */
function pushBoardTaskToClipboard(i) {
    taskClipboard.title = taskList[i].title
    taskClipboard.firstNames = taskList[i].firstNames
    taskClipboard.lastNames = taskList[i].lastNames
    taskClipboard.dueDate = taskList[i].dueDate
    taskClipboard.category = taskList[i].category
    taskClipboard.categoryColor = taskList[i].categoryColor
    taskClipboard.priority = taskList[i].priority
    taskClipboard.description = taskList[i].description
    taskClipboard.subtasks = taskList[i].subtasks
    taskClipboard.subtasksState = taskList[i].subtasksState
}

/**
 * inserts the taskvalues for the edit-task-window
 * 
 */
function boardTaskEditSlideInInsertValues() {
    boardTaskEditSlideInInsertTitle()
    boardTaskEditSlideInInsertDescription()
    boardTaskEditSlideInInsertDueDate()
    boardTaskEditSlideInInsertPriority()
}

/**
 * inserts the task title for the edit-window
 * 
 */
function boardTaskEditSlideInInsertTitle() {
    let title = document.getElementById('addTaskInputTitle');
    title.value = taskClipboard.title
}

/**
 * inserts the description fot the edit-task-window
 * 
 */
function boardTaskEditSlideInInsertDescription() {
    let description = document.getElementById('addTaskDescription');
    description.value = taskClipboard.description
}

/**
 * inserts the due-date for the edit-task-window
 * 
 */
function boardTaskEditSlideInInsertDueDate() {
    let dueDate = document.getElementById('addTaskInputDate');
    dueDate.value = taskClipboard.dueDate
}

/**
 * inserts and checks the task-priority for the edit-task-window
 * 
 */
function boardTaskEditSlideInInsertPriority() {
    let priorityValue = taskClipboard.priority
    let priorityDocument = document.getElementById('addTaskPriorityInput' + priorityValue);
    priorityDocument.checked = true

    let urgentBox = document.getElementById('addTaskPriorityLabelUrgent');
    let mediumBox = document.getElementById('addTaskPriorityLabelMedium');
    let lowBox = document.getElementById('addTaskPriorityLabelLow');

    if (priorityValue == 'Urgent') {
        urgentBox.classList.add('add-task-priority-urgent');
        mediumBox.classList.remove('add-task-priority-medium');
        lowBox.classList.remove('add-task-priority-low');
    } else if (priorityValue == 'Medium') {
        urgentBox.classList.remove('add-task-priority-urgent');
        mediumBox.classList.add('add-task-priority-medium');
        lowBox.classList.remove('add-task-priority-low');
    } else if (priorityValue == 'Low') {
        urgentBox.classList.remove('add-task-priority-urgent');
        mediumBox.classList.remove('add-task-priority-medium');
        lowBox.classList.add('add-task-priority-low');
    }
}

/**
 * inserts the subtask-header for the task-slide-in-menu
 * 
 * @returns the html part
 */
function boardTaskSlideInSubtaskHeaderHTML() {
    return /*html*/ `
        <span class="board-task-slide-in-edit-task-subtask">Subtasks:</span>
    `;
}

/**
 * inserts the assigned-to-header for the task-slide-in-menu
 * 
 * @returns the html part
 */
function boardTaskSlideInAssignedToHeaderHTML() {
    return /*html*/ `
    <span class="board-task-slide-in-edit-task-Assigned-to">Assigned to</span>
`;
}

/**
 * inserts the checkable subtasks for the task-slide-in-window 
 * 
 * @param {*} i for the specific task
 */
function boardTaskSlideInInsertSubtasks(i) {
    let subtaskContainer = document.getElementById('addTaskCreateSubtask' + i);

    for (let j = 0; j < taskList[i].subtasks.length; j++) {
        const subtask = taskList[i].subtasks[j];
        const subtaskState = taskList[i].subtasksState[j];
        if (subtaskState == true) {
            subtaskContainer.innerHTML += /*html*/ `
            <div class="add-task-subtask-div">
                <input onclick="toggleSubtaskInlist(${i}, ${j})" checked class="add-task-subtask-checkbox" type="checkbox" name="${subtask}" id="editSubtask${i}-${j}">
                <span>${subtask}</span>
            </div>
        `;
        } else {
            subtaskContainer.innerHTML += /*html*/ `
            <div class="add-task-subtask-div">
                <input onclick="toggleSubtaskInlist(${i}, ${j})" class="add-task-subtask-checkbox" type="checkbox" name="${subtask}" id="editSubtask${i}-${j}">
                <span>${subtask}</span>
            </div>
        `;
        }
    }
}

/**
 * inserts/removes the subtask of the specific task. changes are made in real time at the task list for the specific task
 * 
 * @param {*} i for the specific task
 * @param {*} j for the specific subtask
 */
async function toggleSubtaskInlist(i, j) {
    let subtaskCheckbox = document.getElementById('editSubtask' + i + `-` + j)
    if (subtaskCheckbox.checked) {
        taskList[i].subtasksState.splice(j, 1, true)
    } else {
        taskList[i].subtasksState.splice(j, 1, false)
    }
    await backend.setItem('tasks', JSON.stringify(taskList));
    await initBackend()
    insertTaskTolistHTML()
}

/**
 * inserts the ok-button for the edit-task-window
 * 
 * @param {*} i for the specific task
 * @returns the html part
 */
function boardTaskSlideInOkButton(i) {
    return /*html*/ `
        <div onclick="boardTaskSaveEditTaskTolist(${i})" class="board-task-slide-in-edit-task-ok-Button">Ok <img src="assets/img/checkicon.svg" alt=""></div>
    `;
}

/**
 * creates the task and adds it to the board
 * 
 * @returns the validation
 */
async function createTaskBoardSite() {
    let title = document.getElementById('addTaskInputTitle');
    let searchKey = 'title';
    let searchValue = title.value
    let valueIsPresent = taskList.some(obj => obj[searchKey] == searchValue);

    if (title.value.trim() === '') {
        title.setCustomValidity('You need a Title to create a Task!');
        title.reportValidity();
        return;
    } else if (title.value.length >= 35) {
        title.setCustomValidity('Title is too long');
        title.reportValidity();
        return;
    } else if (valueIsPresent) {
        title.setCustomValidity('Title is already assigned!');
        title.reportValidity();
        return
    } else if (taskClipboard.priority == '') {
        let priorityArea = document.getElementById('addTaskPriorityInputMedium');
        priorityArea.setCustomValidity('No Priority given yet!')
        priorityArea.reportValidity();
    } else {
        taskClipboard.title = title.value;
        taskClipboard.taskStatus = boardTaskStatus;
        pushDueDateToTaskClipboard()
        pushDescriptionToTaskClipboard()
        await pushTaskToBackend()
        confirmAddedTaskToBoard()
        await initBackend()
        insertTaskTolistHTML()
        addTaskFillSlideInMenu()
        clearTaskClipboard()
    }
}