import "./App.css";
import Navbar from './component/Navbar';
import TextForm from "./component/TextForm";
import React, {useState} from "react";

function App() {
  const [mode, setMode] = useState('white');

  let modeChange = ()=>{
    if (mode === 'white') {
      setMode('black');
      document.body.style.backgroundColor = '#363270';
    }
    else{
      setMode('white');
      document.body.style.backgroundColor = 'white';
    }
  };
  let redColorHandler = ()=>{
    document.body.style.backgroundColor = 'red';
  };
  let blueColorHandler = ()=>{
    document.body.style.backgroundColor = 'blue';
  }
  let violetColorHandler  = ()=>{
    document.body.style.backgroundColor = 'violet';
  }
  return (
    <>
      <Navbar heading = "Text Utils" screenMode = {mode} toggleMode = {modeChange} redColorHandler ={redColorHandler} blueColorHandler ={blueColorHandler} violetColorHandler ={violetColorHandler}/>
      <TextForm heading="Enter Text Here" textArea="" pageModeChange = "darkMode" screenMode = {mode}/>
    </>
  );
}

export default App;
