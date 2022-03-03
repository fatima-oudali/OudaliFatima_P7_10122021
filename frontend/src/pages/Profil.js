import React from "react";
import Log from "../components/Log";

const Profil = () => {
  return (
    <div className="profil-page">
      <div className="log-container">
        <div className="img-container">
          <img src="./img/groupomania.png" alt="groupomania" />
        </div>
        <Log />
      </div>
    </div>
  );
};

export default Profil;
