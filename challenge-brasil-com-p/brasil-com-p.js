const palavras = [
    "aveia",
    "manha",
    "ave",
    "morango",
    "mochila"
];
const primeiraLetra = "m";
const segundaLetra = "o";

let resposta = [];
let condicao1 = false; // Inicializando a variável condicao1

for (let palavra of palavras) { // "palavra" para percorrer as palavras
    if (palavra[0] === primeiraLetra && palavra[1] === segundaLetra) {
        resposta.push(palavra); // push para adicionar a palavra à resposta
        condicao1 = true;
    }
}

if (condicao1 === false) {
    console.log("NENHUMA");
} else {
    for (let palavra of resposta) {
        console.log(palavra); //imprime cada palavra correspondente em uma linha separada, sem aspas e sem os colchetes.
    }
}
