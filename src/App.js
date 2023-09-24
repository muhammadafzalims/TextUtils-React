
import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Textarea from './component/Textarea';
import Alert from './component/Alert';
import About from './component/About';
import React from "react";
import { 
  Routes,
  BrowserRouter as Router,
  Route
} from "react-router-dom"


function App() {

  const[mode, setMode] = useState('light')
  const[alert, setAlert] = useState(null)

    const showAlert = (message, type)=>{
      setAlert({
        msg:message,
        type: type
      })
    }
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='black';
      showAlert("darkmode has been enabled", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("lightmode has been enabled", "success")
    }
  }





  return (
   <>
   <Router>
      <Navbar title="TextUtils" about="About us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
    
      <div className="container my-3">

      <Routes>
        <Route path="/" element={ 
              <Textarea heading="TextUtils-word counter,caracter counter, remove extra spaces" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>
          } />
        <Route path="about" element={ <About mode={mode}/> } />
       
      </Routes>
         
      </div>
      </Router>



  
   
      </>
  );
}

export default App;
