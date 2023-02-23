setURL('http://gruppenarbeit-join-473.developerakademie.net/smallest_backend_ever')
let userList = [];

async function initBackend() {
    await downloadFromServer();
    userList = JSON.parse(backend.getItem('users')) || [];
}

async function addUser(user) {
    userList.push(user);
    await backend.setItem('users', JSON.stringify(userList));
    initBackend();
}

async function deleteUser() {
    await backend.deleteItem('users');
    initBackend();
}