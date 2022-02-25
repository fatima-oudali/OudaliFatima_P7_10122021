import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const UpdateProfil = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.userId) {
      navigate("/profil", { replace: true });
    }
  }, [navigate]);
  if (localStorage.userId) {
    return (
      <di>
        <Navbar />
        <div className="profil-page">
          <div className="profil-container">
            <h1>Profil de {localStorage.pseudo}</h1>
            <div className="update-container">
                    <img src="./img/profil.png" alt="user-pic" />
                    <button>Supprimer profil</button>
            </div>
          </div>
        </div>
      </di>
    );
  }
};

export default UpdateProfil;
