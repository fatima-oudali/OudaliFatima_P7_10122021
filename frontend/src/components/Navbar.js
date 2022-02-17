import React from "react";
import { NavLink } from "react-router-dom";
import Logout from "./Log/Logout";

const storage = localStorage.pseudo;


const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <NavLink exact to="/">
            <div className="logo">
              <img src="./img/logo.png" alt="logo" />
              <h3>Groupomania</h3>
            </div>
          </NavLink>
        </div>
        <ul>
          <li></li>
          <li className="welcome">
            <NavLink exact to="/profil">
              <h5> Bienvenue {storage} </h5>
            </NavLink>
          </li>
          <Logout />
        </ul>
      </div>
    </nav>
  )
};

export default Navbar;
