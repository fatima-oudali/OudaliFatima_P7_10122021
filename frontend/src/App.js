//import React, { useEffect, useState } from "react";
//import { UidContext } from "./components/AppContext";
import React from "react";
import Routes from "./components/Routes";
import axios from "axios";

const App = () => {
  let token = localStorage.getItem("token");
  axios.defaults.headers.common.Authorization = "Bearer " + token;

  return (
    <div>
      <Routes />
    </div>
  );
};
export default App;

// const [uid, setUid] = useState(null);
// useEffect(() => {
//   const fetchToken = async () => {
//     await axios({
//       method: "get",
//       url: `${process.env.REACT_APP_API_URL}jwt`,
//       withCredentials: true,
//     })
//       .then((res) => {
//         setUid(res.data);
//       })
//       .catch((err) => console.log("No token"));
//   };
//   fetchToken();
// }, [uid]);

// return (

//   <UidContext.Provider value={uid}>
//     <Routes />
//   </UidContext.Provider>
// );
