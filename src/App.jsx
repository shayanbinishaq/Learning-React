import { useState, useRef } from "react";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import About from "./Components/About";
import Alert from "./Components/Alert";
import ProfileCard from "./ProfileCard";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import shayanImg from "./assets/shayan.png";

function App() {
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

  const [mode, setMode] = useState("light"); //tells if dark mode is enabled or not
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "White";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  const modeLabel = mode === "light" ? "Enable Dark Mode" : "Enable Light Mode";
  return (
    <>
      <Navbar
        title="text utils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
        modeLabel={modeLabel}
      />
      <div className="alert">
        <Alert Alert={alert} setAlert={setalert} />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <Form showAlert={showAlert} heading="Fill the form" mode={mode} />
            </div>
          }
        />
        <Route path="/about" element={<About mode={mode} />} />
        <Route
          path="/contact"
          element={
            <div className="container">
              <ProfileCard
                name="Shayan bin ishaq"
                title="Computer Science Student"
                handle="shayan"
                status="Online"
                contactText="Contact Me"
                avatarUrl={shayanImg}
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log("Contact clicked")}
                behindGlowColor="rgba(125, 190, 255, 0.67)"
                behindGlowEnabled
                innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
              />
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
