//Calcola la somma e la media dei primi 10 numeri.

// CREATE THE CYCLE WITH THE FIRST 10 NUMBERS
let totalNumber = 0;

for (let i = 1; i <= 10; i++) {

    // CALC THE FINAL NUMBER
    totalNumber += i; 
}

// OUTPUT SUM RESULT IN CONSOLE
console.log (totalNumber);

// CALC THE MIDDLE NUMBER / OUTPUT IN CONSOLE
const middleNumber = (totalNumber / 10);
console.log (middleNumber);



