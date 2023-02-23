function insertLegalNotice(){
    contentDiv.innerHTML = legalNoticeHTML();
}

function legalNoticeHTML(){
    return /*html*/`
    <div>
        <h1 style="margin-top: 0;">Legal Notice</h1>

        <h2>Angaben gemäß § 5 TMG</h2>
        <p>Max Mustermann<br>
            Max Mustermann Str. 8<br>
            12345 Musterstadt</p>

        <h2>Kontakt</h2>
        <p>Telefon: +49 (0) 100 24608892<br>
            E-Mail: max.mustermann11@gmail.com</p>
    </div>
    `
}