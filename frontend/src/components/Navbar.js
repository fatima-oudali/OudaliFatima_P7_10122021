import React from "react";
import { NavLink } from "react-router-dom";



const Navbar = () => {
  const storage = localStorage.pseudo;
  
  const home = () => {
    window.location.href = "/";
  };
  const user = () => {
    window.location.href = "/user";
  };
  const logout = () => {
    localStorage.clear();
    window.location.href = "/profil"
}

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
          {window.location.pathname === "/user" ? (
            <li onClick={home}>
              <img src="./img/icons/home.svg" alt="home" />
            </li>
          ) : (
            <li onClick={user}>
              <img src="./img/icons/user.svg" alt="user" />
            </li>
          )}
          <li onClick={logout}><img src="./img/icons/logout.svg" alt="logout" /></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
