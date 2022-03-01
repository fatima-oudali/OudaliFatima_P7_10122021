import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteCard from "./DeleteCard";
import CardComment from "../Comment/CardComment";
import { dateParser } from "../Utils";

const Card = ({ post, isAdmin }) => {
  const [loadPost, setLoadPost] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);
  const [textUpdate, setTextUpdate] = useState(null);
  const [showComments, setShowComments] = useState(false);
  const [userParams, setUserParams] = useState([]);
  const [postPicture, setPostPicture] = useState(null);
  const [text, setText] = useState([]);
  const [file, setFile] = useState("");

  const userId = JSON.parse(localStorage.userId);

  const updateItem = () => {
    if (textUpdate) {
      const data = new FormData();
      data.append("user_id", userId);
      data.append("contenu", textUpdate);
      if (file) data.append("file", file);
    
      axios({
        method: "put",
        url: `${process.env.REACT_APP_API_URL}api/post/${post.id}`,
        withCredentials: true,
        data,
      })
        .then(() => window.location.reload())
        .catch((err) => console.log(err));
    }
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

    axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}api/post`,
    })
      .then((res) => {
        setLoadPost(res.data);
      })
      .catch((err) => console.log(err));

    axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}api/comment`,
    })
      .then((res) => {
        setText(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <li className="card-container" key={post.id}>
      <>
        <div className="card-left">
          <img src="./img/profil.png" alt="poster-pic" />
        </div>
        <div className="card-right">
          <div className="card-header">
            <div>
              {userParams.map((user) => {
                const pseudo = user.pseudo;
                if (user.id === post.user_id) return <h3>{pseudo}</h3>;
              })}
            </div>

            <span>{dateParser(post.date)}</span>
          </div>
          {isUpdated === false && <p>{post.contenu}</p>}
          {post.image ? (
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
           {/* {post.image ? (
                    <img src={post.image} alt="card-pic" className="card-pic" />
                  ) : null} */}

          {isAdmin || userId === post.user_id ? (
            <div className="button-container">
              <div onClick={() => setIsUpdated(!isUpdated)}>
                <img src="./img/icons/edit.svg" alt="edit" />
              </div>
              <DeleteCard post={post} />
            </div>
          ) : null}
          <div className="card-footer">
            <div className="comment-icon">
              <img
                onClick={() => setShowComments(!showComments)}
                src="./img/icons/message1.svg"
                alt="comment"
              />
            </div>
          </div>
          {showComments && <CardComment post={post} />}
        </div>
      </>
    </li>
  );
};

export default Card;
