
import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import { useState } from 'react'
import Alert from './components/Alert';



function App() {

  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)
  let showAlert = (message, type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);

    
  }
  const toggle = () =>{
    if (mode === 'dark'){
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Darkmode has been enabled', 'success')
      document.title = 'Nishant ka WhiteAppit '
    }else{
      setmode('dark')
      document.body.style.backgroundColor = '#8443c3'
      showAlert('Lightmode has been enabled', 'success')
      document.title = 'Nishant ka DarkApp'



    }
  }
  return (
    <>
      
        <Navbar title="Textutils" aboutText="About" mode={mode} togglemode={toggle}/>
        <Alert alert={alert}/>
        {/* <div className="container"> */}
        <TextForm  showAlert={showAlert} heading="You can type below" mode={mode}/>
        {/* <About/> */}
        
        {/* </div> */}
        
      
    </>
  )
}


export default App;
