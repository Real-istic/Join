
/**
 * insert board content
 * 
 */
function insertBoard() {
    contentDiv.innerHTML = insertBoardHeaderHTML();
    contentDiv.innerHTML += insertBoardTasks();
}

function insertBoardHeaderHTML() {
    return /*html*/ `
            <div class="board-header">
            <form class="task-form" action="" onsubmit="searchTask()">
                <input class="search-task-input-field" type="text" placeholder="Find Task" required>
                <img src="assets/img/barrier.svg" alt="">
                <img src="assets/img/searchglass.svg" alt="">
            </form>
            <button class="add-task-button" onclick="addTask()">Add task <img src="assets/img/plus.svg" alt=""></button>
        </div>`;
}

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