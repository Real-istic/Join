
/**
 * inserts board content
 * 
 */
function insertBoard() {
    contentDiv.innerHTML = insertBoardHTML();
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
    let categoryColor = setCategoryColor();

    todoList.innerHTML += /*html*/ `
        <div class="board-task">
            <span style="background-color: ${categoryColor};" class="board-task-category">${taskClipboard.category}</span>
            <div class="board-task-title-and-description">
                <span class="board-task-title">${taskClipboard.title}</span>
                <span class="board-task-description">${taskClipboard.description}</span>
            </div>
            <div class="board-task-subtask-status">
                <div class="board-task-subtask-statusbar">

                </div>
                <span class="board-task-subtask-status-info">

                </span>
            </div>
            <div class="board-task-assigned-contacts-and-prority">
                <div class="board-task-assigned-contacts" id="boardTaskAssignedContacts${taskClipboard.title}">
                </div>
                <img src="assets/img/priority${taskClipboard.priority.toLowerCase()}.svg" alt="">
            </div>
        </div>
    `;
}

function setCategoryColor() {
    let categoryColor;

    for (let i = 0; i < category.length; i++) {
        if (taskClipboard.category == category[i].categoryName) {
            categoryColor = category[i].categoryColor
        }
    }
    return categoryColor
}

/**
 * inserts the contacts to the task
 * 
 */
function insertAssignedContactsToTaskHTML() {
    let firstNameFirstLetter;
    let lastNameFirstLetter;
    let backgroundcolor;
    let contactContainer = document.getElementById('boardTaskAssignedContacts' + taskClipboard.title);

    for (let i = 0; i < taskClipboard.firstNames.length; i++) {
        firstNameFirstLetter = taskClipboard.firstNames[i].charAt(0);
        lastNameFirstLetter = taskClipboard.lastNames[i].charAt(0);

        for (let j = 0; j < userList.length; j++) {
            if (taskClipboard.firstNames[i] == userList[j]['firstName'] && taskClipboard.lastNames[i] == userList[j]['lastName']) {
                backgroundcolor = userList[j]['background-color'];
            }
        }

        contactContainer.innerHTML += `
        <div class="add-task-selected-contact" style="background-color:${backgroundcolor};">${firstNameFirstLetter}${lastNameFirstLetter}</div>
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
            <button class="add-task-slide-in-create-task-button" onclick="createTask()">Create Task<img class="add-task-slide-in-check-icon" src="assets/img/checkicon.svg" alt=""></button>
            </button>
            <img onclick="toggleAddTaskMenuOffScreen()" src="assets/img/x.svg" alt="">
        </div>
    `;
}

