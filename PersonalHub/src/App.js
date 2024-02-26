import logo from './logo.svg';
import Navbar from './Navbar/Navbar';
import './App.css';
import Add_task from './Components/Add_task';
import View_tasks from './Components/View_task';
import React, {useState} from 'react';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <Add_task></Add_task>
      <View_tasks></View_tasks> */}

    </div>
  );
}

export default App;
