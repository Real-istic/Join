setURL('http://gruppenarbeit-join-473.developerakademie.net/smallest_backend_ever')
let users = [];

async function initBackend() {
    await downloadFromServer();
    users = JSON.parse(backend.getItem('users')) || [];
}