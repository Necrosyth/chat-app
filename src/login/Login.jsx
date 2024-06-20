import React from 'react';
import './login.css';

const LoginRegister = () => {
    return (
        <div className="container">
            <div className="form-container login-container">
                <form action="#">
                    <h1>Login</h1>
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button>Sign In</button>
                </form>
            </div>
            <div className="form-container register-container">
                <form action="#">
                    <h1>Create Account</h1>
                    <input type="text" placeholder="Username" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <input type="file" id="imageUpload" accept="image/*" />
                    <label htmlFor="imageUpload" className="upload-btn">Upload Image</label>
                    <button>Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default LoginRegister;
