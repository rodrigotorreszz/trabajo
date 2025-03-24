import { useState } from 'react'
import Trabajo from './components/Trabajo/Trabajo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Registro de Estudiantes :D</h1>
      <Trabajo/>
      
    </>
  )
}

export default App
