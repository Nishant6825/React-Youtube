
import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react'
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import New from './components/New';




function App() {

  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)
  
  let showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }

  const toggle = () => {
    if (mode === 'dark') {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Darkmode has been enabled', 'success')
      document.title = 'White Mode'
    } else {
      setmode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlert('Lightmode has been enabled', 'success')
      document.title = 'Dark Mode'
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Textutils"  mode={mode} togglemode={toggle} />
        <Alert alert={alert} />
        
        < div className="container">
          <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="You can type below" mode={mode} />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;
