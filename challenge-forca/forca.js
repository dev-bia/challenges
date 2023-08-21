
const palavra = "abelha";
const palpite = "a";
let acertos = [];

for (let letra of palavra) {
    if (letra === palpite) {
        acertos.push(letra); //empurra se o array for uma []
    }
}
console.log(acertos.length);