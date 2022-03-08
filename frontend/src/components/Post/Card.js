import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteCard from "./DeleteCard";
import CardComment from "../Comment/CardComment";
import { dateParser } from "../Utils";

const Card = ({post, isAdmin }) => {
  const [isUpdated, setIsUpdated] = useState(false);
  const [textUpdate, setTextUpdate] = useState(null);
  const [showComments, setShowComments] = useState(false);
  const [userParams, setUserParams] = useState([]);
  const [postPicture, setPostPicture] = useState(null);
  const [file, setFile] = useState("");
  
  const userId = JSON.parse(localStorage.userId);

  const updateItem = () => {

    const data = new FormData();
    data.append("user_id", userId);
    if (textUpdate) data.append("contenu", textUpdate);
  
    if (file) {
      data.append("file", file);
  } 
  
    axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL}api/post/${post.id}`,
      withCredentials: true,
      data,
    })
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  };

  const handlePicture = (e) => {
    setPostPicture(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}api/auth`,
    })
      .then((res) => setUserParams(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <li className="card-container" key={post.id}>
          <div className="card-left">
          <img src="./img/profil.png" alt="poster-pic" />
        </div>
        <div className="card-right">
          <div className="card-header">
            {userParams.map((user) => {
              const pseudo = user.pseudo;
              if (user.id === post.user_id) return <h3>{pseudo}</h3>;
            })}
            <span>{dateParser(post.date)}</span>
          </div>
          {isUpdated === false && <p>{post.contenu}</p>}
          {post.image && isUpdated === false ? (
            <img src={post.image} alt="card-pic" className="card-pic" />
          ) : null}
          {isUpdated ? (
            <div className="update-post">
              <textarea
                defaultValue={post.contenu}
                onChange={(e) => setTextUpdate(e.target.value)}
              />
              <div className="button-container">
                <div className="icon icon-img">
                  <img src="./img/icons/picture.svg" alt="img" />
                  <label htmlFor="file-upload">.</label>
                  <input
                    type="file"
                    id="file-upload"
                    name="file"
                    accept=".jpg, .jpeg, .png"
                    onChange={(e) => handlePicture(e)}
                  />
                </div>
                <button className="btn" onClick={updateItem}>
                  Valider modification
                </button>
              </div>
            </div>
          ) : null}
            <div className="button-container">
          {userId === post.user_id ? (
            <div onClick={() => setIsUpdated(!isUpdated)}>
                <img src="./img/icons/edit.svg" alt="edit" />
              </div>
              ) : null}
          {isAdmin || userId === post.user_id ? (
              <DeleteCard post={post} isAdmin={isAdmin}/>
              ) : null}
            </div>
          <div className="card-footer">
            <img
              onClick={() => setShowComments(!showComments)}
              src="./img/icons/message1.svg"
              alt="comment"
            />
          </div>
          {showComments && <CardComment post={post} isAdmin={isAdmin} />}
        </div>
  
    </li>
  );
};

export default Card;
