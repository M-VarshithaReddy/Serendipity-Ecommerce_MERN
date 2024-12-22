import React, { useState } from 'react';
import './Login.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email });
        alert('Password reset instructions sent to your email!');
    };

    return (
        <div className="login-container">
            <h2 className="login-heading">FORGOT PASSWORD</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Enter your email"
                    />
                </div>
                <button type="submit" className="login-button">Submit</button>
            </form>
            <div className="login-footer">
                <a href="/login">Back to Login</a>
            </div>
        </div>
    );
};

export default ForgotPassword;
