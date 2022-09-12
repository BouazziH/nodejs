/* console.log("Node.js");
console.log("hello");
// process.exit(1); */
const repl = require("repl");
const local = repl.start("$");
local.on("exit",() =>{ console.log("sortie de la console !");
process.exit();
})