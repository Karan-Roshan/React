import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);
  
  // let counter = 15;

  const addValue = () => {
    // counter = counter+1;
    if(counter < 20) {
      setCounter(counter + 1);
      console.log("clicked", counter+1);
    }
    
  }

  const removeValue = () => {
    if(counter > 0) {
      setCounter(counter - 1);
      console.log("clicked", counter - 1);
    }
    
  }



  return (
    <>
      <h1>Karan Roshan</h1>
      <h3>Counter Value: {counter}</h3>

      <button
      onClick={addValue}>Add Value</button>
      <br />
      <button
      onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
