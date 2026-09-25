import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) {
      str += "0123456789";
    }

    if (charAllowed) {
      str += "!@#$%^&*()_+-={}[]?";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className="min-h-screen min-w-screen bg-[#0B1120] flex items-center justify-center px-4 py-10 border-2 border-red-800">
        <div className="w-full max-w-xl flex flex-col gap-5 ">
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-center">
            Password Generator
          </h1>

          <div className="flex flex-col bg-[#111827] border border-[#1E293B] rounded-2xl shadow-2xl shadow-black/30 p-10">
            <div className="mb-8">
              <label className="block text-sm font-medium text-[#CBD5E1] mb-2">
                Generated Password
              </label>

              <div className="flex h-14 bg-[#0B1120] border border-[#334155] rounded-xl overflow-hidden focus-within:border-[#6366F1] transition">
                <input
                  type="text"
                  value={password}
                  readOnly
                  placeholder="Your password will appear here"
                  className="flex-1 min-w-0 px-4 bg-transparent outline-none text-white font-mono text-sm placeholder:text-[#64748B]"
                  ref={passwordRef}
                />

                <button
                className="px-5 bg-[#6366F1] text-white font-semibold hover:bg-[#4F46E5] transition"
                onClick={copyPasswordToClipboard}>
                  Copy
                </button>
              </div>
            </div>

            <div className="mb-7 p-4 rounded-xl bg-[#0F172A] border border-[#1E293B] hover:border-[#334155] transition cursor-pointer">
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-semibold text-[#E2E8F0]">
                  Password Length
                </label>
                <span className="px-3 py-1 rounded-lg bg-[#6366F1]/10 border border-[#6366F1]/20 text-[#818CF8] font-bold text-sm">
                  {length}
                </span>
              </div>

              <input
                type="range"
                min={6}
                max={30}
                value={length}
                className="w-full h-1 rounded-lg appearance-none cursor-pointer bg-white/50 accent-[#6366F1]"
                onChange={(e) => {
                  setLength(e.target.value)
                }}
              />

              <div className="flex justify-between mt-2 text-xs text-[#64748B]">
                <span>6</span>
                <span>30</span>
              </div>
            </div>


            <div className="space-y-3">
              <label className="flex items-center justify-between p-4 rounded-xl bg-[#0F172A] border border-[#1E293B] hover:border-[#334155] transition cursor-pointer">
                <div>
                  <p className="text-sm font-semibold text-[#E2E8F0]">
                    Include Numbers
                  </p>
                </div>

                <input
                  type="checkbox"
                  className="w-5 h-5 accent-[#6366F1] cursor-pointer"
                  defaultChecked={numberAllowed}
                  id="numberInput"
                  onChange={(prev) => {
                    setNumberAllowed((prev) => !prev);
                  }}
                />
              </label>

              <label className="flex items-center justify-between p-4 rounded-xl bg-[#0F172A] border border-[#1E293B] hover:border-[#334155] transition cursor-pointer">
                <div>
                  <p className="text-sm font-semibold text-[#E2E8F0]">
                    Include Characters
                  </p>
                </div>

                <input
                  type="checkbox"
                  className="w-5 h-5 accent-[#6366F1] cursor-pointer"
                  defaultChecked={charAllowed}
                  id="charInput"
                  onChange={(prev) => {
                    setCharAllowed((prev) => !prev);
                  }}
                />
              </label>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App