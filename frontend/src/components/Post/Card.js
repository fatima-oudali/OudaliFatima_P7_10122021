import React, { useState, useEffect } from "react";
import axios from "axios";
import Profil from "../User/Profil";


const Card = ({ post }) => {
  const [loadPost, setLoadPost] = useState([]);

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

  return (
    <li className="card-container" key={post.id}>
      {/* <h2>Test</h2> */}
        <Profil/>
        <p>{post.contenu}</p>
        <img src={post.img} alt=''/>
      <></>
      <div className="card-left">
      
        {/* <img src={post.img} alt=''/> */}
      </div>
    </li>
  );
};

export default Card;
