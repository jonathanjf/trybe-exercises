const assert = require('assert');

const myList = [1, 2, 3];

// escreva swap abaixo
const swap = ([element1, element2, element3]) => [element3, element2, element1];

const swappedList = swap(myList);

assert.strictEqual(swappedList[0], 3);
assert.strictEqual(swappedList[1], 2);
assert.strictEqual(swappedList[2], 1);