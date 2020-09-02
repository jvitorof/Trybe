/*Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
Valor esperado no retorno da função: Fernanda. */

testeArray = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome(array) {
    let tamanho = array[0].length
    let maior = 0;
    for (i in array) {        
        if (array[i].length > tamanho) {
            tamanho = array[i].length;
            maior = i;
        }
    }
    return array[maior];
}

console.log(maiorNome(testeArray))