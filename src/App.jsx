import { useState } from 'react'
import './App.css'
import AsideStep from './components/AsideStep/AsideStep'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AsideStep/>
    </div>
  )
}

export default App
