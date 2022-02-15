import React, {useEffect, useState } from 'react';
import axios from "axios";

const Profil = ({post}) => {
    const [userParams, setUserParams] = useState([]);
    
    useEffect(() => {
        axios({
          method: "get",
          url: `${process.env.REACT_APP_API_URL}api/auth`,
        })
          .then(res => setUserParams(res.data))
          .catch(err => console.log(err));
      }, []);

   
    return (
        <div>
            {userParams.map((user) => {
              const pseudo = user.pseudo;
              if (user.id === post.user_id) return <h3>{pseudo}</h3>;
            })}
        </div>
    );
};

export default Profil;