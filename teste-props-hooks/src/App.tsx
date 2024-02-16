
import './App.css'
import ConcluirTarefa from './assets/paginas/Tarefa/ConcluirTarefa'
import Contador from './assets/paginas/contador/Contador'
import Home from './assets/paginas/home/Home'


function App() {


  return (
    <>
     <Home titulo ="Esse é um componente com props" 
     texto="agora já estamos trabalhando com props - componente chamado com sucesso" />
     <Home titulo ="Agora é um teste mt legaaaal" 
     texto="testando a teoria do teste mt legaalll" />

     <Contador />
     <ConcluirTarefa />
    </>
  )
}

export default App
