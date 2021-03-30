const gabarito = 'meu nome é Jonathan';
const tentativa = 'meu nome é jonathan';

const validation = (gabarito) => (tentativa) => gabarito.toLowerCase() === tentativa.toLowerCase();

console.log(validation(gabarito)(tentativa));