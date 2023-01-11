import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='page'>
      <span id='dot'/>
    </div>
  )
}

export default App
