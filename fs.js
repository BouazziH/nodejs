/* const fs = require("fs");
const path = require("path");
//comment lire les donnes de ficher json
const fileName =  path.join(__dirname,'sample.json');
fs.readFile(fileName,(err,contenue) => {console.log(String(contenue))
})

 */
// pour lister tous les fichiers 
const {readdir} = require("fs");
readdir('.',(error,files) => console.log(files));