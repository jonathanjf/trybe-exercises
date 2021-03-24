// exercício um parte um
const testingScope = (escopo) => {
    if (escopo === true) {
        let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
        ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
        console.log(ifScope);
    } else {
        let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
        console.log(elseScope);
    }

}

testingScope(true);
// Exercício dois parte um

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
// Seu código aqui.

//função exercício dois parte um no modelo arrow function
oddsAndEvens.sort((a, b) => a - b)
console.log(oddsAndEvens);

//função exercício dois parte um no modelo função anônima
oddsAndEvens.sort(function (a, b) {
    return a - b
});
console.log(`${oddsAndEvens} se encontram ordenados de forma crescente!`)

//Help, comente uma das funções do exercício dois para ficar mais claro o funcionamento de cada uma.