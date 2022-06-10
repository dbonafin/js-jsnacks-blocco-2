// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

// // FOR VERSION
// let sumNumber = 0;

// // ASK THE USER A NUMBER FOR 5 TIMES
// for (let i = 0; i < 5; i++ ) {
//     let userNumber = prompt ("Digita un numero");
//     userNumber = parseInt (userNumber);

//     // CALC THE RESULT NUMBER
//     sumNumber += userNumber;
// }

// // OUTPUT RESULT IN CONSOLE
// console.log (sumNumber);

///////////////////////////////////////////////////////////////

// WHILE VERSION
let i = 0;
let totalResult = 0;

// ASK THE USER A NUMBER FOR 5 TIMES
while (i < 5) {
    let userNumber = prompt ("Digita un numero");
    userNumber = parseInt (userNumber);

    // CALC THE RESULT NUMBER
    totalResult += userNumber;
    i++;
}

//  OUTPUT RESULT IN CONSOLE
console.log(totalResult);
 