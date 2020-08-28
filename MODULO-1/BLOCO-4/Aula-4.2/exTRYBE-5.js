//Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let higher = numbers[0];
for (i in numbers) {
    if (numbers[i] > higher ){
        higher = numbers[i];
    }
}

console.log(`O maior número é: ${higher}`)