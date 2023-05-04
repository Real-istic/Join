/**
 * backend URL
 * 
 */
setURL('https://gruppenarbeit-join-473.developerakademie.net/smallest_backend_ever')

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
 * 
 * removes all categorys form the backend.
 */
async function deleteCategory() {
    await backend.deleteItem('category');
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
 * deletes all tasks from the backend
 * 
 */
async function deleteTasksFromBackend() {
    await backend.deleteItem('tasks');
    await initBackend()
}

/**
 * restores test-data to the backend
 * 
 */
async function restoreBackend() {
    userList = [
        {
            "firstName": "Florian",
            "lastName": "Schmidt",
            "email": "florian.schmidt@example.com",
            "phoneNumber": "0123456799",
            "password": "trustno1",
            "backgroundColor": "#FF5733"
        },
        {
            "firstName": "Falk",
            "lastName": "Mahn",
            "email": "falk.mahn@example.com",
            "phoneNumber": "0123454799",
            "password": "trustno1",
            "backgroundColor": "#FFA723"
        },
        {
            "firstName": "Hannah",
            "lastName": "Wagner",
            "email": "hannah.wagner@exam.com",
            "phoneNumber": "0123456792",
            "password": "securepassword",
            "backgroundColor": "#FFC300"
        },
        {
            "firstName": "Julia",
            "lastName": "Schneider",
            "email": "julia.schneider@example.com",
            "phoneNumber": "0123456794",
            "password": "football23",
            "backgroundColor": "#C70039"
        },
        {
            "firstName": "Lena",
            "lastName": "Miller",
            "email": "lena.miller@example.com",
            "phoneNumber": "0123456790",
            "password": "qwerty",
            "backgroundColor": "#FF5733"
        },
        {
            "firstName": "Marcel",
            "lastName": "Schulz",
            "email": "marcel.schulz@example.com",
            "phoneNumber": "0123456797",
            "password": "monkey123",
            "backgroundColor": "#900C3F"
        },
        {
            "firstName": "Markus",
            "lastName": "Schmidt",
            "email": "markus.schmidt@malibu.com",
            "phoneNumber": "0123456791",
            "password": "password123",
            "backgroundColor": "#FFC300"
        },
        {
            "firstName": "Paula",
            "lastName": "Becker",
            "email": "paula.becker@example.com",
            "phoneNumber": "0123456793",
            "password": "p@ssw0rd",
            "backgroundColor": "#581845"
        },
        {
            "firstName": "Sabine",
            "lastName": "Meyer",
            "email": "sabine.meyer@example.com",
            "phoneNumber": "0123456796",
            "password": "letmein",
            "backgroundColor": "#FF5733"
        },
        {
            "firstName": "Sophie",
            "lastName": "Hart",
            "email": "sophie.hart@example.com",
            "phoneNumber": "0123456798",
            "password": "abcdefg",
            "backgroundColor": "#C70039"
        },
        {
            "firstName": "Tim",
            "lastName": "Fischer",
            "email": "tim.fischer@example.com",
            "phoneNumber": "0123456795",
            "password": "iloveyou",
            "backgroundColor": "#900C3F"
        }
    ]
    await backend.setItem('users', JSON.stringify(userList));

    categoryList = [{
        categoryName: 'Marketing',
        categoryColor: '#de493e'
    },
    {
        categoryName: 'Finance',
        categoryColor: '#259b24'
    },
    {
        categoryName: 'Production',
        categoryColor: '#1e88e5'
    },
    {
        categoryName: 'Sales',
        categoryColor: '#fbc02d'
    },
    {
        categoryName: 'Human Resources',
        categoryColor: '#9c27b0'
    },

    {
        categoryName: 'Customer Service',
        categoryColor: '#00897b'
    }]
    await backend.setItem('category', JSON.stringify(categoryList));

    taskList = [
        {
            "title": "Pitch for the Project",
            "firstNames": [
                "Florian",
                "Hannah",
                "Julia",
                "Lena"
            ],
            "lastNames": [
                "Schmidt",
                "Wagner",
                "Schneider",
                "Müller"
            ],
            "dueDate": "2023-03-08",
            "category": "Marketing",
            "categoryColor": "#de493e",
            "priority": "Urgent",
            "description": "Creating new Icons is a very important task for the project.",
            "subtasks": [
                "Subtask 1",
                "Create new icons"
            ],
            "subtasksState": [
                false,
                false
            ],
            "taskStatus": "toDo"
        },
        {
            "title": "Create the header",
            "firstNames": [
                "Julia",
                "Sabine",
                "Sophie",
                "Tim"
            ],
            "lastNames": [
                "Schneider",
                "Meyer",
                "Hartmann",
                "Fischer"
            ],
            "dueDate": "2023-03-31",
            "category": "Finance",
            "categoryColor": "#259b24",
            "priority": "Medium",
            "description": "Header creation was on of the first tasks we had to do.",
            "subtasks": [
                "Coding all day long"
            ],
            "subtasksState": [
                false
            ],
            "taskStatus": "inProgress"
        },
        {
            "title": "Do the Nav-Area",
            "firstNames": [
                "Hannah",
                "Florian"
            ],
            "lastNames": [
                "Wagner",
                "Schmidt"
            ],
            "dueDate": "2023-03-31",
            "category": "Sales",
            "categoryColor": "#fbc02d",
            "priority": "Low",
            "description": "Clear and stylish nav area seems to be the way",
            "subtasks": [
                "Coding all day long"
            ],
            "subtasksState": [
                false
            ],
            "taskStatus": "awaitFeedback"
        },
        {
            "title": "Contacts and stuff",
            "firstNames": [
                "Julia",
                "Tim",
                "Sophie",
                "Daniel"
            ],
            "lastNames": [
                "Schneider",
                "Fischer",
                "Hartmann",
                "Ewr54345"
            ],
            "dueDate": "2023-03-21",
            "category": "Human Resources",
            "categoryColor": "#9c27b0",
            "priority": "Low",
            "description": "Contacts have to be creatable and managaable",
            "subtasks": [],
            "subtasksState": [],
            "taskStatus": "done"
        }
    ]
    await backend.setItem('tasks', JSON.stringify(taskList));
    await initBackend();
}
