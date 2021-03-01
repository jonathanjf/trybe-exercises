let salario = 3000;
let inss;

if (salario < 1556.95){
inss = ((salario / 100) * 8)
}
else if (salario < 2594.92 && salario > 1556.95){
iss = ((salario / 100)* 9)
}
else if(salario < 5189.82 && salario > 2594.92){
inss = ((salario / 100)* 11)    
}

let salarioSemInss = salario - inss;
let impIR

if (salarioSemInss < 1903.98) {
impIR = 0;      
}
else if (salarioSemInss > 1903.99 && salarioSemInss < 2826.65){
impIR = ((salarioSemInss / 100)* 7.5) - 142.80;
}
else if (salarioSemInss > 2826.65 && salarioSemInss < 3751.05) {
impIR = ((salarioSemInss / 100)* 15) - 354.80;    
}
else if (salarioSemInss > 3751.05 && salarioSemInss < 4664.68) {
impIR = ((salarioSemInss / 100)* 22.5) - 636.13;     
}
else if (salarioSemInss > 4664.68){
impIR = ((salarioSemInss / 100)* 27.5) - 869.36;    
}

let salarioLiquido = salarioSemInss - impIR;

console.log(salarioLiquido);