import { useState } from 'react'
import './App.css'
import { Bmiapp } from './Bmiapp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Bmiapp/>
    </>
  )
}

export default App


