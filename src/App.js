// main app

import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {

  // <------- alert box
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }
  // ------>




  // <-------- set dark / light mode
  const [mode, setMode] = useState('secondary');

  const toggleMode = () => {
    if (mode === 'secondary') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert(" Dark mode has been enabled", "success ")
    }
    else {
      setMode('secondary');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light mode has been enabled", "success ")
    }
  }
  // --------->



  return (
    <>
      <Router>
        {/* use props */}
        <Navbar Title="TextDesign" About="About" mode={mode} toggleMode={toggleMode} />

        <Alert Alert={alert} />

        <div className="container my-4">

          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Try TextDesign - Word counter | character counter | uppercase to lowercase | lowercase to uppercase" mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;