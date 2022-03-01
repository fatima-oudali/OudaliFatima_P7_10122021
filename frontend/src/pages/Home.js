import Navbar from "../components/Navbar";
import NewPostForm from "../components/Post/NewPostForm";
import Thread from "../components/Thread";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(0);

  const userId = JSON.parse(localStorage.userId);
  
  useEffect(() => {
    axios
    .get("http://localhost:3000/api/auth/" + `${userId}`)
    .then((res) => {
      setIsAdmin(res.data[0].isAdmin);
    })
  }, [])

  useEffect(() => {
    if (!localStorage.userId) {
      navigate("/profil", { replace: true });
    }
  }, [navigate]);

  if (localStorage.userId) {
    return (
      <div>
        <Navbar />
        <div className="home">
          <div className="home-header">
            <NewPostForm />
          </div>
          <Thread isAdmin={isAdmin} />
        </div>
      </div>
    );
  }

  return null;
};

export default Home;