import React from "react";
import axios from "axios";

const DeleteComment = ({comment}) => {

    const handleDeleteComment = () => {
     
        axios({
          method: "DELETE",
          url: `${process.env.REACT_APP_API_URL}api/comment/${comment.id}`,
          withCredentials: true,
        })
          .then(() => window.location.reload())
          .catch((err) => console.log(err));
      };

    return (
        <span
      onClick={() => {
        if (window.confirm("Voulez-vous supprimer ce commentaire ?")) {
          handleDeleteComment();
        }
      }}
    >
        <img src="./img/icons/trash.svg" alt="trash" />
    </span>
    );
};

export default DeleteComment;

