import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import React,{useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=> {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode =()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#343a40';
      showAlert('Dark Mode Enabled','success');

      
      // setInterval(() => {
      //   document.title='TextUtil is Amazing';
      // }, 1000);

      // setInterval(() => {
      //   document.title='Install TextUtil now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light Mode Enabled','success');
    }
  }
  return (
    <>
      <Router>
      <Navbar title="Textutils" about="About Us" mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar/> */}

      <Alert alert={alert}/>
      <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/">
            <TextArea heading="Enter the text to analyse" showAlert={showAlert} mode={mode}/>
          </Route>
        </Switch>
        </div>

      </Router>
    </>
  );
}

export default App;
