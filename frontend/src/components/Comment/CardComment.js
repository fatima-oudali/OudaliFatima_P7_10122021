import React, { useState, useEffect } from "react";
import axios from "axios";

const CardComment = ({post}) => {
    const [text, setText] = useState([]);

    const userId = JSON.parse(localStorage.userId);

    const handleComment = () => {}
    

    useEffect(() => {
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
        <div className="comments-container">
           {Comment.map((comment) => {
               return (
                <div className= {comment.user_id === userId ? "comment-container client" : "comment-container"} key={comment.id}>

                </div>
               )
           })} 
        </div>
    );
};

export default CardComment;