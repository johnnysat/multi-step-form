import { useState } from 'react'
import './App.css'
import AsideStep from './components/AsideStep/AsideStep'
import Cadastro from './components/Cadastro/Cadastro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AsideStep />
      <Cadastro />
    </div>
  )
}

export default App
