const statesList = document.getElementById('states')
const divInfos = document.getElementById('infosConsolidadas')
const nameForm = document.getElementById('name')
const emailForm = document.getElementById('email')
const cpfForm = document.getElementById('cpf')
const formComplete = document.getElementById('formDados')
// função que cria os options do select
function createStates() {
    const statesNames = ['Rio de janeiro', 'Sao Paulo', 'Minas gerais', 'Rio grande do sul', 'Rio grande do norte', 'Bahia', 'Mato Grosso', 'Goiás']
    for (let index = 0; index < statesNames.length; index += 1) {
        const optionsStates = document.createElement('option');
        statesList.appendChild(optionsStates);
        optionsStates.innerText = statesNames[index];

    }
}
// Function da biblioteca PikaDay 
var picker = new Pikaday({ field: document.getElementById('pikaDay')}); 

// Função que valida os inputs

// Chamando funções
createStates()


// function stopForm(event){
// event.preventdefault()
// }


// function buttonStop(){
//     const button1 = document.getElementById('functionsFormsButton')
//     button1.addEventListener('click',stopForm)
// }





// buttonStop()

