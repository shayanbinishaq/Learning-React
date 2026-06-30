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
  return (
    <>
      <Navbar title="My App" aboutText="About" />
      <div className="container">
        <Form heading="Fill the form"/>
      </div>
      <About/>
    </>
  );
}

export default App;
