import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center gap-10">
        <div className="bg-green-400 text-4xl font-bold text-black p-5 rounded-xl w-75 h-15 text-center flex items-center justify-center">
          Profiles
        </div>

        <div className='flex flex-row gap-5'>
          <Card username="Nyasha Shikhar" btnText="Click Me" about="Passionate web developer creating modern, responsive websites." />
          <Card username="Sonu" btnText="Explore" about="Builds scalable and efficient software solutions." />
        </div>
      </div>
    </>
  )
}

export default App