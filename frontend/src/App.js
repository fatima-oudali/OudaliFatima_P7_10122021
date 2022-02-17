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

