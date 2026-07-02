import { useState,useRef} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import About from "./Components/About";
import Alert from "./Components/Alert";
import "./App.css";

let name = "Shayan";
function App() {
  const [count, setCount] = useState(0);
  const [alert, setalert] = useState(null);
  const alertTimeoutRef = useRef(null);
 const showAlert = (message, Type) => {
  setalert({ msg: message, Type });

  if (alertTimeoutRef.current) {
    clearTimeout(alertTimeoutRef.current);
  }

  alertTimeoutRef.current = setTimeout(() => {
    setalert(null);
  }, 2500);
};
 
  const [mode, setMode] = useState('light'); //tells if dark mode is enabled or not
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor='#212529';
      showAlert("Dark mode has been enabled", "success");
    } 
    else {
      setMode('light');
      document.body.style.backgroundColor='White';
      showAlert("Light mode has been enabled", "success");
    }
  };
  const modeLabel = mode === 'light' ? "Enable Dark Mode" : "Enable Light Mode";
  return (
    <>
      <Navbar title="My App" aboutText="About" mode={mode} toggleMode={toggleMode} modeLabel={modeLabel}/>
      <div className="container">
        <div className="alert">
          <Alert Alert={alert} setAlert={setalert} />
        </div>
        <Form showAlert={showAlert} heading="Fill the form" mode={mode}/>
      </div>
      <About mode={mode}/>
    </>
  );
}

export default App;
