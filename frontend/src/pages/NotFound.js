import React from 'react';

const NotFound = () => {

    const home = () => {
        window.location.href = "/"
    }
    return (
        <div className='container'>
            <h2>Oops! Page non trouvée.</h2>
            <h1>404</h1>
            <p>Nous ne trouvons pas la page que vous recherchez.</p>
            <button onClick={home}>Retour</button>
        </div>
    );
};

export default NotFound;