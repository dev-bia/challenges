//percorrer o array
//se tiver mais que 5 itens no array
//encontrar o menor valor
//somar todos os itens e descontar o valor menor valor
//imprimir a soma
//se não tiver 5 ou mais, apenas somar e imprimir a soma

let precos = [100, 500, 100, 200, 50];

let valorAPagar = 0;

if (precos.length >= 5) {
    let menorValor = precos[0];
    for (let i = 0; i < precos.length; i++) {
        if (precos[i] < menorValor) {
            menorValor = precos[i];
        }
        valorAPagar += precos[i];
    }
    console.log(valorAPagar - menorValor);
} else {
    for (let i = 0; i < precos.length; i++) {
        valorAPagar += precos[i];
    }
    console.log(valorAPagar);
}


