const readlineSync = require('readline-sync');

if(process.argv.length !== 3) {
    console.log(`usage: node majorityTest.js age`)
    process.exit(1)
}

if(isNaN(process.argv[2])) {
    console.log(`Error: ${process.argv[2]} is not a number`)
    proces.exit(1);
}

let firstName = readlineSync.question('Quel est ton prénom ?');
let name      = readlineSync.question('Quel est ton nom ?');
let age       = readlineSync.question('Quel est ton âge ?');
let pays      = process.argv[2];
let majorite  = Number(pays);


switch(majorite) {
    case 18: 
        if(age >= 18) {
            console.log(`${firstName} ${name}, vous êtes majeur, vous pouvez voter`);
        } else {
            console.log(`Désolé ${firstName} ${name}, vous êtes mineur, vous ne pouvez pas voter`);
        }
        break;

    case 21:
        if(age >= 21) {
            console.log(`${firstName} ${name}, vous êtes majeur, vous pouvez voter`);
        } else {
            console.log(`Désolé ${firstName} ${name}, vous êtes mineur, vous ne pouvez pas voter`);
        }
        break;

    default: 
        console.log("Error: Vous n'avez pas entrer d'âge")
        process.exit(1);
        break;
}