const userNumber = prompt("Dammi un numero da 1 a 6:");
const numberUserPlayed = parseInt(userNumber);
console.log(numberUserPlayed, typeof numberUserPlayed);

let gcNumber = Math.trunc((Math.random() * 6) + 1);
console.log(gcNumber);

let result;

if (numberUserPlayed > gcNumber){
    result = "Vince l'utente!"
} else if (numberUserPlayed < gcNumber){
    result = "Vince il computer!"
} else {
    result = "Pareggio!"
}

console.log(result);

