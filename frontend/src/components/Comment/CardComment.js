import React, { useState, useEffect } from "react";
import axios from "axios";

const CardComment = ({ post }) => {
  const [text, setText] = useState([]);
  const [userParams, setUserParams] = useState([]);

  const userId = JSON.parse(localStorage.userId);

  const handleComment = (e) => {
    e.preventDefault();

    if(text) {
        
    }
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
      url: `${process.env.REACT_APP_API_URL}api/comment`,
    })
      .then((res) => {
        setText(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="comments-container">
      {text.map((comment) => {
        return (
          post.id === comment.post_id && (
            <div
              className={
                comment.user_id === userId
                  ? "comment-container client"
                  : "comment-container"
              }
              key={comment.id}
            >
              <div className="left-part">
                <img src="./img/profil.png" alt="commenter-pic" />
              </div>
              <div className="right-part">
                <div className="comment-header">
                  <div className="pseudo">
                    {userParams.map((user) => {
                      if (
                        user.id === comment.user_id &&
                        comment.post_id === post.id
                      )
                        return <h3>{user.pseudo}</h3>;
                    })}
                  </div>
                  <span>{comment.date}</span>
                </div>
                <p>{comment.contenu}</p>
              </div>
            </div>
          )
        );
      })}
      <form action="" onSubmit={handleComment} className="comment-form">
          <input type="text" name="text" onChange={(e) => setText(e.target.value)} value={setText} placeholder="Laisser un commentaire" /> 
          <input type="submit" value="Envoyer" />
          <br/>
      </form>
    </div>
  );
};

export default CardComment;
