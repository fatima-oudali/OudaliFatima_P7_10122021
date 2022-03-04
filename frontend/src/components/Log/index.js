import React, { useState } from "react";
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

const Log = () => {
    const [signInModal, setSignInModal] = useState(true); //connection
    const [signUpModal, setSignUpModal] = useState(false); //inscription

    const handaleModals = (e) => {
        if(e.target.id === "inscription") {
            setSignInModal(false);
            setSignUpModal(true);
        } else if (e.target.id === "connection") {
            setSignUpModal(false);
            setSignInModal(true);
        }
    }

    return (
        <div className="connection-form">
            <div className="form-container">
                <ul>
                    <li onClick={handaleModals} id="connection" className={signInModal ? "active-btn" : null}> Se connecter </li>
                    <li onClick={handaleModals} id="inscription" className={signUpModal ? "active-btn" : null} > S'inscrire </li>
                </ul>
                {signUpModal && <SignUpForm />} 
                {signInModal && <SignInForm />} 
            </div>
        </div>
    );
};

export default Log;