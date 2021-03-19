const statesList = document.getElementById('states')
const divInfos = document.getElementById('infosConsolidadas')
const nameForm = document.getElementById('name')
const emailForm = document.getElementById('email')
const cpfForm = document.getElementById('cpf')
const formComplete = document.getElementById('formDados')

function createStates() {
    const statesNames = ['Rio de janeiro', 'Sao Paulo', 'Minas gerais', 'Rio grande do sul', 'Rio grande do norte', 'Bahia', 'Mato Grosso', 'Goiás']
    for (let index = 0; index < statesNames.length; index += 1) {
        const optionsStates = document.createElement('option');
        statesList.appendChild(optionsStates);
        optionsStates.innerText = statesNames[index];

    }
}
function dayVerify() {
    const dayForm = document.getElementById('day')
    if (dayForm < 0 || dayForm > 31) {
        alert('O campo DIA foi preenchido de forma incorreta')
    }
}
function monthVerify() {
    const monthForm = document.getElementById('month')
    if (monthForm < 0 || monthForm > 12) {
        alert('O campo MÊS foi preenchido de forma incorreta')
    }
}
function yearVerify() {
    const yearForm = document.getElementById('year')
    if (yearForm < 0) {
        alert('O campo ANO foi preenchido de forma incorreta')
    }
}
// function stopForm(event){
// event.preventdefault()
// }


// function buttonStop(){
//     const button1 = document.getElementById('functionsFormsButton')
//     button1.addEventListener('click',stopForm)
// }


createStates()
dayVerify()
monthVerify()
yearVerify()
pushToDiv()
// buttonStop()

