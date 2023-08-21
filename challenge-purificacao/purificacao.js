const stringCorrompida = "*Canis %lupus )familiaris";

//function solucao(stringCorrompida) {

let dadoPurificado = "";

for (let caractere of stringCorrompida) {
    if (caractere !== "!" && caractere !== "@" && caractere !== "#" && caractere !== "$" && caractere !== "%" && caractere !== "&" && caractere !== "*" && caractere !== "(" && caractere !== ")") {
        dadoPurificado += caractere;
    }
}

console.log(dadoPurificado);
//}


