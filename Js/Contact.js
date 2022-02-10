
function emailClientoeffnen() {
    var betreff = document.querySelector("#Betreff").value;
    var message = document.querySelector("#text").value;
    if (betreff.length == 0) {
        alert("Betreff darf nicht leer sein");
        return;
    }
    if (message.length == 0) {
        alert("Nachricht darf nicht leer sein");
        return;
    }
    document.location.href = "mailto:FIS20255@spengergasse.at?subject="+betreff+"&body="+message;
}
