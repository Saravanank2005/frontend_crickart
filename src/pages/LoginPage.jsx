import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './CSS/LoginPage.css';

const LoginPage = () => {
    const navigate = useNavigate();

    const handleSignUpClick = () => {
        navigate('/signup');
    };

    const handleBackClick = () => {
        navigate('/');
    };

    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                {/* Back Icon */}
                <div className="back-icon" onClick={handleBackClick}>
                    <FontAwesomeIcon icon={faArrowLeft} size="lg" />
                </div>

                <h1>Login</h1>
                <div className="loginsignup-fields">
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                </div>
                <button>Login</button>
                <p className="loginsignup-login">
                    Don't have an account? <span onClick={handleSignUpClick}>Sign Up</span>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
