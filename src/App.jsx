import React, { useState } from "react";
import "./App.css";

const Color = ({ color, setSelectedColor }) => {
  return <div className={color} onClick={() => setSelectedColor(color)}></div>;
};

function App() {
  const [count, setCount] = useState(0);
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <>
      <div id="colors-list">
        <Color color="red" setSelectedColor={setSelectedColor} />
        <Color color="blue" setSelectedColor={setSelectedColor} />
        <Color color="green" setSelectedColor={setSelectedColor} />
      </div>
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
    </>
  );
}

export default App;
