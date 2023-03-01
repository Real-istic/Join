
/**
 * inserts board content
 * 
 */
function insertBoard() {
    contentDiv.innerHTML = insertBoardHTML();
    document.getElementById("help").classList.remove("help-none");
}

function insertBoardHTML(){
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
function insertTodoTasksHTML(){
    return/*html*/ `
    
        <div class="to-do-tasks" id="toDoTasks">
            <div class="to-do-header">
                <span>To do</span>
                <img src="assets/img/plus button.svg" alt="">
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
function insertInProgressTasksHTML(){
    return /*html*/ `
        <div class="in-progress-tasks" id="inProgressTasks">
            <div class="in-progress-header">
                <span>In progress</span>
                <img src="assets/img/plus button.svg" alt="">
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
function insertAwaitFeedbackTasksHTML(){
    return /* html */ `
        <div class="await-feedback-tasks" id="awaitFeedbackTasks">
            <div class="await-feedback-header">
                <span>Await feedback</span>
                <img src="assets/img/plus button.svg" alt="">
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
function insertDoneTasksHTML(){
    return /*html*/ `
        <div class="done-tasks" id="doneTasks">
            <div class="done-header">
                <span>Done</span>
                <img src="assets/img/plus button.svg" alt="">
            </div>
            <!-- tasks here -->
        </div>
    `;
}

function addTaskOfScreenMenu(){
    addTaskSlideInMenu()
    addTaskGetMenuOffScreen()
}

function addTaskSlideInMenu() {
    return /*html*/ `
        <div class="add-task-slide-in-menu transform-x-off-screen scrollbar1" id="addTaskSlideInMenu">
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
        </div>
    `;
}

function insertTaskSlideInHeader() {
    return /*html*/ `
        <div class="add-task-slide-in-header">
            <button class="btn-addTask" onclick="createTask()">Create Task</button>
            <button class="btn-clear" onclick="clearTask()">Clear
                <svg width="14" height="13" viewBox="0 0 14 13" fill="blue" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.00106 6.50008L12.2441 11.7431M1.75806 11.7431L7.00106 6.50008L1.75806 11.7431ZM12.2441 1.25708L7.00006 6.50008L12.2441 1.25708ZM7.00006 6.50008L1.75806 1.25708L7.00006 6.50008Z" stroke="#647188" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    `;
}

function addTaskGetMenuOffScreen() {
    let slideInMenu = document.getElementById('addTaskSlideInMenu');

    slideInMenu.classList.remove('transform-x-off-screen');
}