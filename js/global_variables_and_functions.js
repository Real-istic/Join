/**
 * the main render window
 */
let contentDiv = document.getElementById('content');

/**
 * variable for the markActiveNavElement function
 * 
 */
let activeTab;

/**
 * marks the active tab in the nav-area
 * 
 * @param {*} navElement the executed tab
 */
function markActiveNavElement(activeTab) {
    let summaryNavElement = document.getElementById('summaryNavElement');
    summaryNavElement.classList.remove('nav-element-active')
    let boardNavElement = document.getElementById('boardNavElement');
    boardNavElement.classList.remove('nav-element-active')
    let addTaskNavElement = document.getElementById('addTaskNavElement');
    addTaskNavElement.classList.remove('nav-element-active')
    let contactsNavElement = document.getElementById('contactsNavElement');
    contactsNavElement.classList.remove('nav-element-active')
    let tab = document.getElementById(activeTab + 'NavElement')
    tab.classList.add('nav-element-active')
}

/* if adding changes are made in this Clipboard, these changes must be made in the add_task.js, too. (function clearTask) !! */
let taskClipboard = {
    'title': '',
    'firstNames': [],
    'lastNames': [],
    'dueDate': '',
    'category': '',
    'categoryColor': '',
    'priority': '',
    'description': '',
    'subtasks': [],
    'subtasksState': [],
    'taskStatus': ''
}

