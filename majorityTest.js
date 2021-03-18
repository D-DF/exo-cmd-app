const readlineSync = require('readline-sync');

let firstName = readlineSync.question('Quel est ton prénom ?');
let name      = readlineSync.question('Quel est ton nom ?');
let age       = readlineSync.question('Quel est ton âge ?');

if(age < 18) {
    console.log(`Désolé ${firstName} ${name}, vous êtes mineur, vous ne pouvez pas voter`);
}  else {
    console.log(`${firstName} ${name}, vous êtes majeur, vous pouvez voter`);
}