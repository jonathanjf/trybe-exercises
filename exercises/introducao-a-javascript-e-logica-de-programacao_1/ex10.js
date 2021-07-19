let valorCusto = 100;
let valorVenda = 150;

let impostoSobreOCusto = (valorCusto / 100) * 20;
let ValorCustoTotal = (valorCusto + impostoSobreOCusto);
let lucroTotal = valorVenda - ValorCustoTotal;

if (valorCusto < 0 || valorVenda < 0){
console.log('ERRO, VALOR INCORRETO!')
}
else {
console.log(lucroTotal * 1000)    
}