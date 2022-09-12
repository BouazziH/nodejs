****npm inti -y :c'est pour cree un fichier json souf ligne de commande .
****touch : c'est pour cree des fichiers sous ligne de commande .
**** npm start : sous cmd c'est pour lancer l'application .
**** pour instaler nodemon :on tappe sur bash => npm i nodemon .
**** pour lancer le projet on met sur le fichier package.json  "start":nodemon fichier.js" apres il faut faire npm start .

**** pour instaler un module globalement en ajout -g exemple instal i -g XXXX
**** pour l'exerc fallait installer npm i dotenv apres dans le fichier env.js faut ajouter la ligne require('dotenv').config();
et apres pour afficher la variable declarer sur le ficher .env on a qu'a l'afficher comme ca :
console.log(process.env.name);
