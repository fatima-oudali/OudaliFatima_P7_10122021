import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";

const DeleteProfil = () => {
  const navigate = useNavigate();
  const userId = JSON.parse(localStorage.userId);
  

  useEffect(() => {
    if (!localStorage.userId) {
      navigate("/profil", { replace: true });
    }
  }, [navigate]);

  const handleDelete = () => {
    axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_API_URL}api/auth/${userId}`,
      withCredentials: true,
    })
      .then(() => {
        window.location = "/";
        localStorage.clear();
      })
      .catch((err) => console.log(err));
  };

  if (localStorage.userId) {
    return (
      <di>
        <Navbar />
        <div className="profil-page">
          <div className="profil-container">
            <h1>Profil de {localStorage.pseudo}</h1>
            <div className="update-container">
              <img src="./img/profil.png" alt="user-pic" />
              <button
                onClick={() => {
                  if (
                    window.confirm(
                      "Voulez-vous vraiment supprimer votre profil ?"
                    )
                  ) {
                    handleDelete();
                  }
                }}
              >
                Supprimer profil
              </button>
            </div>
          </div>
        </div>
      </di>
    );
  }
};

export default DeleteProfil;
