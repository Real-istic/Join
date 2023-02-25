
let taskClipboard = [
    {
        'title' : 0,
        'contacts': [],
        'date':0,
        'categories':[],
        'prioritie':0,
        'description':0,
        'subtasks':[],
    }
]

let contactListExpanded = false;

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
                <img src="assets/img/dropdownicon.svg" onclick="openAndCloseContactList()">
            </div>
            <div id="addTaskContactList" class="add-task-contact-list">
            </div>
    `;
}

//ADD CONTACT TO TASK

function searchContacts(){
 checkForExpandedContactList();

 let input = document.getElementById('addContactToTaskInput');
 let filter = input.ariaValueMax.toLowerCase();

 let contacts = document.getElementsByClassName('contact');

 for (let i = 0; i < contacts.length; i++) {
   if (contacts[i].innerText.toLowerCase().includes(filter)){
     contacts[i].style.display = 'flex';        
   } else{
     contacts[i].style.display = 'none';
   }        
 }
}

function checkForExpandedContactList(){
 if(contactListExpanded == false){
     expandContactList();    
 }
}

function openAndCloseContactList(){
    if(contactListExpanded == false){
        expandContactList();
    }else{
        hideContactList();
    }
}

function expandContactList(){
 contactListExpanded = true;    
 loadContactList();  
 document.getElementById('addTaskContactList').classList.add('expand-contact-list');
}


function loadContactList(){
 for (i = 0; i < userList.length; i++){
     document.getElementById('addTaskContactList').innerHTML += createContactAddTaskHTML(i);
 }
}

function hideContactList(){
    contactListExpanded = false
    document.getElementById('addTaskContactList').classList.remove('expand-contact-list');
    document.getElementById('addTaskContactList').innerHTML = ``;
}

function createContactAddTaskHTML(i){
 return `
    <li class="add-task-contact-container" onclick="toggleContactTask(${i})">
        <input class="add-task-contact-checkbox" type="checkbox">
        <label for="confirm" class="add-task-checkbox-container">${userList[i].name}</label>
    </li>
 `    
}

function toggleContactTask(i){
 let nameStillInTask = checkForContactInClipboard(i);

 if(nameStillInTask == true){
     removeContactFromTask(i);  
 }else{
     addContactToTask(i);  
 }
}

function checkForContactInClipboard(i){
 let nameStillInTask = false;
    for(k = 0; k < taskClipboard[0].contacts.length; k++){
        if(userList[i].name == taskClipboard[0].contacts[k]){
            nameStillInTask = true;
        }
    }  
 return nameStillInTask;    
}

function removeContactFromTask(i){
 for(j = 0; j < taskClipboard[0].contacts.length; j++){
     if(taskClipboard[0].contacts[j] == userList[i].name){
         taskClipboard[0].contacts.splice(j,1);        
     }
       
 }  
}

function addContactToTask(i){
    let newContactForTask = userList[i].name;
    taskClipboard[0].contacts.push(newContactForTask);   
    }

// function addContactToTask(i){
// let newContactForTask;   
//     for(j = 0; j < userList.length; j++){
//         if (j == i){
//             newContactForTask = userList[i].name;
//         }  
//     }     
// taskClipborad[0].contacts.push(newContactForTask);   
// }

//
// ----- ACHTUNG CSS -------
//.expand-contact-list{
//  height: 400px;
//  overflow-y: scroll;
//  transition: 120ms ease-in-out;
//}
//--------------------------