//percorrer o array  de palavras
// examinar a primeira letra de cada palavra
//comparar essa letra com a letra que foi dada
// as que estiverem corretas devo ignorar
// as erradas, devo somar a quantidade de crianças que erraram

const letra = "r";
const palavras = ["mamao",
    "maca",
    "melao",
    "limão",
    "abacaxi",
    "melancia",
    "uva"];

let criancaPerdeu = 0;

for (let palavra of palavras) {
    if (palavra[0] !== letra) {
        criancaPerdeu++;
    }
}

console.log(criancaPerdeu);


