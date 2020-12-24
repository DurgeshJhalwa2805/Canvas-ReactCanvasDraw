import React, { useState } from 'react';
import CanvasDraw from 'react-canvas-draw';
import './App.css';
import { useRef } from 'react';

function App() {
const[currentcolor ,setCurrentcolor]=useState("#000000");
const firstCanvas = useRef(null)
const secondCanvas = useRef(null)
const handleCLick =()=>{
  const data=firstCanvas.current.getSaveData();
  console.log(data)
  secondCanvas.current.loadSaveData(data);
}
const clear=()=>{
firstCanvas.current.clear()
}
const undo=()=>{
  firstCanvas.current.undo()
}
  return (
    <div>
    <button className="red-color" onClick={()=>setCurrentcolor("red")}></button>
    <button className="green-color" onClick={()=>setCurrentcolor("green")}></button>
    <button className="blue-color" onClick={()=>setCurrentcolor("blue")}></button>
    <button className="yellow-color" onClick={()=>setCurrentcolor("yellow")}></button>
    
    <CanvasDraw 
      brushRadius={3}
      hideGrid={true}
      style={{border:'3px solid purple',alignContent:"center",display:"flex" }}
      ref={firstCanvas}
      canvasWidth={500}
      canvasHeight={500}
      brushColor={currentcolor}
      
    />
     <button className="btnStyle" onClick={handleCLick}>Save Drawing</button>
    <button className="btnStyle" onClick={clear}>Clear</button>
    <button className="btnStyle" onClick={undo}>Undo</button>
    <CanvasDraw 
    ref={secondCanvas}
      hideGrid={true}
      disabled={true}
      canvasWidth={500}
      canvasHeight={500}
      style={{border:'white 3px solid'}}
      
    />
    </div>
  );
}

export default App;
