import React from 'react';

const DeleteProfil = () => {
    const user = () => {
        window.location.href = "/user"
    }

    return <li onClick={user}><img src="./img/icons/user.svg" alt="user" /></li>
};

export default DeleteProfil;