//percorrer o array de disparos
// identificar se existe 3 disparos com 70 pts ou mais
// se sim, devo imprimir a qtd de acertos
//se não, devo imprimir "ELIMINADO"

const disparos = ['10', '50', '70', '80', '30', '20', '40'];

const pontuacao = [];

for (let pontos of disparos) {
    if (pontos >= 70) {
        pontuacao.push(pontos); //empurrei as os disparos 70+ para a variável pontuação
    }
}

if (pontuacao.length >= 3) {
    console.log(pontuacao.length);
} else {
    console.log("ELIMINADO");
}