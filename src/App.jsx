import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import About from "./Components/About";

let name = "Shayan";
function App() {
  const [count, setCount] = useState(0);
 
  const [mode, setMode] = useState('light'); //tells if dark mode is enabled or not
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor='#212529';
    } 
    else {
      setMode('light');
      document.body.style.backgroundColor='White';
    }
  };
  const modeLabel = mode === 'light' ? "Enable Dark Mode" : "Enable Light Mode";
  return (
    <>
      <Navbar title="My App" aboutText="About" mode={mode} toggleMode={toggleMode} modeLabel={modeLabel}/>
      <div className="container">
        <Form heading="Fill the form" mode={mode}/>
      </div>
      <About mode={mode}/>
    </>
  );
}

export default App;
