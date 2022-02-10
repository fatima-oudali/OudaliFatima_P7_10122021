import React, {useEffect, useState } from 'react';
import axios from "axios";

const Profil = ({user}) => {
    const [userParams, setUserParams] = useState([]);

    useEffect(() => {
        axios({
          method: "get",
          url: `${process.env.REACT_APP_API_URL}api/`,
        })
          .then((res) => {
              console.log(res);
            setUserParams(res.data);
          })
          .catch((err) => console.log(err));
      }, []);

   
    return (
        <div>
            {/* <h5>pseudo</h5> */}
            <h5>{user.pseudo}</h5>
        </div>
    );
};

export default Profil;