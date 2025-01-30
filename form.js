    // Fonction de validation
    document.getElementById('employeeForm').addEventListener('submit', function (e) {
        let isValid = true;

        // Récupérer les champs
        const nom = document.getElementById('nom');
        const prenom = document.getElementById('prenom');
        const email = document.getElementById('email');
        const dateEmbauche = document.getElementById('dateEmbauche');
        const departement = document.getElementById('departement');

        // Réinitialiser les messages d'erreur
        document.getElementById('nomError').textContent = '';
        document.getElementById('prenomError').textContent = '';
        document.getElementById('emailError').textContent = '';
        document.getElementById('dateEmbaucheError').textContent = '';
        document.getElementById('departementError').textContent = '';

        // Validation des champs
        if (nom.value.trim() === '') {
            document.getElementById('nomError').textContent = 'Le champ Nom est obligatoire.';
            isValid = false;
        }
        if (prenom.value.trim() === '') {
            document.getElementById('prenomError').textContent = 'Le champ Prénom est obligatoire.';
            isValid = false;
        }
        if (email.value.trim() === '') {
            document.getElementById('emailError').textContent = 'Le champ Email est obligatoire.';
            isValid = false;
        }
        if (dateEmbauche.value.trim() === '') {
            document.getElementById('dateEmbaucheError').textContent = "La date d'embauche est obligatoire.";
            isValid = false;
        }
        if (departement.value === '') {
            document.getElementById('departementError').textContent = 'Veuillez sélectionner un département.';
            isValid = false;
        }

        // Empêcher la soumission si des champs sont vides
        if (!isValid) {
            e.preventDefault();
        }
    });


    


    /*   actions après avoir soumis le formulaire  */

    document.getElementById('employeeForm').addEventListener('submit', function (e) {
        e.preventDefault(); // Empêche la soumission traditionnelle
    
        // Récupérer les valeurs des champs
        const nom = document.getElementById('nom').value.trim();
        const prenom = document.getElementById('prenom').value.trim();
        const email = document.getElementById('email').value.trim();
        const dateEmbauche = document.getElementById('dateEmbauche').value.trim();
        const departement = document.getElementById('departement').value;
    
        // Validation côté client
        if (!nom || !prenom || !email || !dateEmbauche || !departement) {
            alert('Veuillez remplir tous les champs obligatoires.');
            return;
        }
    
        // Créer un objet pour les données
        const employeData = {
            nom,
            prenom,
            email,
            dateEmbauche,
            departement
        };
    
        // Envoyer les données à l'API via fetch
        fetch('http://localhost:3000/api/employes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(employeData)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Erreur lors de l’envoi des données.');
                }
            })
            .then(data => {
                alert(data.message);
                document.getElementById('employeeForm').reset(); // Réinitialiser le formulaire
            })
            .catch(error => {
                console.error(error);
                alert('Une erreur s’est produite. Veuillez réessayer.');
            });
    });
    