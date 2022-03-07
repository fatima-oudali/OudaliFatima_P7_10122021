import React, { useEffect, useState } from "react";
import axios from "axios";


const EditComment = ({ comment}) => {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState("");
  const userId = JSON.parse(localStorage.userId);

  const handleEdit = (e) => {
    e.preventDefault();

    if (text) {
      axios({
        method: "put",
        url: `${process.env.REACT_APP_API_URL}api/comment/${comment.id}`,
        data: { contenu: text },
      })
        .catch((err) => console.log(err));
    }
    setEdit(false);
  };

  return (
    <div className="edit-comment">
 {edit ? (
        <form action="" onSubmit={handleEdit} className="edit-comment-form">
          <label htmlFor="text" onClick={() => setEdit(!edit)}>
            Editer
          </label>
          <br />
          <input
            type="text"
            name="text"
            onChange={(e) => setText(e.target.value)}
            defaultValue={comment.contenu}
          />
          <input type="submit" value="Valider modification" />
        </form>
      ) : null}
      {userId === comment.user_id ? (
          <span onClick={() => setEdit(!edit)}>
            <img src="./img/icons/edit.svg" alt="edit" />
          </span>
      ) : null}
    </div>
  );
};

export default EditComment;
