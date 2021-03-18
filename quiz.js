const readlineSync = require('readline-sync');

let bonneReponse = 0;

let questionUn = readlineSync.question(`Le C++ est un: 
1 - Langage 
2 - Compilateur
Choissisez 1 ou 2 : `)

let questionDeux = readlineSync.question(`TypeScript est une évolution de JavaScript: 
1 - Vrai 
2 - Faux
Choissisez 1 ou 2 : `)

let questionTrois = readlineSync.question(`Lire les cours avant de faire les exercices est inutile: 
1 - Vrai 
2 - Faux 
Choissisez 1 ou 2 : `)

let questionQuatres = readlineSync.question(`react.js a été developpé par Google: 
1 - Vrai 
2 - Faux
Choissisez 1 ou 2 : `)

let questionCinq = readlineSync.question(`Ethereum est une blockchain publique: 
1 - Vrai 
2 - Faux 
Choissisez 1 ou 2 : `)

if(questionUn == 1) {
    bonneReponse+=1;
} 

if(questionDeux == 1) {
    bonneReponse+=1;
} 

if(questionTrois == 2) {
    bonneReponse+=1;
} 

if(questionQuatres == 2) {
    bonneReponse+=1;
}

if(questionCinq == 1) {
    bonneReponse+=1;
} 

console.log(`Vous avez eu : ${bonneReponse} bonne réponse!`);