const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  // adiciona o turno manhã no objeto lesson2

const turnCollege = (lesson2,key,valor) => {
lesson2[key] = valor
}
turnCollege(lesson2,['turno'],'manhã');

console.log(lesson2)


// lista as chaves existentes no objeto

const listKeys = (objeto) => {
    console.log(Object.keys(objeto));
}
listKeys(lesson1);

//mostra o tamanho do objeto

const showObjSize = (objeto) => {
    console.log(Object.keys(objeto).length);
}
showObjSize(lesson1);

// // lista os valores de um objeto

const listValues = (objeto) => {
    console.log(Object.values(objeto));
}

listValues(lesson1);

// põe todos os valores dos objetos dentro de um só
const allLessons = {
}

const lessonsComplete = (a,b,c,d) => {
Object.assign(a,b,c,d)
console.log(a)
}
lessonsComplete(allLessons,{lesson1,lesson2,lesson3})

// soma o total de alunos das três lessons

const totalAlunos = (objeto) => {
console.log(`${objeto.lesson1.numeroEstudantes + objeto.lesson2.numeroEstudantes + objeto.lesson3.numeroEstudantes}`)
}
totalAlunos(allLessons);

// trás o valor indicado como parâmetro na função

const keyValue = (objeto,a) => {
const objectValue = Object.values(objeto);
 console.log(objectValue[a]);
}
keyValue(lesson1,0);

// retorna true se o objeto.chave == valor for verdadeiro, caso contrário, retorna false.

const verifyObjPair = (objeto,key,value) => {
    const trueOfFalse = (objeto[key] === value)? `true` : `false`;
    console.log(trueOfFalse);
}
verifyObjPair(lesson1,'materia','Matemática');
