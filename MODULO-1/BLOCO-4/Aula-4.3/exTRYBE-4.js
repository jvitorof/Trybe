let n = 7;
let linha = n;
let coluna = n;
let textol = [];

if ( n > 1 && n%2 != 0 ) {
    for (let l = 1 ; l <= linha ; l += 1 ) {
        if ( l%2 == 1) {
            for (let c = coluna ; c >= l ; c -= 2) {
                if (c > l ) {
                    textol += ' ';
                } else {
                    for (let asp = 1 ; asp <= l ; asp += 1 ) {
                        textol += '*';
                    }
                } 
            }
            console.log(textol)
            textol = [];
        }
    }
} else {
    console.log('n deve ser maior que 1 e impar')
}
