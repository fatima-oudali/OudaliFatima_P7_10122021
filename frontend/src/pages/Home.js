import Navbar from "../components/Navbar";
import NewPostForm from "../components/Post/NewPostForm";
import Thread from "../components/Thread";

const Home = () => {
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
};

export default Home;
