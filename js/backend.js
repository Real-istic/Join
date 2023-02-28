setURL('https://gruppenarbeit-join-473.developerakademie.net/smallest_backend_ever')
let userList = [];
let categoryList = [];

/**
 * syncronize data from the backend to the user and category.
 * 
 */
async function initBackend() {
    await downloadFromServer();
    userList = JSON.parse(backend.getItem('users')) || [];
    category = JSON.parse(backend.getItem('category')) || [];
}

/**
 * Adds a user to the userList. Push to the backend.
 * 
 * @param {} user the user object
 */
async function addUser(user) {
    userList.push(user);
    await backend.setItem('users', JSON.stringify(userList));
    initBackend();
}

/**
 * 
 * removes all users form the backend.
 */
async function deleteUser() {
    await backend.deleteItem('users');
    initBackend();
}

/**
 * Adds a category to the categoryList. Push to the backend.
 * 
 * @param {} category the category object
 */
async function addCategory(category) {
    categoryList.push(category);
    await backend.setItem('category', JSON.stringify(categoryList));
    initBackend();
}

/**
 * 
 * removes all categorys form the backend.
 */
async function deleteCategory() {
    await backend.deleteItem('category');
    initBackend();
}
