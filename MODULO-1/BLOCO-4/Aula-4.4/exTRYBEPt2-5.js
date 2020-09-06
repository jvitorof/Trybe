/* Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3];.
Valor esperado no retorno da função: 2.*/

testeArray = [3, 3, 2, 5, 8, 2, 3];

function indiceMaiorNoArray(array) {
    let indice = 0;
    for (i in array) {        
        if (array[i] > array[indice]) {
            indice = i;
        }
    }
    return indice;
}

function maisVezes(array) {
    let numeroVezes = [];
    
    for (i in array) {
        let aparece = 0;
        for (j in array) {    
            if (array[i] == array[j] ) {
                aparece += 1;
            }
        }
        numeroVezes[i] = aparece;
        maisAparece = array[indiceMaiorNoArray(numeroVezes)]
    }    
    return maisAparece;
}
console.log(maisVezes(testeArray));