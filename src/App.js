import { Routes, Route, NavLink } from "react-router-dom";
import Logo from "./components/Header/heder";
import User from "./components/redux/User";
import Time from "./components/Header/headerTimer";

import "./components/Video";
import "./App.css";

import Insurance from "./components/Insurance/insurance";
import Services from "./components/Service/service";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import { Wrapper } from "./components/Wrapper/Wrapper";

const App = () => {
  return (
    <Wrapper>
      <header className="container">
        <Logo style={{ marginLeft: "15px" }} width="100px" height="60px" />
        <div className="Main_tabs">
          <NavLink className="Main_tabs_links" to="/Home">
            Home
          </NavLink>
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
          <NavLink className="Main_tabs_links" to="/Login">
            <button style={{ marginRight: "20px" }}> Sign In </button>
          </NavLink>
        </div>
      </header>

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Service" element={<Services />} />
        <Route path="/Insurance" element={<Insurance />} />
        <Route path="/UserInfo" element={<User />} />
      </Routes>
    </Wrapper>
  );
};

export default App;
