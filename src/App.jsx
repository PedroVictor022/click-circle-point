import { useState } from 'react'
import './App.css'

function App() {
  const [point, setPoint] = useState([]);

  const handleClick = (e) => {
    const newPoint = {
      clientX: e.clientX,
      clientY: e.clientY
    }
    console.log(newPoint);
    setPoint((prev) => [...prev, newPoint]);
    console.log(point)
  };

  return (
    // Click element
    <div id='page' onClick={handleClick}>
      {point.map((item) => {
        return <span 
            className='dot'
            style={{
              left: item.clientX,
              top: item.clientY
            }}
          />
      })}
    </div>
  )
}

export default App
