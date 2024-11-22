// src/components/Login.jsx
import React from 'react';
import useStore from '../store/AuthStore';
import './Login.css';

const Login = () => {
    const { loginData, setLoginData } = useStore();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
        });

        const result = await response.json();
        alert(result.message || 'Login successful!');
    };

    return (
        <div className="container">
            
            <img src="https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/182011/optimized_large_thumb_stage.jpg" alt="Logo" className="logo" />
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <input type="email" name="email" placeholder="Email" required value={loginData.email} onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" required value={loginData.password} onChange={handleChange} />
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <a href="/signup">Sign up here</a></p>
            <p><a href="/forgot-password">Forgot Password?</a></p> {/* Added link for Forgot Password */}
        </div>
    );
};

export default Login;