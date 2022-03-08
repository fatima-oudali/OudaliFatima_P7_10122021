import axios from "axios";
import React from "react";

const DeleteCard = ({post, isAdmin}) => {
  const userId = JSON.parse(localStorage.userId);

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
      <div className="button-container">
        <span
        onClick={() => {
          if (window.confirm("Voulez-vous supprimer cet article ?")) {
            deleteQuote();
          }
        }}
        >
        <img src="./img/icons/trash.svg" alt="trash" />
    </span>
        
    </div>
  );
};

export default DeleteCard;
