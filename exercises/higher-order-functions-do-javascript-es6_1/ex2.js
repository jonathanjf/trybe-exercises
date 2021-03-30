
const compareNumbers = (numberChoiced, numberSorted) => numberChoiced === numberSorted;

const resultNumbers = (numberChoiced, action) => {
    let numberSorted = Math.floor((Math.random() * 5) + 1);
    return action(numberChoiced, numberSorted) ? 'Você ganhou, parabéns!' : 'Tente outra vez!';
}
console.log(resultNumbers(3, compareNumbers));
