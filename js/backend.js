setURL('http://gruppenarbeit-join-473.developerakademie.net/smallest_backend_ever')
let userList = [];

/**
 * syncronize data from the backend to the user.
 * 
 */
async function initBackend() {
    await downloadFromServer();
    userList = JSON.parse(backend.getItem('users')) || [];
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