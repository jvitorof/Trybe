//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

let until = 25;
let datiral = [];
let dividedbytwo = [];
let j = 1;
for ( i = 0 ; i < until; i += 1 ) {
    datiral[i] = j;
    j += 1;
    dividedbytwo[i] = datiral[i]/2;
}

console.log(`array ${datiral}`);
console.log(`divby2 ${dividedbytwo}`);