//Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smallest = numbers[0];
for (i in numbers) {
    if (numbers[i] < smallest ){
        smallest = numbers[i];
    }
}

console.log(`O maior número é: ${smallest}`)