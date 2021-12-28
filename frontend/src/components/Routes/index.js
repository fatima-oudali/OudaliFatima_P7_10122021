import React from 'react';
import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom';
import Home from '../../pages/Home';
import Profil from '../../pages/Profil';
import Trending from '../../pages/Trending';
import About from '../../pages/About';
import NotFound from '../../pages/NotFound';

const index = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route  path="/" exact element={<Home/>} />
                <Route  path="/profil" exact element={<Profil/>} />
                <Route  path="/trending" exact element={<Trending/>} />
                <Route  path="/a-propos" exact element={<About/>} />
                <Route element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default index;