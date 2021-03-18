const readlineSync = require('readline-sync');
const chalk        = require('chalk');
const numberWin    = Number(process.argv[2]); // Nombre entrer par le maitre du jeu

if(isNaN(numberWin)) {
    console.log(`Ce n'est pas un nombre`)
}

let reponse; 

do {
    reponse = readlineSync.question('Quel est le juste nombre ?')
    
    if(reponse > numberWin) {
        console.log(chalk.red("Votre chiffre est supérieur"))
    } else if (numberWin > reponse) {
        console.log(chalk.red("Votre réponse est inférieur"))
    } else {
        console.log(chalk.green("Bravo!"));
    }
} while (reponse === numberWin)


