let palavra = 'ama';
let palavra2 = 0;
let palavrainv = 0;

function verificaPalindromo(palavra){
  for(i = 0; i < palavra.length; i += 1){
  palavra2 = (palavra[i]);
  }
  for (index = palavra.length -1 ; index >= 0 ; index -= 1) {
  palavrainv = (palavra[index]);
  }
  if (palavra2 === palavrainv){
  console.log('True');
  }
  else {
  console.log('false');    
  }
}  