
//let contactListExpanded = false;

function Task() {
    contentDiv.innerHTML = insertTask();
    document.getElementById("help").classList.remove("help-none");
}


function insertTask() {
    return /*html*/ `
    <div class="task-main">
        <form class="task-left">
            ${insertTaskTitleHTML()}
            ${insertTaskContactlistHTML()}
            <!--more to do -->
        </form>
        <div class="task-right">
            <button class="btn-clear" onclick="clear()">Clear
                <svg width="14" height="13" viewBox="0 0 14 13" fill="blue" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.00106 6.50008L12.2441 11.7431M1.75806 11.7431L7.00106 6.50008L1.75806 11.7431ZM12.2441 1.25708L7.00006 6.50008L12.2441 1.25708ZM7.00006 6.50008L1.75806 1.25708L7.00006 6.50008Z" stroke="#647188" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <button class="btn-addTask" onclick="addTask()">Create Task</button>
        </div>
    </div>
    `;

}

function insertTaskTitleHTML(){
    return /*html*/ `
        <input class="add-task-input-title" placeholder="Enter a title" required type="text" name="" id="taskTitle">
    `;
}

function insertTaskContactlistHTML(){
    return /*html*/ `
        <div class="add-task-contacts-assign" id="taskContacts">
                <input required class="add-task-select-contacts" placeholder="Select Contacts to assign" onkeyup="searchContacts()" id="addContactToTaskInput">
                <img src="assets/img/dropdownicon.svg" onclick="expandContactList()">
            </div>
            <div id="addTaskContactList" class="add-task-contact-list">
                <li class="add-task-contact-container">
                    <input class="add-task-contact-checkbox" type="checkbox">
                    <label for="confirm" class="add-task-checkbox-container">${userList[0].name}</label>
                </li>
                <li class="add-task-contact-container">
                    <input class="add-task-contact-checkbox" type="checkbox">
                    <label for="confirm" class="add-task-checkbox-container">${userList[0].name}</label>
                </li>
                <li class="add-task-contact-container">
                    <input class="add-task-contact-checkbox" type="checkbox">
                    <label for="confirm" class="add-task-checkbox-container">${userList[0].name}</label>
                </li>
            </div>
    `;
}



//function searchContacts(){
//  checkForExpandedContactList();
//
//  let input = document.getElementById('addContactToTaskInput');
//  let filter = input.ariaValueMax.toLowerCase();
//
//  let contacts = document.getElementsByClassName('contact');
//
//  for (let i = 0; i < contacts.length; i++) {
//    if (contacts[i].innerText.toLowerCase().includes(filter)){
//      contacts[i].style.display = 'flex';        
//    } else{
//      contacts[i].style.display = 'none';
//    }        
//  }
//}
//
//function checkForExpandedContactList(){
//  if(contactListExpanded == false){
//      expandContactList();
//      contactListExpanded = true;      
//  }
// 
//
//function expandContactList(){
//  contactListExpanded = true;    
//  loadContactList();  
//  document.getElementById('addTaskContactList').classList.add = 'expand-contact-list';
//}
//
//
//function loadContactList(){
//  for (i = 0; i < userList.length; i++){
//      document.getElementById('addTaskContactList').innerHTML += createContactAddTaskHTML(i);
//  }
//}
//
//function createContaktAddTaskHTML(i){
//  return `
//  <label class="add-task-contact-container" id="contact${i}" onclick="addContactToTask(i)">
//      ${userList[${i}].name}
//      <div class="add-task-checkbox-container">
//          <input class="add-task-contact-checkbox" type="checkbox">
//      </div>
//  </label>
//  `    
//}
//
//function addContactToTask(i){
//  hideContactList();    
//}
//
//function hideContactList(){
//  document.getElementById('addTaskContactList').classList.remove = 'expand-contact-list';
//}
//
// ----- ACHTUNG CSS -------
//.expand-contact-list{
//  height: 400px;
//  overflow-y: scroll;
//  transition: 120ms ease-in-out;
//}
//--------------------------