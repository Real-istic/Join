
/**
 * inserts board content
 * 
 */
function insertBoard() {
    contentDiv.innerHTML = insertBoardHTML();
    insertsTaskToTodolistHTML()
    insertAssignedContactsToTaskHTML()
    document.getElementById("help").classList.remove("help-none");
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
        <div class="to-do-tasks" id="toDoTasks">
            <div class="to-do-header">
                <span>To do</span>
                <img class="board-add-task-plus-icon" onclick="addTaskOfScreenMenu()" src="assets/img/plusbutton.svg" alt="">
            </div>
            <!-- tasks here -->
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
        <div class="in-progress-tasks" id="inProgressTasks">
            <div class="in-progress-header">
                <span>In progress</span>
                <img class="board-add-task-plus-icon" onclick="addTaskOfScreenMenu()" src="assets/img/plusbutton.svg" alt="">
            </div>
            <!-- tasks here -->
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
        <div class="await-feedback-tasks" id="awaitFeedbackTasks">
            <div class="await-feedback-header">
                <span>Await feedback</span>
                <img class="board-add-task-plus-icon" onclick="addTaskOfScreenMenu()" src="assets/img/plusbutton.svg" alt="">
            </div>
            <!-- tasks here -->
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
        <div class="done-tasks" id="doneTasks">
            <div class="done-header">
                <span>Done</span>
                <img class="board-add-task-plus-icon" onclick="addTaskOfScreenMenu()" src="assets/img/plusbutton.svg" alt="">
            </div>
            <!-- tasks here -->
        </div>
    `;
}

/**
 * calls the add-task-slide-in-menu from the side,
 * also fills the html part of it 
 *
 */
function addTaskOfScreenMenu() {
    addTaskFillSlideInMenu()
    toggleAddTaskMenuOffScreen()
}

/**
 * inserts the content of the add-task-slide-in-menu
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
 * inserts the html part of the slide-in-menu
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
    let todoList = document.getElementById('toDoTasks');

    for (let i = 0; i < taskList.length; i++) {
        const task = taskList[i];
        todoList.innerHTML += /*html*/ `
        <div class="board-task">
            <span style="background-color: ${taskList[i].categoryColor};" class="board-task-category">${taskList[i].category}</span>
            <div class="board-task-title-and-description">
                <span class="board-task-title">${taskList[i].title}</span>
                <span class="board-task-description">${taskList[i].description}</span>
            </div>
            <div class="board-task-subtask-status">
                <div class="board-task-subtask-statusbar">

                </div>
                <span class="board-task-subtask-status-info">

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
}

/**
 * inserts the contacts to the task
 * 
 */
function insertAssignedContactsToTaskHTML() {

    for (let i = 0; i < taskList.length; i++) {
        let contactContainer = document.getElementById('boardTaskAssignedContacts' + taskList[i].title);

        for (let j = 0; j < taskList[i].firstNames.length; j++) {
            let firstNameTask = taskList[i].firstNames[j];
            let lastNameTask = taskList[i].lastNames[j];
            for (let k = 0; k < userList.length; k++) {
                if (firstNameTask == userList[k].firstName && lastNameTask == userList[k].lastName) {
                    let userBackgroundColor = userList[k].backgroundColor;
                    contactContainer.innerHTML += `
                        <div class="add-task-selected-contact" style="background-color:${userBackgroundColor};">${firstNameTask.charAt(0)}${lastNameTask.charAt(0)}</div>
                        `;
                }
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
            <button class="add-task-slide-in-create-task-button" onclick="createTask()">Create Task<img class="add-task-slide-in-check-icon" src="assets/img/checkicon.svg" alt=""></button>
            </button>
            <img onclick="toggleAddTaskMenuOffScreen()" src="assets/img/x.svg" alt="">
        </div>
    `;
}

