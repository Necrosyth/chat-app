import React from 'react';
import { auth } from '../lib/firebase';
import './login.css';
import { toast, ToastContainer } from 'react-toastify';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const handleLogin = e => {
        e.preventDefault();
        
        toast.success("Login Successful");
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formEntries = Object.fromEntries(formData.entries());
        const { username, email, password } = formEntries; 
    console.log(

        username,password,email
    );
        try {
            await createUserWithEmailAndPassword(auth 
                ,email,password
            
            )
            toast.success("Registered successfully")
        }
     catch(err){    
        console.error(err)
        toast.error(err)
     }

    
    }

    return (
        <div className="container">
            <ToastContainer />
            <div className="form-container login-container">
                <form onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="password" name="password" placeholder="Password" required />
                    <button type="submit">Sign In</button>
                </form>
            </div>
            <div className="separator"></div>
            <div className="form-container register-container">
                <form onSubmit={handleRegister}>
                    <h1>Create Account</h1>
                    <input type="text" name="username" placeholder="Username" required />
                    <input type="text" name="email" placeholder="Email" required />
                    <input type="password" name="password" placeholder="Password" required />
                    <input type="file" id="imageUpload" name="image" accept="image/*" />
                    <label htmlFor="imageUpload" className="upload-btn">Upload Image</label>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
