import React from "react";
import { NavLink } from "react-router-dom";
import Home from "./Home";
import DeleteProfil from "./DeleteProfil";
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
              <h1>Groupomania</h1>
            </div>
          </NavLink>
        </div>
        <ul>
          <li className="welcome">
              <h4> Bienvenue {storage} </h4>
          </li>
          {(window.location.pathname) === "/user" ? (<Home />): (<DeleteProfil /> )}
          <Logout />
        </ul>
      </div>
    </nav>
  )
};

export default Navbar;
