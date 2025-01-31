import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
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
                
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder='Your Name' />
                    <input type="email" placeholder='Email Address' />
                    <input type="password" placeholder='Password' />
                </div>
                <button>Continue</button>
                <p className="loginsignup-login">
                    Already have an account? <span onClick={handleLoginClick}>Login</span>
                </p>
                <div className="loginsignup-agree">
                    <input type="checkbox" />
                    <p>By continuing, I agree to the terms of use & privacy policy</p>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;
