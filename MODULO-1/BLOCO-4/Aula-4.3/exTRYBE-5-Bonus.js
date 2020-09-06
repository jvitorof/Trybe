let n = 7;
let linha = n;
let coluna = n;
let textol = [];

if ( n > 1 && n%2 != 0 ) {
    // verifica se é uma piramide (com ponta *impar*) e não apenas um ponto
    for (let l = 1 ; l <= linha ; l += 1 ) {
        //começa o trabalho de cada linha
        if ( l%2 == 1) {
            //se a linha for impar ela faz parte da construção da pirâmide
            for (let c = coluna ; c >= l ; c -= 2) {
                /*para ser construida a pirâmide o centro deve ficar na metade
                por isso o contador c da coluna cresce de 2 em 2 */
                if (c > l ) {
                    /* se a coluna for menor que a linha ele imprime espaço vazio
                    como a coluna é decrementada e a linha incrementada eles se encontram
                    em toda linha com a linha passando a ser maior cada vez encontrando
                    mais cedo */
                    textol += ' ';
                } else {
                    for (let asp = 1 ; asp <= l ; asp += 1 ) {
                        
                        if (l == linha) {
                            textol += '*';
                        } else if (asp == 1 || asp == l ) {
                            textol += '*';                             
                        } else {
                            textol += ' ';
                        }
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
