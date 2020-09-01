let n = 100;
let primos = [];
let divisores = 0;

for (i = 0; i <= n ; i += 1) {
    //contador i para verificar cada um dos números da lista.
    for (d = 1 ; d <= i ; d += 1 ) {
        //um contador d (divisor para verificar o númeoro i da lista)
        if (i%d == 0) {
            //se número i for divisível por d com resto zero ele é divisível
            divisores += 1
        }
        
    }
    //sai do for que conta o número de divisores de i
    if (divisores == 2) {
        // se o número i possuir apenas dois divisores ele é primo e é acrescentado a lista.
        primos.push(i)
    }
    divisores = 0;
}
// imprime a lista
console.log(`Números primos até o #${n}: Total-${primos.length} \nNúmeros-${primos}`)

/* me embasei pela lógica do exercício anterior, pois inicialmente 
para imprimir os asteriscos dos cantos fiz a verificação de números primos
o que trouxe diferença apresentando alguns asteriscos no meio do triangulo*/