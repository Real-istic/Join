
//let contactListExpanded = false;

function Task() {
    contentDiv.innerHTML = insertTask();
    document.getElementById("help").classList.remove("help-none");
}


function insertTask() {
    return /*html*/ `
    <div class="task-main">
        <form class="task-left">
            <input class="add-task-input-title" placeholder="Enter a title" required type="text" name="" id="taskTitle">
            <div class="add-task-contacts-assign" id="taskContacts">
                <input required class="add-task-select-contacts" onkeyup="searchContacts()" id="addContactToTaskInput">
                <img src="assets/img/dropdownicon.svg" onclick="expandContactList()">
            </div>
            <div id="addTaskContactList" class="add-task-contact-list">
                <label class="add-task-contact-container">
                    ${userList[0].name}
                    <div class="add-task-checkbox-container">
                        <input class="add-task-contact-checkbox" type="checkbox">
                    </div>
                </label>
                <label class="add-task-contact-container">
                    ${userList[0].name}
                    <div class="add-task-checkbox-container">
                        <input class="add-task-contact-checkbox" type="checkbox">
                    </div>
                </label>
                <label class="add-task-contact-container">
                    ${userList[0].name}
                    <div class="add-task-checkbox-container">
                        <input class="add-task-contact-checkbox" type="checkbox">
                    </div>
                </label>
            </div>
            
        </form>
        <div class="task-right">
        <button class="btn-clear" onclick="clear()">Clear<img class="btn-x" src="assets/img/x.svg" alt=""></button>
        <button class="btn-addTask" onclick="addTask()">Create Task<img class="btn-ok" src="assets/img/ok.svg" alt=""></button>
        </div>
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