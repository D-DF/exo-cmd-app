const readlineSync = require('readline-sync');
const chalk        = require('chalk');
const numberWin    = Number(process.argv[2]); // Nombre entrer par le maitre du jeu

if(isNaN(numberWin)) {
    console.log(`Ce n'est pas un nombre`)
}

let question;

while (numberWin !== question) {

    question = readlineSync.question('Quel est le juste nombre ? ');

    if(numberWin > question) {
        console.log(chalk.red("Votre chiffre est plus petit"))
    } else if (question > numberWin) {
        console.log(chalk.red('Votre chiffre est plus grand'))
    } else {
        console.log(chalk.green('Bravo'))
        process.exit(1)
    }  
}

    

