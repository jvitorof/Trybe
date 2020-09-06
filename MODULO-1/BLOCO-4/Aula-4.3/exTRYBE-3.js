let n = 5;
let linha = n;
let coluna = n;
let textol = [];

if ( n > 1 ) {
    for (let l = 1 ; l <= linha ; l += 1 ) {
        for (let c = coluna ; c >= 1 ; c -= 1) {
            if (c > l ) {
                textol += ' ';
            } else {
                textol += '*';
            }
        }
        console.log(textol)
        textol = [];

    }
} else {
    console.log('n deve ser maior que 1')
}
