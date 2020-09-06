/*Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".
Valor esperado no console:
Copiar
Margarida e Tio Patinhas
Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
Ambos recorrentes // Atenção para essa última linha! */

let personagem = [];

let margarida = {
    nome: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim"
    }

personagem.push(margarida);

let patinhas= {
    nome: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
}

personagem.push(patinhas);


for (let key in patinhas) {
    if (margarida[key] === patinhas[key]) {
        console.log('ambos são(tem) ' + key + 's');
    } else {
        console.log(margarida[key] + ' e ' + patinhas[key]);
    }
}

console.log(personagem)

