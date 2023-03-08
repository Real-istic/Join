function insertLegalNotice(){
    contentDiv.innerHTML = legalNoticeHTML();
    document.getElementById("help").classList.remove("help-none");
}

function legalNoticeHTML(){
    return /*html*/`
    <div>
        <h1 style="margin-top: 0;">Legal Notice</h1>
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>Daniel Bergmann</p>
        <h2>Kontakt</h2>
        <p>Telefon: +49 151 546 940 58</p>
        </div>
    `
}