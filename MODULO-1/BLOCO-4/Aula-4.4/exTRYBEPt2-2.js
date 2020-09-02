/*Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1];.
Valor esperado no retorno da função: 4.*/

let testArray = [2, 3, 6, 7, 10, 1];

function indiceMaiorNoArray(array) {
    let indice = 0;
    for (i in array) {        
        if (array[i] > array[indice]) {
            indice = i;
        }
    }
    return indice;
}

console.log(indiceMaiorNoArray(testArray))