import React, { useState, useEffect } from "react";
import axios from "axios";
import Profil from "../User/Profil";

const Card = ({ post }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadPost, setLoadPost] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);
  const [textUpdate, setTextUpdate] = useState(null);

  const userId = localStorage.userId;

  const updateItem = async () => {};

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
        {isUpdated && (
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
        )}
        {post.img && <img src={post.img} alt="card-pic" className="card-pic" />}

        {/* {userId === post.id && (
          <div className="button-container">
            console.log(post.id);
            <div onClick={() => setIsUpdated(true)}>
            <img src="./img/icons/edit.svg" alt="edit"/>
            <p>123456789</p>
            </div>
          </div>
        )}  */}
        
        {userId === post.id && (

        <div className="button-container">
          <div onClick={() => setIsUpdated(!isUpdated)}>
            <img src="./img/icons/edit.svg" alt="edit"/>
          </div>
        </div>
        )}

        <div className="card-footer"></div>
      </div>
      </>
      )}
    </li>
  );
};

export default Card;
