let stringWord = 'joaofernando';
let stringEnding = 'fernando';

function stringCompara(palavra, final) {
    finalDaPalavra = false;
    for (i = 0; i< final.length; i += 1) {
        a = palavra[palavra.length-final.length+i];
        b = final[i]
        if ( a == b ) {
            finalDaPalavra = true;        
        } else {
            finalDaPalavra = false;
            break;
        }
    }
    return finalDaPalavra;
}

console.log(stringCompara(stringWord, stringEnding));
