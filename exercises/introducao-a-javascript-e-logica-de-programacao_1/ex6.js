
let peça = ('TORRE'.toLowerCase());

switch (peça) {
   case 'peao':
    console.log('Anda em linha reta, uma única casa');   
    break;
   case 'torre':
    console.log('Anda em linha reta, quantas casas quiser');
    break;
   case 'cavalo':
    console.log('Anda em formato de L 2 por 1');
    break;
   case 'bispo':
    console.log('Anda em diagonal');
   case 'rainha':
    console.log('Anda em qualquer direção, quantas casas quiser');
    break;
   case 'rei':
    console.log('Anda em qualquer direção, apenas uma casa');
    break;
   default:
    console.log('Peça inexistente');                
}    