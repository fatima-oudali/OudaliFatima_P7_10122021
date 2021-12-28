import React from 'react';
import { NavLink } from 'react-router-dom'; //Ce qui nous permet d'aller de page en page

const Navigation = () => {
    return (
        <div className="navigation" >
            <NavLink exact to='/' activeClassName="active" > Accueil </NavLink>
            <NavLink exact to='/a-propos'activeClassName="active"> A propos </NavLink>
        </div>
    );
};

export default Navigation;