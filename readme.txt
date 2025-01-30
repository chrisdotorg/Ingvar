Dessiner des reseaux: 

Comment s'assurer que les ordinateurs reçoivent automatiquement les adresses IP du serveur ? Expliquez le processus.

on va mettre en place le serveur DHCP et configurer les ordinateurs pour qu'ils obtiennent les adresses IP automatiquement. Alors on met le serveur DHCP  sur un réseau qui communique avec nos ordinateurs, on spécifie la plage d'adresse IP dans laquelle le serveur DHCP doit servir les ordinateurs.
Le processus se deroule en 4 étapes: Lorsque l'ordinateur se connecte sur le reseau, il diffuse une requête DHCP Discover. (A la recherche d'un serveur DHCP). 
Le serveur DHCP sur le réseau répond avec une offre contenant une adresse IP, un masque de sous reseau, l'adresse ip du serveur dns et de la passerelle par défaut ainsi que la durée du bail (délai de validité de l'adresse ip)
L'ordinateur répond avec une requête DHCP pour accepter l'offre. Le serveur répondra avec un DHCP Acknowldge pour confirmer l'attribution de l'adresse IP. 


Comment s'assurer que chacun des ordinateurs communique avec les autres ordinateurs après avoir obtenu l'adresse IP ?

Vu qu'ils obtiendront l'adresse IP du serveur DHCP, on est rassuré qu'ils sont sur le même réseau. on fera des test ping pour voir s'ils communiquent. 

Comment s'assurer que l'application sera accessible en utilisant l'URL (service_entreprise.com) au lieu de l'adresse IP ?
on va configurer le serveur DNS sur le réseau. Ensuite on configure les ordinateurs du réseau pour utiliser ce serveur dns. Après cela, on configure web sur le serveur d'application pour que ce dernier soit en mesure de repondre aux requêtes http ou https faites via service_entreprise.com



/home/chris/Downloads/DevOps/Codes/Ingvar/bd.sql
Database: 
root
Rich.2000

mkdir api
cd api
sudo apt install -y npm
npm init -y
npm install express body-parser mysql cors

Alors nous avons crée le formulaire avec la page form.html, le css est la page form.css et le javascript pour les vérifications et l'envoie des données du formulaire sur le fichier form.js. 
pour gérer le backend, au lieu d'utiliser le php (la manière la plus simple) nous avons préféré n'utiliser que le JAvaScript. Ceci étant, nous nous sommes servis de Node et Express pour créer une API Rest. Ce dernier est chargé des communications entre le formulaire et la base de données. Dans le dossier api, il y a le fichier server.js contenant les parametres de connexion a la base de données ainsi que les credentials de l'user de la base de données. 