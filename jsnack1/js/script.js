// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando
// la somma degli elementi è minore di 50.

// CREATE THE EMPTY ARRAY
const totalNumber = [];

let addictionNumber = 0;

while (addictionNumber < 50) {

    // ASK THE USER A NUMBER TILL WE REACH THE NUMBER 50
    userNumber = prompt("Digita un numero");

    userNumber = parseInt(userNumber);
    
    // CALC THE RESULT NUMBER AND ADD IT TO THE ARRAY 
    totalNumber.push (userNumber);
    addictionNumber += userNumber;

} 

// OUTPUT IN THE CONSOLE
console.log (totalNumber);

