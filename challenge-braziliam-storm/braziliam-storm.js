// percorrer o array de notas 
//identificar a maior e a menor nota
//descartálas
//somar o restante e dividir pelo numero delas para obter a média
//imprimir a nota final 
const notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100];
let maiorNota = 0;
let menorNota = 100;
let soma = 0;

for (let nota of notas) {
    if (nota > maiorNota) {
        maiorNota = nota;
    }
    if (nota < menorNota) {
        menorNota = nota;
    }
    soma += nota; // soma todos os valores do array
}

const notaFinal = (soma - maiorNota - menorNota) / (notas.length - 2);
console.log(notaFinal);

