import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (characters) str += "!@#$%&*~^`";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, characters, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 50);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => { passwordGenerator() }, [length, number, characters, passwordGenerator]);

  return (
    <div className="main" style={{ backgroundColor: "gray" }}>
      <h2>Password Generator</h2>
      <div>
        <input type='text' ref={passwordRef} value={password} className='input-box' />
        <button onClick={copyPasswordToClipboard} className='btnCopy'>Copy</button>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "5px" }}>
        <div style={{ padding: "5px" }}>
          <input type='range' min={8} max={50} value={length} className='cursor-pointer' onChange={(e) => { setLength(e.target.value) }} />
          <label>Length:({length})</label>
        </div>
        <div style={{ padding: "5px" }}>
          <input type='checkbox' value={number} onChange={() => { setNumber((prev) => !prev) }} />
          <label>Number {number}</label>
        </div>
        <div style={{ padding: "5px" }}>
          <input type='checkbox' value={characters} onChange={() => { setCharacters((prev) => !prev) }} />
          <label>characters {characters}</label>
        </div>
      </div>
    </div>
  );
}

export default App;
