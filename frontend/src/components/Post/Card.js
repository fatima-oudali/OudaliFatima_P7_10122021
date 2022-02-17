import React, { useState, useEffect } from "react";
import axios from "axios";
import Profil from "../User/Profil";
import DeleteCard from "./DeleteCard";
import CardComment from "../Comment/CardComment";
import LikeButton from "./LikeButton";

const Card = ({ post }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadPost, setLoadPost] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);
  const [textUpdate, setTextUpdate] = useState(null);
  const [showComments, setShowComments] = useState(false);

  const userId = JSON.parse(localStorage.userId);

  const updateItem = () => {
    if (textUpdate) {
      axios({
        method: "put",
        url: `${process.env.REACT_APP_API_URL}api/post/${post.id}`,
        data: { contenu: textUpdate },
      })
        .then(() => window.location.reload())
        .catch((err) => console.log(err));
    }
    setIsUpdated(false);
  };

  useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}api/post`,
    })
      .then((res) => {
        setLoadPost(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <li className="card-container" key={post.id}>
      {isLoading ? (
        <i className="fas fa-spinner fa-spin"></i>
      ) : (
        <>
          <div className="card-left"></div>
          <div className="card-right">
            <div className="card-header">
              <Profil post={post} />
              <span>{post.date}</span>
            </div>
            {isUpdated === false && <p>{post.contenu}</p>}
            {isUpdated ? (
              <div className="update-post">
                <textarea
                  defaultValue={post.contenu}
                  onChange={(e) => setTextUpdate(e.target.value)}
                />
                <div className="button-container">
                  <button className="btn" onClick={updateItem}>
                    Valider modification
                  </button>
                </div>
              </div>
            ) : null}
            {/* {post.img ? (
              <img src={post.img} alt="card-pic" className="card-pic" />
            ) : null} */}

            {userId === post.user_id ? (
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
                <span></span>
              </div>
              <LikeButton post={post} />
            </div>
            {showComments && <CardComment post={post} />}
          </div>
        </>
      )}
    </li>
  );
};

export default Card;
