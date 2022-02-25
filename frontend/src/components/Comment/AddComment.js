import axios from "axios";
import React, { useEffect, useState } from "react";

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
            // .then(() => window.location.reload())
            // .catch((err) => console.log(err));
    }
  };

  // const getComment = () => {
  //   axios({
  //     method: "get",
  //     url: `${process.env.REACT_APP_API_URL}api/comment`,
  //   })
  //     .then((res) => {
  //       setContenu(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }

   


  return (
    // <form action="" onSubmit={handleComment} className="comment-form">
    <form action="" className="comment-form">
      <input
        type="text"
        name="contenu"
        onChange={(e) => {
          setContenu(e.target.value);
          console.log(contenu)
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
