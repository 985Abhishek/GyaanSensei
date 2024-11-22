// src/components/Signup.jsx
import React from 'react';
import useStore from '../store/AuthStore';
import './Signup.css';

const Signup = () => {
    const { signupData, setSignupData } = useStore();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignupData({ [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3000/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(signupData),
        });

        const result = await response.json();
        alert(result.message || 'Signup successful!');
    };

    return (
        <div className="container">
                     <img src="https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/182011/optimized_large_thumb_stage.jpg" alt="Logo" className="logo" />
            <form onSubmit={handleSubmit}>
                <h2>Signup</h2>
                <input type="text" name="name" placeholder="Name" required value={signupData.name} onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" required value={signupData.email} onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" required value={signupData.password} onChange={handleChange} />
                <input type="text" name="mobile" placeholder="Mobile Number" required value={signupData.mobile} onChange={handleChange} />
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <a href="/login">Login here</a></p>
        </div>
    );
};

export default Signup;