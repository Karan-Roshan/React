import { useState } from 'react'

function App() {
  let [counter, setCounter] = useState(15)

  const addValue = () => {
    counter += 1;
    // setCounter(counter);

    if(counter <= 20) {
      setCounter(counter);
    }
  }

  const removeValue = () => {
    counter -= 1;

    if(counter >= 0) {
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