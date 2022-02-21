import axios from "axios";
import React, { useState } from "react";

const AddComment = ({post}) => {
    const [contenu, setContenu] = useState("");
    const userId = JSON.parse(localStorage.userId);
    const postId =post.id; 

    const handleComment = (e) => {
        console.log(post.id)
      console.log(e)
      e.preventDefault();
      if (contenu) {
          axios({
              method: "post",
              url: `${process.env.REACT_APP_API_URL}api/comment`,
              withCredentials: true,
              data: {
                  contenu,
                  user_id: userId,
                  post_id : postId
        },
      })
        .then((res) => {
          console.log(res.data);
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <form action="" onSubmit={handleComment} className="comment-form">
      <input
        type="text"
        name="contenu"
        onChange={(e) => {e.preventDefault(); setContenu(e.target.value);}}
        value={contenu}
        placeholder="Laisser un commentaire..."
      />
      <br />
      <input type="submit" value="Envoyer" />
    </form>
  );
};

export default AddComment;
