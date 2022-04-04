function kjopBillett() {

    const filmS = $("#film").val()
    const antallS = $("#antall").val();
    const fornavnS = $("#fornavn").val();
    const etternavnS = $("#etternavn").val();
    const telefonnrS = $("#telefonnr").val();
    const epostS = $("#epost").val();

    const bestilling = {
        film: filmS,
        antall: antallS,
        fornavn: fornavnS,
        etternavn: etternavnS,
        telefonnr: telefonnrS,
        epost: epostS
    }

    let condition = true;

    let film = Number(bestilling.film);
    const tall = Number(antallS);

    if (film === 0) {
        $("#film-warning").html("Må velge en film");
        condition = false;
    } else {
        $("#film-warning").html("");
    }
    if (tall <= 0 || isNaN(tall) || antallS.length === 0) {
        $("#antall-warning").html("Må skrive noe inn i antall");
        condition = false;
    } else {
        $("#antall-warning").html("");
    }
    if (fornavnS.length === 0) {
        $("#fornavn-warning").html("Må skrive inn fornavn");
        condition = false;
    } else {
        $("#fornavn-warning").html("");
    }
    if (etternavnS.length === 0) {
        $("#etternavn-warning").html("Må skrive inn etternavn");
        condition = false;
    } else {
        $("#etternavn-warning").html("");
    }
    if (telefonnrS.length === 0) {
        $("#telefonnr-warning").html("Må skrive inn telefonnr");
        condition = false;
    } else {
        $("#telefonnr-warning").html("");
    }
    if (epostS.length === 0 ) {
        $("#epost-warning").html("Må skrive inn epost");
        condition = false;
    } else {
        $("#epost-warning").html("");
    }

    $.post("/lagre", bestilling, function() {
        if (condition) {
            hentAlle();

            $("input").val("");
            $("select").val(0);
        }
    });
}

function hentAlle() {
    $.get("/hentAlle", function(biler) {
        formaterData(biler);
    });
}

function formaterData(kinoBillett) {
    let ut = "<table class='table table-striped'><tr><th>Film</th><th>Antall</th><th>Fornavn</th>" +
        "<th>Etternavn</th><th>Telefonnr</th><th>Epost</th></tr>";

    for(const billett of kinoBillett){
        ut +="<tr><td>" + billett.film + "</td><td>" + billett.antall + "</td>" +
            "<td>" + billett.fornavn + "</td><td>" + billett.etternavn + "</td>" +
            "<td>" + billett.telefonnr + "</td><td>" + billett.epost + "</td></tr>";
    }

    ut += "</table>";
    $("#kundene").html(ut);
}

function slettKundene() {
    $.get("/slettAlle", function() {
        hentAlle();
    });
}