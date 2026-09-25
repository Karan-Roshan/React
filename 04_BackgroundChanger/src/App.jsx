import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("#FFF3B0");

  return (
    <div
      className="w-full h-screen duration-500 transition-colors"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center items-center bottom-12 inset-x-0">
        <div className="w-200 h-10 flex flex-wrap justify-center gap-3 items-center  shadow-2xl bg-white backdrop-blur-lg border-white/50 border-2 px-5 py-3 rounded-2xl">

          <button
            onClick={() => setColor("#F8C8DC")}
            className="w-35 outline-none px-5 py-2 rounded-full text-[#C45A7A] border-[#C45A7A]/50 border font-semibold shadow-lg transition-all duration-200 hover:scale-110"
            style={{ backgroundColor: "#F8C8DC" }}
          >
            Blush Pink
          </button>

          <button
            onClick={() => setColor("#B7D7B0")}
            className="w-35 outline-none px-5 py-2 rounded-full text-[#5F8A5A] border-[#5F8A5A]/50 border font-semibold shadow-lg transition-all duration-300 hover:scale-110"
            style={{ backgroundColor: "#B7D7B0" }}
          >
            Sage Green
          </button>

          <button
            onClick={() => setColor("#BFDDF3")}
            className="w-35 outline-none px-5 py-2 rounded-full text-[#5B8DB8] border-[#5B8DB8]/50 border font-semibold shadow-lg transition-all duration-300 hover:scale-110"
            style={{ backgroundColor: "#BFDDF3" }}
          >
            Powder Blue
          </button>

          <button
            onClick={() => setColor("#D8C4E8")}
            className="w-35 outline-none px-5 py-2 rounded-full text-[#8A68A8] border-[#8A68A8]/50 border font-semibold shadow-lg transition-all duration-300 hover:scale-110"
            style={{ backgroundColor: "#D8C4E8" }}
          >
            Soft Lavender
          </button>

          <button
            onClick={() => setColor("#FFD1B3")}
            className="w-35 outline-none px-5 py-2 rounded-full text-[#C97A4B] border-[#C97A4B]/50 border font-semibold shadow-lg transition-all duration-300 hover:scale-110"
            style={{ backgroundColor: "#FFD1B3" }}
          >
            Peach
          </button>

        </div>
      </div>
    </div>
  )
}

export default App