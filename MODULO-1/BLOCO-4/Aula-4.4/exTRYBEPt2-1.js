/*Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
Exemplo de palíndromo: arara.
verificaPalindrome("arara");
Retorno esperado: true
verificaPalindrome("desenvolvimento");
Retorno esperado: false*/

let palavra = 'arara';

function verPalindromo(a) {
    let palindromo = false;
    let contador = 0;
    for (i in a) {
        if (a[i] != a[a.length-i-1]) {
            contador += 1;
        }
    }
    if (contador == 0) {
        palindromo = true;    
    }

    return palindromo;
}

console.log(verPalindromo(palavra));