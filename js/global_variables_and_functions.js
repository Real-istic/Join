/**
 * the main render container
 */
let contentDiv;

/**
 * the current user
 */
let currentUser;

/**
 * marks the active tab in the nav-area
 * 
 * @param {*} activeTab the active tab
 */
function markActiveNavElement(activeTab) {
    let summaryNavElement = document.getElementById('summaryNavElement');
    summaryNavElement.classList.remove('nav-element-active');
    let boardNavElement = document.getElementById('boardNavElement');
    boardNavElement.classList.remove('nav-element-active');
    let addTaskNavElement = document.getElementById('addTaskNavElement');
    addTaskNavElement.classList.remove('nav-element-active');
    let contactsNavElement = document.getElementById('contactsNavElement');
    contactsNavElement.classList.remove('nav-element-active');
    let legalNoticeNavElement = document.getElementById('legalNoticeNavElement');
    legalNoticeNavElement.classList.remove('nav-element-active');
    let privacyNavElement = document.getElementById('privacyNavElement');
    privacyNavElement.classList.remove('nav-element-active');

    let tab = document.getElementById(activeTab + 'NavElement');
    tab.classList.add('nav-element-active');
}

/* if changes are made in this object, these changes must be made in the add_task.js, too. (function clearTask) !! */
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
