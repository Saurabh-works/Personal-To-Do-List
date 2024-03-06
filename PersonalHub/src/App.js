import logo from './logo.svg';
import Navbar from './Navbar/Navbar';
import './App.css';
import Add_task from './Components/Add_task';
import View_tasks from './Components/View_task';
import React, {useState} from 'react';
import Login from './Navbar/Login';
import Footer from './Navbar/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Footer></Footer>
    </div>
  );
}

export default App;
