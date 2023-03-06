/**
 * inserts board content
 * 
 */
function insertBoard() {
    contentDiv.innerHTML = insertBoardHTML();
    insertsTaskToTodolistHTML()
    // document.getElementById("help").classList.remove("help-none");
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
            <form class="task-form" action="" onsubmit="searchTask()">
                <input class="search-task-input-field" type="text" placeholder="Find Task" required>
                <img src="assets/img/barrier.svg" alt="">
                <img class="search-glass" onclick="searchTask()" src="assets/img/searchglass.svg" alt="">
            </form>
            <button class="add-task-button" onclick="addTaskOfScreenMenu()">Add task <img src="assets/img/plus.svg" alt=""></button>
        </div>`;
}

/**
 * inserts board task content
 * 
 * @returns board task content
 */
function insertBoardTasks() {
    return /*html*/ `
    <div class="board-tasks">
     ${insertTodoTasksHTML()}
     ${insertInProgressTasksHTML()}
     ${insertAwaitFeedbackTasksHTML()}
     ${insertDoneTasksHTML()}
    </div>
    `;
}

/**
 * inserts to do tasks
 * 
 * @returns to do content
 */
function insertTodoTasksHTML() {
    return/*html*/ `
        <div class="to-do-tasks">
            <div class="to-do-header">
                <span>To do</span>
                <img class="board-add-task-plus-icon" onclick="addTaskOfScreenMenu()" src="assets/img/plusbutton.svg" alt="">
            </div>
            <div class="to-do-tasks-container" id="toDoTasksContainer">
                <!-- tasks here -->
            </div>
        </div>
        `;
}

/**
 * inserts in progress tasks
 * 
 * @returns in progress content
 */
function insertInProgressTasksHTML() {
    return /*html*/ `
        <div class="in-progress-tasks">
            <div class="in-progress-header">
                <span>In progress</span>
                <img class="board-add-task-plus-icon" onclick="addTaskOfScreenMenu()" src="assets/img/plusbutton.svg" alt="">
            </div>
            <div class="in-progress-tasks-container" id="inProgressTasksContainer">
                <!-- tasks here -->
            </div>
        </div>
    `;
}

/**
 * inserts await feedback tasks
 * 
 * @returns await feedback content
 */
function insertAwaitFeedbackTasksHTML() {
    return /* html */ `
        <div class="await-feedback-tasks">
            <div class="await-feedback-header">
                <span>Await feedback</span>
                <img class="board-add-task-plus-icon" onclick="addTaskOfScreenMenu()" src="assets/img/plusbutton.svg" alt="">
            </div>
            <div class="await-feedback-tasks-container" id="awaitFeedbackTasksContainer">
                <!-- tasks here -->
            </div>
        </div>
    `;
}

/**
 * inserts done tasks
 * 
 * @returns done content
 */
function insertDoneTasksHTML() {
    return /*html*/ `
        <div class="done-tasks">
            <div class="done-header">
                <span>Done</span>
                <img class="board-add-task-plus-icon" onclick="addTaskOfScreenMenu()" src="assets/img/plusbutton.svg" alt="">
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
function addTaskOfScreenMenu() {
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
function insertsTaskToTodolistHTML() {
    let todoList = document.getElementById('toDoTasksContainer');
    todoList.innerHTML = ``;

    for (let i = 0; i < taskList.length; i++) {
        const task = taskList[i];
        todoList.innerHTML += /*html*/ `
        <div onclick="openTask(${i})" class="board-task" id="boardTask${i}">
            <span style="background-color: ${taskList[i].categoryColor};" class="board-task-category">${taskList[i].category}</span>
            <div class="board-task-title-and-description">
                <span class="board-task-title">${taskList[i].title}</span>
                <span class="board-task-description">${taskList[i].description}</span>
            </div>
            <div class="board-task-subtask-status">
                <div class="board-task-subtask-statusbar">
                    <!-- to do -->
                </div>
                <span class="board-task-subtask-status-info">
                    <!-- to do -->
                </span>
            </div>
            <div class="board-task-assigned-contacts-and-prority">
                <div class="board-task-assigned-contacts" id="boardTaskAssignedContacts${taskList[i].title}">
                </div>
                <img src="assets/img/priority${taskList[i].priority.toLowerCase()}.svg" alt="">
            </div>
        </div>
    `;
    }
    insertAssignedContactsToTaskHTML()
}

/**
 * inserts the contacts to the task
 * 
 */
function insertAssignedContactsToTaskHTML() {

    for (let i = 0; i < taskList.length; i++) {
        let contactContainer = document.getElementById('boardTaskAssignedContacts' + taskList[i].title);

        if (!taskList[i].firstNames.length > 3) {
            for (let j = 0; j < taskList[i].firstNames.length; j++) {
                let firstNameTask = taskList[i].firstNames[j];
                let lastNameTask = taskList[i].lastNames[j];
                for (let k = 0; k < userList.length; k++) {
                    if (firstNameTask == userList[k].firstName && lastNameTask == userList[k].lastName) {
                        let userBackgroundColor = userList[k].backgroundColor;
                        contactContainer.innerHTML += /*html*/ `
                        <div class="add-task-selected-contact" style="background-color:${userBackgroundColor};">${firstNameTask.charAt(0)}${lastNameTask.charAt(0)}</div>
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
                        <div class="add-task-selected-contact" style="background-color:${userBackgroundColor};">${firstNameTask.charAt(0)}${lastNameTask.charAt(0)}</div>
                        `;
                    }
                }
            }
        }
        contactContainer.innerHTML += /*html*/ `
        <div class="add-task-assigned-contact-overflow">+${taskList[i].firstNames.length - 2}</div>
        `;
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
    toggleTaskBoardTask()
    insertOpenTaskSlideInHTML(i)
}

/**
 * the pure toggle for the board-task-slide-in-menu
 * 
 */
function toggleTaskBoardTask() {
    let opacityDiv = document.getElementById('reduceOpacityBehindTask');
    let taskDiv = document.getElementById('boardTaskSlideInDiv');
    opacityDiv.classList.toggle('reduce-opacity');
    taskDiv.classList.toggle('board-task-translate-y');
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
        ${insertBoardTaskSlideInAssigned(i)}
        <div class="board-task-slide-in-editbutton">
            <img src="assets/img/edit_task.svg" alt="">
        </div>
    `;
    insertBoardTaskSlideInAssignedContactsIteration(i)
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
            <img src="assets/img/x.svg" alt="">
            <span class="board-task-category" style="background-color:${taskList[i].categoryColor};">${taskList[i].category}</span>
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
                        <div class="add-task-selected-contact" style="background-color:${userBackgroundColor}; margin:0;">${firstNameTask.charAt(0)}${lastNameTask.charAt(0)}</div><span class="board-task-slide-in-contact-name">${firstNameTask} ${lastNameTask}</span>
                    </div>    
                `;
            }
        }
    }
}

/**
 * creates the task and adds it to the board
 * 
 * @returns the validation
 */
async function createTaskBoardSite() {
    let title = document.getElementById('addTaskInputTitle');
    if (title.value.trim() === '') {
        title.setCustomValidity('You need a Title to create a Task!');
        title.reportValidity();
        return;
    } else if (title.value.length >= 35) {
        title.setCustomValidity('Title is too long');
        title.reportValidity();
        return;
    } else {
        taskClipboard.title = title.value;
        pushDueDateToTaskClipboard()
        pushDescriptionToTaskClipboard()
        await pushTaskToBackend()
        confirmAddedTaskToBoard()
        await initBackend()
        insertsTaskToTodolistHTML()
        clearTask()
        document.getElementById('addTaskSlideInMenu').innerHTML = ``;
        addTaskFillSlideInMenu()
    }
}
