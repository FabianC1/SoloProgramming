import { useState } from 'react'

function App() {
  const [isOn, setisOn] = useState(false);
  return (
    <div>
      <h1>React Button Toggle</h1>
      <button onClick={() => setisOn(!isOn)}>
        {isOn ? 'ON' : 'OFF'}
      </button>
    </div>
  )
}

export default App
