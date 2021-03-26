const assert = require('assert');
// escreva a função sumAllNumbers aqui
let numbersCaunt = 0;
const sumAllNumbers = (numbers) => {
    for (let index = 0; index < numbers.length; index +=1){
        numbersCaunt += numbers[index] 
    }
return numbersCaunt
}
const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);