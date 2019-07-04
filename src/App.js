import React from 'react';
import logo from './logo.svg';
import './App.css';
import RAM from './RAM.js';
import Input from "./Input.js"
import RegisterFile from "./RegisterFile.js";
import "bootstrap";
import MyOutput from "./MyOutput.js";


function App() {
  return (
    <div >
        <Input /> 
        <RegisterFile RegVals={"1;2;3;4;5;6;7;8;9;10;11;12;13;14;15;16;"} />
        <RAM instCounter="100" used="3000" />
        <MyOutput />
    </div>

  );
}

export default App;
