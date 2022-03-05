import axios from "axios";
import React from "react";

const DeleteCard = ({post}) => {
  const deleteQuote = () => {
    axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_API_URL}api/post/${post.id}`,
      withCredentials: true,
    })
      .then(() =>window.location.reload())
      .catch((err) => console.log(err));
    }
    
    return (
      <div
      onClick={() => {
        if (window.confirm("Voulez-vous supprimer cet article ?")) {
          deleteQuote();
        }
      }}
    >
        <img src="./img/icons/trash.svg" alt="trash" />
    </div>
  );
};

export default DeleteCard;
