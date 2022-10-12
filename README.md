
****pour afficher les resultas d'un fichier faut executer en bash node nomfichier.js
****npm inti -y :c'est pour cree un fichier json sous ligne de commande .
****touch : c'est pour cree des fichiers sous ligne de commande .
**** npm start : sous cmd c'est pour lancer l'application .
**** pour instaler nodemon :on tappe sur bash => npm i nodemon .
**** pour lancer le projet on met sur le fichier package.json  "start":nodemon fichier.js" apres il faut faire npm start .

**** pour instaler un module globalement en ajout -g exemple instal i -g XXXX
**** pour l'exerc fallait installer npm i dotenv apres dans le fichier env.js faut ajouter la ligne require('dotenv').config();
et apres pour afficher la variable declarer sur le ficher .env on a qu'a l'afficher comme ca :
console.log(process.env.name);
**** nmp i minimist 
**** child procces permet d'executer des programmes externe
**** bash-script pour rendre un script executable on tappe 
chmod +x  nom du fichier.js pour l'afficher on tappe ./bash-script.js
****server.js  on a cree un server on determinant le port pour l'executer tapper l'adresse du serveru sur le navigateur 
****** si on veut utiliser le fichier .env
faut declarer un PORT dans le fichier apres dans le fichier js faut appelée
le require('dotenv').config(); et zoo ca change tout seul.
