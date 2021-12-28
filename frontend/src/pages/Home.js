import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Home = () => {
    return (
        <div className='home'>
            <Navigation />
            <Logo />
            <h1>Accueil</h1>
        </div>
    )
}

export default Home;