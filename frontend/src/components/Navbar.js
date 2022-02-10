import React from "react";
import { NavLink } from "react-router-dom";
//import GetOneUser from "./GetOneUser";
import Logout from "./Log/Logout";

//const pseudo = document.querySelector(".pseudo");
const storage = localStorage.pseudo;
//console.log(storage);
//pseudo.innerHTML= "";

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
