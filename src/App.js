import "./App.css";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
// import Alert from "./components/Alert";
import { useState } from "react";


function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  
  const showAlert = (message, type) =>{
    setAlert({
        msg: message,
        type: type  
      })
      setTimeout(() => {
        setAlert(null);
      }, 1000);
  }



  const toggleMode = () =>{ 
    if(mode === 'light' || mode === 'blue' || mode ==='dark'){
      setMode('green');    
      document.body.style.backgroundColor = '#041010';
      showAlert('Green Mode has been enabled', 'success');
      document.title = 'TextUtils - Green Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enabled', 'success');
      document.title = 'TextUtils - Light Mode';

    }
  }

  const toggle2Mode = () =>{ 
    if(mode === 'light' || mode === 'green' || mode==='dark'){
      setMode('blue');    
      document.body.style.backgroundColor = '#060b1a';
      showAlert('Blue Mode has been enabled', 'success');
      document.title = 'TextUtils - Blue Mode';

    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enabled', 'success');
      document.title = 'TextUtils - Light Mode';

    }
  }
  const toggle3Mode = () =>{ 
    if(mode === 'light' || mode === 'green' || mode === 'blue'){
      setMode('dark');    
      document.body.style.backgroundColor = 'black';
      showAlert('Dark Mode has been enabled', 'success');
      document.title = 'TextUtils - Dark Mode';

    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enabled', 'success');
      document.title = 'TextUtils - Light Mode';

    }
  }
  return (
    <>
      <Navbar title ='TextUtils' mode ={mode} toggleMode = {toggleMode} toggle2Mode ={toggle2Mode} toggle3Mode ={toggle3Mode}/>
      {/* <Alert alert ={alert}/> */}
        <div className="container my-3">
          <TextForms  heading='Enter the text to analyze below' mode = {mode}/>    
        </div>
    </>
  );
}

export default App;
