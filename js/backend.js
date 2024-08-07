/**
 * backend URL
 * 
 */
setURL('https://patriziomarzullo.de/join/smallest_backend_ever')

/**
 * userList = list of our contacts/users
 * categorylist = list of our choosable task-categories
 * taskList = list of all saved tasks
 */
let userList = [];
let categoryList = [];
let taskList = [];

/**
 * syncronize data from the backend to the user and category.
 * 
 */
async function initBackend() {
    await downloadFromServer();
    userList = JSON.parse(backend.getItem('users')) || [];
    categoryList = JSON.parse(backend.getItem('category')) || [];
    taskList = JSON.parse(backend.getItem('tasks')) || [];
}

/**
 * Adds a user to the userList. Push to the backend.
 * 
 * @param {} user the user object
 */
async function addUser(user) {
    userList.push(user);
    await backend.setItem('users', JSON.stringify(userList));
    await initBackend();
}

/**
 * 
 * Save the editContact content
 */
async function saveEditContact() {
    // userList im Backend speichern
    await backend.setItem('users', JSON.stringify(userList));
    await initBackend();
}

/**
 * 
 * removes all users form the backend.
 */
async function deleteUser() {
    await backend.deleteItem('users');
    await initBackend();
}

/**
 * Adds a category to the categoryList. Push to the backend.
 * 
 * @param {} category the category object
 */
async function addCategory(category) {
    categoryList.push(category);
    await backend.setItem('category', JSON.stringify(categoryList));
    await initBackend();
}

/**
 * pushes the taskClipboard to the backend
 * 
 */
async function pushTaskToBackend() {
    taskList.push(taskClipboard);
    await backend.setItem('tasks', JSON.stringify(taskList));
    await initBackend()
}

/**
 * deletes the specific Task and updates the backend data
 * 
 * @param {*} taskTitle the title of the task that should be deleted
 */
async function deleteTask(taskTitle) {
    let taskIndex = taskList.findIndex(task => task.title === taskTitle);

    if (taskIndex !== -1) {
        taskList.splice(taskIndex, 1);
        await backend.setItem('tasks', JSON.stringify(taskList));
        await initBackend();
    } else {
        console.log("TestTask nicht gefunden");
    }
}