
/**
 * 
 * call the summary content
 */
function insertSummary() {
    contentDiv.innerHTML = summaryHTML();
    document.getElementById("help").classList.remove("help-none");
}

/**
 * renders the summary content
 * 
 * @returns the html part
 */
function summaryHTML() {
    return /*html*/ `
    <div class="summary-div">
        <div class="summary-top">
            ${summaryTopHTML()}
        </div>
        <div class="summary-bottom">
            ${summaryBottomHTML()}
        </div>
    </div>
    `
}

/**
 * renders the top part of the summary page
 * 
 * @returns the html part
 */
function summaryTopHTML() {
    if (userList[0].firstName) {
        return /*html*/ `Good morning,` + `<div><span>${userList[0].firstName}</span></div>`;
    } else {
        return /*html*/ `Good morning,` + `<span>Guest</span>`;
    }
}

/**
 * renders the bottom part of the summary page
 * 
 * @returns the html part
 */
function summaryBottomHTML() {
    return /*html*/ `
    <div class="task-box-deadline">
        <div class="task-box-deadline-left">
            <div class="task-picture-and-count">
                <img src="assets/img/tasksurgent.svg" alt="">
                <span class="task-number" style="color:white;">1</span>
            </div>
            <span>
                Tasks Urgent
            </span>
        </div>
        <div class="date-and-upcoming-deadline">
            <div>
                <span style="font-size:33px; font-weight:700;">October 16, 2022</span> 
            </div>
            <div>
                <span>Upcoming Deadline</span> 
            </div>
        </div>
    </div>
    <div class="task-box-to-do" id="taskBoxToDo">
        <div class="task-picture-and-count">
            <img src="assets/img/taskstodo.svg" alt="">
            <span class="task-number" >5</span>
        </div>
        <span>
            Tasks To-do
        </span>
    </div>
    <div class="task-box" id="taskBoxTaskInBoard">
        <div class="task-picture-and-count">
            <img src="assets/img/tasksinboard.svg" alt="">
            <span class="task-number">${taskList.length}</span>
        </div>
        <span>
            Tasks in <br> Board
        </span>
    </div>
    <div class="task-box" id="taskBoxTaskInProgress">
        <div class="task-picture-and-count">
            <img src="assets/img/tasksinprogress.svg" alt="">
            <span class="task-number">100</span>
        </div>
        <span>
            Tasks in Progress
        </span>
    </div>
    <div class="task-box" id="TaskBoxAwaitingFeedback">
        <div class="task-picture-and-count">
            <img src="assets/img/tasksawaitingfeedback.svg" alt="">
            <span class="task-number">2</span>
        </div>
        <span>
            Awaiting Feedback
        </span>
    </div>
    <div class="task-box" id="TaskBoxTaskDone">
        <div class="task-picture-and-count">
            <img src="assets/img/tasksdone.svg" alt="">
            <span class="task-number">9</span>
        </div>
        <span>
            Tasks <br> Done
        </span>
    </div>
    `
}