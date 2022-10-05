import { Routes, Route, NavLink } from "react-router-dom";
import Logo from "./components/Header/heder";
import User from "./components/Users/User";

import "./components/Video";
import "./App.css";
import { Wrapper } from "./Ui/Wrapper/Wrapper";

import Services from "./components/Service/service";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Insurance from "./components/Insurance/insurance";
import Cart from "./Ui/Cart/Cart";



const App = () => {
  return (
    <Wrapper>
      <header className="container">
        <Logo style={{ marginLeft: "15px" }} width="100px" height="60px" />
        <div className="Main_tabs">
          <NavLink className="Main_tabs_links" to="/Home">
            Home
          </NavLink>
          <NavLink className="Main_tabs_links" to="/About">
            About Us
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
          <NavLink className="Main_tabs_links" to="/Login">
            <button> Sign In </button>

          </NavLink>
          <NavLink className="Main_tabs_links" to="/Cart" >
            <Cart/> 
           </NavLink>
        </div>
      </header>

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Service" element={<Services />} />
        <Route path="/Insurance" element={<Insurance />} />
        <Route path="/UserInfo" element={<User />} />
        <Route path="/Cart" element={<Cart/>}/>
      </Routes>
    </Wrapper>
  );
};

export default App;
