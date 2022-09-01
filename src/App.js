import { Routes, Route, NavLink } from "react-router-dom";
import Logo from "./components/Header/heder";

import Video from "./components/Video";

import "./components/Video";
import "./App.css";

import { useEffect, useState } from "react";
import Insurance from "./components/Insurance/insurance";
import Services from "./components/Service/service";

const App = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const myTimer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, [time]);

    return () => {
      clearTimeout(myTimer);
    };
  }, [time]);
  return (
    <div className="container-block">
      <div className="footer-box">
        <header className="container">
          <Logo />
          <div>
            <NavLink to="/Insurance">Insurance</NavLink>
            <NavLink to="/Service">Services</NavLink>
          </div>

          <div className="home-time">{time}</div>
          <div>
            <input className="login" placeholder="Login" />
            <input className="password" placeholder="Password" />
          </div>
        </header>
      </div>

      <Routes>
        <Route path="/Service" element={<Services />} />
        <Route path="/Insurance" element={<Insurance />} />
      </Routes>
      <Video />
    </div>
  );
};

export default App;
