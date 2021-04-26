import './App.css';

// const task = (value) => {
//   return (
//     <li>{value}</li>
//   );
// }
const tarefas = ['acordar','estudar','comer','dormir']

function App() {
  return (
    <div className="App">
      <ol>
        {tarefas.map((tarefa) => <li>{tarefa}</li>)}
      </ol>
    </div>
  );
}

export default App;
