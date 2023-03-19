/**
 * initial function (onPageLoad)
 * 
 */
function init(){
    initBackend();
    //Abfrage, welche Seite geladen werden soll (wenn ? und @ in der URL stehen...)(und die email existiert)
    loadRegistrationPage();
}

function initChangePassword(){
    initBackend();
    loadChangePasswordPage();
}

