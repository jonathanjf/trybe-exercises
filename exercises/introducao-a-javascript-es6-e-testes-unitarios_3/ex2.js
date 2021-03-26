const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
  
}

// implemente seus testes aqui
assert.deepStrictEqual(myRemove([1, 2, 3, 4],3),([1, 2, 4]),'Não Retorna o array esperado');
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4],3),([1, 2, 3, 4]),'Não retorna o array [1,2,3,4]');
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4],3),([1, 2, 3, 4],3),'sofreu alterações');
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5),([1, 2, 3, 4]),'não retorna o array esperado');