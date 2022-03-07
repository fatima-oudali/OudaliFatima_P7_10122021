import React, { useEffect, useState } from "react";
import axios from "axios";
import AddComment from "./AddComment";
import EditComment from "./EditComment";
import { dateParser } from "../Utils";
import DeleteComment from "./DeleteComment";

const CardComment = ({ post, isAdmin }) => {
  const [userParams, setUserParams] = useState([]);
  const [comment, setComment] = useState([]);

  const userId = JSON.parse(localStorage.userId);
  
  useEffect(() => {

    axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}api/auth`,
    })
      .then((res) => setUserParams(res.data))
      .catch((err) => console.log(err));

      axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}api/comment`,
      })
        .then((res) => setComment(res.data))
        .catch((err) => console.log(err));

  }, [comment]);

  return (
    <div className="comments-container">
      {comment.map((text) => {
        if (post.id === text.post_id)
          return (
            <div
              className={
                text.user_id === userId
                  ? "comment-container client"
                  : "comment-container"
              }
              key={text.id}
            >
              <div className="left-part">
                <img src="./img/profil.png" alt="commenter-pic" />
              </div>
              <div className="right-part">
                <div className="comment-header">
                  <div className="pseudo">
                    {userParams.map((user) => {
                      const pseudo = user.pseudo;
                      if (user.id === text.user_id) return <h3>{pseudo}</h3>;
                    })}
                  </div>
                  <span>{dateParser(text.date)}</span>
                  
                </div>
                <p>{text.contenu}</p>
                <div className="btn">
                <EditComment comment={text} isAdmin={isAdmin}/>
                <DeleteComment comment={text} isAdmin={isAdmin}/>
                </div>
                  
              </div>
            </div>
          );
        })}
      <AddComment post={post} />

    </div>
        );
};

export default CardComment;
