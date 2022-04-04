package com.example.oblig3web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BestillingController {
    @Autowired
    KundeRepository rep;


    @PostMapping("/lagre")
    public void lagre(Bestilling billett) {
        if (billett.getAntall() > 0 && billett.getFornavn().length() > 0 && billett.getEtternavn().length() > 0
                && billett.getTelefonnr().length() > 0 && billett.getEpost().length() > 0) {
            if (billett.getFilm().equals("Spiderman") || billett.getFilm().equals("Superman") || billett.getFilm().equals("Batman")) {
                rep.lagreKunde(billett);
            }
        }
    }

    @GetMapping("/hentAlle")
    public List<Bestilling> hentAlle() {
        return rep.hentAlleKunder();
    }

    @GetMapping("/slettAlle")
    public void slettAlle() {
        rep.slettAlleKunder();
    }
}

