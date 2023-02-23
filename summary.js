function insertSummary() {
    contentDiv.innerHTML = summaryHTML();
}

function summaryHTML() {
    return /*html*/ `
    <div class="summary-div">
        <div class="summary-top">
            ${summaryTopHTML()}
        </div>
        <div class="summary-bottom">
            ${summaryBottomHTML()}
        </div>
    </div>
    `
}

function summaryTopHTML(){
    if (userList[0].name) {
        return /*html*/ `Good morning,` + `<span>${userList[0].name}</span>`;
    } else {
        return /*html*/ `Good morning,` + `<span>Guest</span>`;
    }
}

function summaryBottomHTML(){
    return /*html*/ `
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    `
}