// percorrer o array
//encontrar o valor da compra da casa
// encontrar o segundo valor, que é do da venda da casa
// a diferença entre eles deve apresentar prejuízo 
// este prejuízo deve ser o mínimo possível

const precos = [5, 10, 3];
let perdaMinima = Infinity;

for (let a = 0; a < precos.length; a++) {
    for (let b = a + 1; b < precos.length; b++) {
        if (precos[a] > precos[b] && precos[a] - precos[b] < perdaMinima) {
            perdaMinima = precos[a] - precos[b];
        }
    }
}

console.log(perdaMinima);