const http =  require("http");

//const port = 1309;
const port = process.env.PORT || 1309;

const serveur = http.createServer((req, res) =>
{
res.statusCode = 200
res.setHeader('Contente-Type','text/html')
res.end('<h1>Welcome to Bouazzis server</h1>')
})

serveur.listen(port, () => {console.log(`serveur lancer à l'adresse http://127.0.0.1:${port}`)})