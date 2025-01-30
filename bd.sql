/* Creation de la base de données et sa selection */

CREATE DATABASE MinistereDB;
USE MinistereDB;

/*  Creation des tables 
On a choisi ici de creer 4 tables: Departements, Employes, Projets et Affectations
 */

CREATE TABLE Departements (
    DepartementID INT AUTO_INCREMENT PRIMARY KEY,
    Nom VARCHAR(100) NOT NULL,
    Localisation VARCHAR(100)
);

CREATE TABLE Employes (
    EmployeID INT AUTO_INCREMENT PRIMARY KEY,
    Nom VARCHAR(100) NOT NULL,
    Prenom VARCHAR(100),
    Email VARCHAR(100) UNIQUE NOT NULL,
    DateEmbauche DATE NOT NULL,
    DepartementID INT,
    FOREIGN KEY (DepartementID) REFERENCES Departements(DepartementID)
    ON DELETE SET NULL
    ON UPDATE CASCADE
);


CREATE TABLE Projets (
    ProjetID INT AUTO_INCREMENT PRIMARY KEY,
    NomProjet VARCHAR(100) NOT NULL,
    DateDebut DATE,
    DateFin DATE,
    Budget DECIMAL(10, 2),
    DepartementID INT,
    FOREIGN KEY (DepartementID) REFERENCES Departements(DepartementID)
    ON DELETE SET NULL
    ON UPDATE CASCADE
);


CREATE TABLE Affectations (
    AffectationID INT AUTO_INCREMENT PRIMARY KEY,
    EmployeID INT,
    ProjetID INT,
    DateAffectation DATE NOT NULL,
    Role VARCHAR(50),
    FOREIGN KEY (EmployeID) REFERENCES Employes(EmployeID)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    FOREIGN KEY (ProjetID) REFERENCES Projets(ProjetID)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);


/*Insertion des données dans les tables 

Ajout de quelques départements dans la base de données

*/

INSERT INTO Departements (Nom, Localisation)
VALUES ('Ressources Humaines', 'Lome'),
       ('Informatique', 'Lome'),
       ('Finance', 'Lome');

/* Ajout de quelques employés dans la base de données  */

INSERT INTO Employes (Nom, Prenom, Email, DateEmbauche, DepartementID)
VALUES ('LANNISTER', 'Tyrion', 'tyrion.lannister@gouv.tg', '2020-03-15', 1),
       ('TARGARYEN', 'Daemon', 'daemon.targaryen@gouv.tg', '2019-06-01', 2),
       ('SNOW', 'Jon', 'jon.snow@gouv.tg', '2021-09-10', 3);



/* Ajout de quelques projets */

INSERT INTO Projets (NomProjet, DateDebut, DateFin, Budget, DepartementID)
VALUES ('Projet Optimus', '2023-01-01', '2023-12-31', 100000.00, 2),
       ('Optimisation Financière', '2022-05-01', '2023-04-30', 75000.00, 3);


/*  Affectation de certains employés à des projets  */

INSERT INTO Affectations (EmployeID, ProjetID, DateAffectation, Role)
VALUES (1, 1, '2023-01-15', 'Manager'),
       (2, 1, '2023-01-20', 'Développeur'),
       (3, 2, '2022-05-10', 'Analyste');


/*  Lecture des données dans la base de données  */

SELECT * FROM Departements; /*  on lit toutes les données de la table Departements */

/* On liste tous les Employés et leur départements  */

SELECT e.EmployeID, e.Nom, e.Prenom, d.Nom AS Departement
FROM Employes e
LEFT JOIN Departements d ON e.DepartementID = d.DepartementID;

/* On veut voir les projets et les départements auxquels ils sont associés  */
SELECT p.ProjetID, p.NomProjet, p.DateDebut, p.DateFin, p.Budget, d.Nom AS Departement
FROM Projets p
LEFT JOIN Departements d ON p.DepartementID = d.DepartementID;

/* On veut lister les affectations avec les noms des employés et des projets */
SELECT a.AffectationID, e.Nom AS Employe, p.NomProjet, a.DateAffectation, a.Role
FROM Affectations a
JOIN Employes e ON a.EmployeID = e.EmployeID
JOIN Projets p ON a.ProjetID = p.ProjetID;
