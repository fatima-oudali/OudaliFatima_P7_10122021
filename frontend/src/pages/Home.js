import Navbar from "../components/Navbar";
import NewPostForm from "../components/Post/NewPostForm";
import Thread from "../components/Thread";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();

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
          <Thread />
        </div>
      </div>
    );
  }

  return null;
};

export default Home;