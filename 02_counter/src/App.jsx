import { useState } from 'react'

function App() {
  let [counter, setCounter] = useState(15)

  const addValue = () => {
    // setCounter(counter);

    if(counter < 20) {
      counter += 1;
      setCounter(counter);
    }
  }

  const removeValue = () => {
    if(counter > 0) {
      counter -= 1;
      setCounter(counter);
    }
  }

  return (
    <>
      <h1>Karan Roshan</h1>

      <h2>Counter Value: {counter}</h2>

      <div className="buttons">
        <button onClick={addValue}>
          Add Value
        </button>

        <button onClick={removeValue}>
          Remove Value
        </button>
      </div>
    </>
  )
}

export default App