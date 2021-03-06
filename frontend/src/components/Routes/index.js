import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Profil from '../../pages/Profil';
import NotFound from '../../pages/NotFound';
import DeleteProfil from '../../pages/DeleteProfil';


const index = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route  path="/" exact element={<Home/>} />
                <Route  path="/profil" exact element={<Profil/>} />
                <Route  path="/user" exact element={<DeleteProfil/>} />
                <Route  path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default index;