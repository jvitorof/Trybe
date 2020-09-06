//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let even, odd = 0;
for (i in numbers) {
    if ( numbers[i]%2 == 0 ) {
        even += 1;
    } else {
        odd += 1;
    }
}

console.log(`Números impares: ${odd}`)