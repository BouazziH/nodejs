const { exec } = require("child_process");
const { stderr } = require("process");
exec("npm --version", (error, stdout, stderr) => {console.log(`npm version ${stdout.trim()}`);
});

exec('node -v',(error, stdout, stderr) => {
    console.log(`la version de node est ${stdout.trim()}`);
});