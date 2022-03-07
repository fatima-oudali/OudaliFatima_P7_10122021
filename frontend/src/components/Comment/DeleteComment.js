import React from "react";
import axios from "axios";

const DeleteComment = ({ isAdmin, comment }) => {
  const userId = JSON.parse(localStorage.userId);

  const handleDeleteComment = () => {
    axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_API_URL}api/comment/${comment.id}`,
      withCredentials: true,
    }).catch((err) => console.log(err));
  };

  return (
    <div className="edit-comment">
      {isAdmin || userId === comment.user_id ? (
        <div
          onClick={() => {
            if (window.confirm("Voulez-vous supprimer ce commentaire ?")) {
              handleDeleteComment();
            }
          }}
        >
          <img src="./img/icons/trash.svg" alt="trash" />
        </div>
      ) : null}
    </div>
  );
};

export default DeleteComment;
