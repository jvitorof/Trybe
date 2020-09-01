let n = 5;
let linha = n;
let coluna = n;
let textol = [];

if ( n > 1 ) {
    for (let c = 1 ; c <= coluna ; c += 1 ) {
        textol += '*';
        console.log(textol)
    }
} else {
    console.log('n deve ser maior que 1')
}
