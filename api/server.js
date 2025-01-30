const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

// Créer une application Express
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configurer la connexion MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'rich', // 
    password: 'rich.2000', // 
    database: 'MinistereDB' // Nom de la base de données
});

// Connecter à la base de données
db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données:', err);
        return;
    }
    console.log('Connecté à la base de données MySQL avec success !!');
});

// Route POST pour ajouter un employé
app.post('/api/employes', (req, res) => {
    const { nom, prenom, email, dateEmbauche, departement } = req.body;

    if (!nom || !prenom || !email || !dateEmbauche || !departement) {
        return res.status(400).json({ message: 'Tous les champs sont obligatoires.' });
    }

    const sql = `INSERT INTO Employes (Nom, Prenom, Email, DateEmbauche, DepartementID) VALUES (?, ?, ?, ?, ?)`;
    db.query(sql, [nom, prenom, email, dateEmbauche, departement], (err, result) => {
        if (err) {
            console.error('Erreur lors de l’insertion des données:', err);
            return res.status(500).json({ message: 'Erreur lors de l’insertion des données.' });
        }
        res.status(201).json({ message: 'Employé ajouté avec succès !', employeID: result.insertId });
    });
});

// Démarrer le serveur
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
