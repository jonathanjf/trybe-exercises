const newPersonInfos = (nome) => {
    const email = nome.split(' ').join('_');
    const obj = {
        nomeCompleto: nome,
        email: `${email}@trybe.com`,
    }
    return obj;
}

const newEmployees = () => {
    const employees = {
        id1: newPersonInfos('Pedro Guerra'),// Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
        id2: newPersonInfos('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
        id3: newPersonInfos('Carla Paiva')// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
    }
    return employees;
};
console.log(newEmployees(newPersonInfos));