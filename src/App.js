import { Routes, Route, NavLink } from "react-router-dom";
import Logo from "./components/Header/heder";
import User from "./components/redux/User";
import Time from "./components/Header/headerTimer";
import Video from "./components/Video";

import "./components/Video";
import "./App.css";

import Insurance from "./components/Insurance/insurance";
import Services from "./components/Service/service";

const App = () => {
  return (
    <div className="container-block">
      <div className="footer-box">
        <header className="container">
          <Logo />
          <div className="Main_tabs">
            <NavLink className="Main_tabs_links" to="/Insurance">
              Insurance
            </NavLink>
            <NavLink className="Main_tabs_links" to="/Service">
              Services
            </NavLink>
            <NavLink className="Main_tabs_links" to="/UserInfo">
              User Info
            </NavLink>
          </div>

          <Time />
          <div className="Main_Login">
            <input className="Main_Login_Input" placeholder="Login" />
            <input className="Main_Login_Input" placeholder="Password" />
          </div>
        </header>
      </div>

      <Routes>
        <Route path="/Service" element={<Services />} />
        <Route path="/Insurance" element={<Insurance />} />
        <Route path="/UserInfo" element={<User />} />
      </Routes>
      <Video />
    </div>
  );
};

export default App;
