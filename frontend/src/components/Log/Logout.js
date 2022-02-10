import React from "react";

const Logout = () => {
    const logout = () => {
        localStorage.clear();
        window.location.href = "/profil"
    }

    return <li onClick={logout}><img src="./img/icons/logout.svg" alt="logout" /></li>

};

export default Logout;
