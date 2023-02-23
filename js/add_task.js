function Task(){
    contentDiv.innerHTML = insertTask();
}

function insertTask(){
    return /*html*/ `
        <form class="task-left">
            <input required type="text" name="" id="taskTitle">
            <select name="" id="taskContacts">
                <option value="">${userList[0].name}</option>
                <option value="">placeholder1</option>
                <option value="">placeholder2</option>
            </select>
        </form>
        <div class="task-right">
            <button onclick="clear()"></button>
            <button onclick="addTask()"></button>
        </div>
    `;
}