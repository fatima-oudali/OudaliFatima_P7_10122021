import React from 'react';

const Home = () => {
    const home = () => {
        window.location.href = "/"
    }

    return <li onClick={home}><img src="./img/icons/home.svg" alt="home" /></li>
};

export default Home;