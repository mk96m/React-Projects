import React from 'react';
import { useState } from 'react';
import './App.css';
import Count from './Count';


function App() {
  const [color, setColor] = useState("violet")


  return (
    <div style={{ backgroundColor: color, width: "100%", height: "750px" }}>
      <div style={{ display: "block", border: "2px solid transparent", padding: "15px" }}>
        <div style={{ textAlign: "center" }}>
          <button onClick={() => setColor("red")} style={{ backgroundColor: "red", color: "white", borderRadius: "5px", padding: "5px", margin: "5px" }}>Red</button>
          <button onClick={() => setColor("blue")} style={{ backgroundColor: "blue", color: "white", borderRadius: "5px", padding: "5px", margin: "5px" }}>Blue</button>
          <button onClick={() => setColor("black")} style={{ backgroundColor: "black", color: "white", borderRadius: "5px", padding: "5px", margin: "5px" }}>Black</button>
          <button onClick={() => setColor("green")} style={{ backgroundColor: "green", color: "white", borderRadius: "5px", padding: "5px", margin: "5px" }}>Green</button>
          <button onClick={() => setColor("aqua")} style={{ backgroundColor: "aqua", color: "white", borderRadius: "5px", padding: "5px", margin: "5px" }}>Aqua</button>
          <button onClick={() => setColor("gray")} style={{ backgroundColor: "gray", color: "white", borderRadius: "5px", padding: "5px", margin: "5px" }}>Gray</button>
          <button onClick={() => setColor("purple")} style={{ backgroundColor: "purple", color: "white", borderRadius: "5px", padding: "5px", margin: "5px" }}>Purple</button>
          <button onClick={() => setColor("olive")} style={{ backgroundColor: "olive", color: "white", borderRadius: "5px", padding: "5px", margin: "5px" }}>Olive</button>
        </div>
      </div>
      <div style={{ display: "block", textAlign: "center", border: "1px solid", width: "200px", margin: "auto", color:"white" }}>
        <Count />
      </div>
    </div>
  );
}

export default App;
