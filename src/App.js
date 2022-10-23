import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [cmode, setMode] = useState('light');
  const [alert, setalert] = useState("");

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setalert(null)
    }, 1000);
  }

  const toggleMode = () => {
    if (cmode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#282828';
      showAlert("Changed To Dark Mode", "success")
      document.title = "TextUtils-DarkMode"
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Changed To Light Mode", "success")
      document.title = "TextUtils-LightMode"
    }
  }

  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" about="About Us" mode={cmode} toggleButton={toggleMode} />

      <div className="container">
        <Alert art={alert} />
        {/* <Routes> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/" element={ */}
        <Textform heading="Enter Text to Analyze " mode={cmode} Alert={showAlert} />
        {/* } /> */}
        {/* </Routes> */}


      </div>
      {/* </Router> */}
    </>
  );

}

export default App;
