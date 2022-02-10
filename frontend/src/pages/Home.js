import Navbar from "../components/Navbar";
import Thread from "../components/Thread";


const Home = () => {
    return (
        <>
        <Navbar/>
        <div className='home'>            
            <Thread/>
        </div>
        </>
    )
}

export default Home;