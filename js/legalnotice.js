function insertLegalNotice(){
    contentDiv.innerHTML = legalNoticeHTML();
    document.getElementById("help").classList.remove("help-none");
}

function legalNoticeHTML(){
    return /*html*/`
    <div>
        <h1 style="margin-top: 0;">Legal Notice</h1>

        <h2>Angaben gemäß § 5 TMG</h2>
        <p>Daniel Bergmann<br>
            Blümnerstraße 22<br>
            04229 Leipzig</p>

        <h2>Kontakt</h2>
        <p>Telefon: 0151 54694058<br>
            E-Mail: dhetzer3@gmail.com</p>
    </div>
    `
}