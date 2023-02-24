function Task(){
    contentDiv.innerHTML = insertTask();
}

function insertTask(){
    return /*html*/ `
    <div class="task-main">
    
        <form class="task-left">
            <input required type="text" name="" id="taskTitle">
            <select name="" id="taskContacts">
                <option value="">${userList}</option>
                <option value="">placeholder1</option>
                <option value="">placeholder2</option>
            </select>
        </form>
        <div class="task-right">
            <button class="btn-clear" onclick="clear()">Create</button>
            <button class="btn-addTask" onclick="addTask()">Create Task</button>
        </div>
    </div>
    `;
}