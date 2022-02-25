import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteComment from "./DeleteComment";

const EditComment = ({ comment }) => {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState("");
  const userId = JSON.parse(localStorage.userId);

  const handleEdit = (e) => {
    // e.preventDefault();

    if (text) {
      axios({
        method: "put",
        url: `${process.env.REACT_APP_API_URL}api/comment/${comment.id}`,
        data: { contenu: text },
      })
        // .then(() => window.location.reload())
        .catch((err) => console.log(err));
    }
  };

  // useEffect(() => {

    // axios({
    //   method: "get",
    //   url: `${process.env.REACT_APP_API_URL}api/auth`,
    // })
    //   .then((res) => setUserParams(res.data))
    //   .catch((err) => console.log(err));

      // axios({
      //   method: "get",
      //   url: `${process.env.REACT_APP_API_URL}api/comment`,
      // })
      //   .then((res) => setText(res.data))
      //   .catch((err) => console.log(err));

  // }, [setText]);

  return (
    <div className="edit-comment">
      {/* {edit === false && <p>{comment.contenu}</p>} */}
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
        <div className="btn">
          <span onClick={() => setEdit(!edit)}>
            <img src="./img/icons/edit.svg" alt="edit" />
          </span>
          <DeleteComment comment={comment} />
          
        </div>
      ) : null}

     
    </div>
  );
};

export default EditComment;
