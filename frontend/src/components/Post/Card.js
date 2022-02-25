import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteCard from "./DeleteCard";
import LikeButton from "./LikeButton";
import CardComment from "../Comment/CardComment";
import { dateParser } from "../Utils";


const Card = ({ post }) => {
  const [loadPost, setLoadPost] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);
  const [textUpdate, setTextUpdate] = useState(null);
  const [showComments, setShowComments] = useState(false);
  const [userParams, setUserParams] = useState([]);
  const [text, setText] = useState([]);

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
      url: `${process.env.REACT_APP_API_URL}api/auth`,
    })
      .then(res => setUserParams(res.data))
      .catch(err => console.log(err));


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
          <img
                src="./img/profil.png"
                alt="poster-pic"
              />
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
            {post.image ? (
              <img src={post.image} alt="card-pic" className="card-pic" />
            ) : null}

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
                {/* <span>{setText.length}</span> */}
              </div>
              {/* <LikeButton post={post} /> */}
            </div>
            {showComments && <CardComment post={post} />}
          </div>
        </>

    </li>
  );
};

export default Card;
