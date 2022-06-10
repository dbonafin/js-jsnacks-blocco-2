// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

// CREATE TWO ARRAYS WITH DIFFERENT ELEMENTS
const longArray = [2, 4, 6, 8, 12, 97, 44, 13]

const shortArray = [3, 5, 7]

// GENERATE CASUAL NUMBERS AND PUT THEM INSIDE THE ARRAY WITH LESS ELEMENTS
do {
    casualNumber = Math.floor(Math.random() * 100) + 1;
    shortArray.push(casualNumber);
} while (shortArray.length !== longArray.length);

// OUTPUT RESULT IN CONSOLE
console.log(longArray);
console.log(shortArray);



