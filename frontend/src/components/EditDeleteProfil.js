import React from 'react';

const EditDeleteProfil = () => {
    const user = () => {
        window.location.href = "/user"
    }

    return <li onClick={user}><img src="./img/icons/user.svg" alt="user" /></li>
};

export default EditDeleteProfil;