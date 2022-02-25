import React, { useState } from "react";
import axios from "axios";
import { timestampParser } from "../Utils";

const NewPostForm = () => {
  const [message, setMessage] = useState("");
  const [postPicture, setPostPicture] = useState(null);
  const [file, setFile] = useState("");
  const userPseudo = localStorage.pseudo;
  const userId = JSON.parse(localStorage.userId);

  const handlePost = async () => {
    if (message || postPicture) {
      const data = new FormData();
      data.append("user_id", userId);
      data.append("contenu", message);
      if (file) data.append("file", file)

      await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}api/post`,
        withCredentials: true,
        data,
      })
        .then(() => window.location.reload())
        .catch((err) => console.log(err));
    }
    alert("Veuillez entrer un message");
  };

  const handlePicture = (e) => {
    setPostPicture(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
  };

  const cancelPost = () => {
    setMessage("");
    setPostPicture("");
    setFile("");
  };

  return (
    <div className="post-container">
      {/* <NavLink exact to="/profil">
        <div className="user-info">
          <img src="./img/profil.png" alt="user-pic" />
        </div>
      </NavLink> */}
      <div className="post-form">
        <textarea
          name="message"
          id="message"
          placeholder={"Qoui de neuf, " + userPseudo + "?"}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        {message || postPicture ? (
          <li className="card-container">
            <div className="card-left">
              <img src="./img/profil.png" alt="user-pic" />
            </div>
            <div className="card-right">
              <div className="card-header">
                <div className="pseudo">
                  <h3>{userPseudo}</h3>
                </div>
                <span>{timestampParser(Date.now())}</span>
              </div>
              <div className="content">
                <p>{message}</p>
                <img src={postPicture} alt="" />
              </div>
            </div>
          </li>
        ) : null}
        <div className="footer-form">
          <div className="icon">
            <img src="./img/icons/picture.svg" alt="img" />
            <input
              type="file"
              id="file-upload"
              name="file"
              accept=".jpg, .jpeg, .png"
              onChange={(e) => handlePicture(e)}
            />
          </div>
          <div className="btn-send">
            {message || postPicture ? (
              <button className="cancel" onClick={cancelPost}>
                Annuler message
              </button>
            ) : null}

            <button className="send" onClick={handlePost}>
              Envoyer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPostForm;
