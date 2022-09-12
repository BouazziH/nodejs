/* console.log(process.argv[2]); */
//slice et split des fonctions java  look at the docs 
/* console.log(process.argv.slice(2)[0].split('=')[1]); */
//deuxieme methode regarder le readme
const minimist = require("minimist");
const argNew = minimist(process.argv.slice(2));
//pour afficher en bash on met node argument.js --nom pour l'affichage
console.log(argNew.nom);
console.log(argNew.prenom);