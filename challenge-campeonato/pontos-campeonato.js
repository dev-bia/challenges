const resultados = [
    "V",
    "E",
    "V",
    "E"
];

//vitoria = 3, empate = 1 e derrota = 0

let pontos = 0;
let soma = 0;

for (let resultado of resultados) {
    if (resultado === "V") {
        pontos += 3;
    } else if (resultado === "E") {
        pontos += 1;
    }
}
console.log(pontos);