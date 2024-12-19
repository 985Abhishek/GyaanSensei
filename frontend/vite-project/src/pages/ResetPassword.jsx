// src/components/ResetPassword.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import useStore from '../store/AuthStore';
import './ResetPassword.css';

const ResetPassword = () => {
    const { token } = useParams(); // Get the token from the URL parameters
    const { newPassword, setNewPassword } = useStore();

    const handleChange = (e) => {
        setNewPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3000/api/auth/reset-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ resetToken: token, newPassword }),
        });

        const result = await response.json();
        alert(result.message || 'Password reset successful!');
    };

    return (
        <div className="container">
            <img src="/logo.png" alt="Logo" className="logo" />
            <form onSubmit={handleSubmit}>
                <h2>Reset Password</h2>
                <input type="password" placeholder="Enter new password" required value={newPassword} onChange={handleChange} />
                <button type="submit">Reset Password</button>
            </form>
        </div>
    );
};

export default ResetPassword;