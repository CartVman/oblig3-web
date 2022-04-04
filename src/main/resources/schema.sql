CREATE TABLE Bestilling
(
    id        INTEGER AUTO_INCREMENT NOT NULL,
    film      VARCHAR(30)  NOT NULL,
    antall    VARCHAR(200) NOT NULL,
    fornavn   VARCHAR(50),
    etternavn VARCHAR(50),
    telefonnr VARCHAR(30),
    epost     VARCHAR(50),
    PRIMARY KEY (id)
);
