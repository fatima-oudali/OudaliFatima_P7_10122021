import axios from "axios";
import React, { useState } from "react";

const AddComment = ({ post }) => {
  const [contenu, setContenu] = useState("");
  const userId = JSON.parse(localStorage.userId);
  const postId = post.id;

  const handleComment = async (e) => {
    
    e.preventDefault();
    if (contenu) {

          await axios({
                method: "post",
                url: `${process.env.REACT_APP_API_URL}api/comment`,
                withCredentials: true,
                data: {
                    contenu,
                    user_id: userId,
                    post_id: postId
                },
            })
    } 
    setContenu("");
  };

  return (
    <form action=""  className="comment-form">
      <input
        type="text"
        name="contenu"
        onChange={(e) => {
          setContenu(e.target.value);
        }}
        value= {contenu}
        placeholder="Laisser un commentaire..."
      />
      <br />
      <input type="submit" value="Envoyer" onClick={handleComment}/>
    </form>
  );
};

export default AddComment;
