//percorrer o array
// encontrar em qual posição o array ficou
//imprimir o índice 


const sequencia = ['>', '>', '>', '<', '>'];

let contador = 0;

for (let setas of sequencia) {
    if (setas === ">") { //quando ando para a direita somo 1
        contador++;
        if (contador > 6) { // se passar de 6, volto para o começo 
            contador = -1;
            contador++;
        }
    } else if (setas === "<") { //quando ando para a esquerda subtraio 1
        contador--;
        if (contador < 0) { //se passar de 0, volto para o final
            contador = 7;
            contador--;
        }
    }
}

console.log(contador);