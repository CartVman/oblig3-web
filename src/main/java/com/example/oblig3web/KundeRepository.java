package com.example.oblig3web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.security.SecureRandom;
import java.util.List;

@Repository
public class KundeRepository {

    @Autowired
    private JdbcTemplate db;

    public void lagreKunde(Bestilling kunde) {
        String sql = "INSERT INTO Bestilling (film, antall, fornavn, etternavn, telefonnr, epost) VALUES(?,?,?,?,?,?)";
        db.update(sql, kunde.getFilm(), kunde.getAntall(), kunde.getFornavn(), kunde.getEtternavn(), kunde.getTelefonnr(), kunde.getEpost());
    }

    public List<Bestilling> hentAlleKunder() {
        String sql = "SELECT * FROM Bestilling";
        List <Bestilling> alleKunder = db.query(sql, new BeanPropertyRowMapper(Bestilling.class));
        return alleKunder;
    }

    public void slettAlleKunder() {
        String sql= "DELETE FROM Bestilling";
        db.update(sql);
    }
}
