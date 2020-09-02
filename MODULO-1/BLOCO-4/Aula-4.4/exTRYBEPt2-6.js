let n = 15;

function somatorio(x) {
    soma = 0;
    for (i = 1; i <= x; i += 1){
        soma += i;
    }
    return soma;
}

console.log(somatorio(n));