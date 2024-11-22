// src/components/ForgotPassword.jsx
import React from 'react';
import useStore from '../store/AuthStore';
import './ForgotPassword.css';

const ForgotPassword = () => {
    const { forgotPasswordEmail, setForgotPasswordEmail } = useStore();

    const handleChange = (e) => {
        setForgotPasswordEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3000/api/auth/forgot-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: forgotPasswordEmail }),
        });

        const result = await response.json();
        alert(result.message || 'Reset email sent!');
    };

    return (
        <div className="container">
                      <img src="https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/182011/optimized_large_thumb_stage.jpg" alt="Logo" className="logo" />
            <form onSubmit={handleSubmit}>
                <h2>Forgot Password</h2>
                <input type="email" placeholder="Enter your email" required value={forgotPasswordEmail} onChange={handleChange} />
                <button type="submit">Send Reset Link</button>
            </form>
            <p>Remembered your password? <a href="/login">Login here</a></p>
        </div>
    );
};

export default ForgotPassword;