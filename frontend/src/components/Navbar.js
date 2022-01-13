import React, { useContext } from "react";
import { NavLink } from "react-router-dom";


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
              <h5>Bienvenue 'valeur dynamique'</h5>
            </NavLink>
          </li>
          Logo logout
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
