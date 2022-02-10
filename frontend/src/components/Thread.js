import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Post/Card";

const Thread = () => {
  const [loadPost, setLoadPost] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}api/post`,
    }).then((res) => setLoadPost(res.data))
    // }).then((res) => console.log(res.data));
    .catch((err) => console.log(err))
  }, []);

  return (
    <div className="thread-container">
      <ul>
        {loadPost.map((post) => {
          return <Card post={post} key={post.id} />;
        // return <h1>coucou</h1>
        })}
      </ul>
    </div>
  );
};

export default Thread;
