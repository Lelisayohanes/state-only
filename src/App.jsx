import { useState } from 'react'
import MyComponent from './MyComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <MyComponent/>
      </div>
    </>
  )
}

export default App
