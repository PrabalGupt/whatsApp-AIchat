import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Icon from './Icon'
const Auth = () => {
    const [isSignUp, setisSignUp] = useState(true);
    const switchMode = () => {
        setisSignUp((isSignUp) => !isSignUp);
    }
    const googleSignIn = () => {
        window.location.href = 'http://localhost:5000/auth/google';
    };
    return (
        <div>
            <div className="gradient1" ></div>
            <div className="gradient2" ></div>
            <div className="gradient3" ></div>
            <div className='auth-container'>
                <div className='auth-frame'>
                    <h1 className="signup-welcome">{isSignUp ? 'Welcome Back!' : 'Create account'}</h1>
                    <p className="signup-text">Please enter your details to {isSignUp ? 'login' : 'register'}</p>
                    <div className='form-container'>
                        <p className='form-element'>Email address</p>
                        <input className="form-element-input" type="email" id="email" name="Email" placeholder='Enter Email' /><br />
                        <p className='form-element'>Password</p>
                        <input className="form-element-input" type="text" id="password" name="Password" placeholder='Enter Password' /><br />
                        {!isSignUp && (
                            <>
                                <p className='form-element'>Confirm Password</p>
                                <input className="form-element-input" type="password" id="confirmPassword" name="confirmPassword" placeholder='Re-enter Password' /><br />
                            </>
                        )}

                    </div>
                    {isSignUp && <p className='forgot-password'>Forgot Password?<Link className='white'> Reset it?</Link></p>}
                    <Link className="login-button" to="/auth">{isSignUp ? 'Login' : 'Register'}</Link>
                    <div className="or-container">
                        <span className="or-line"></span>
                        <span className="white">OR</span>
                        <span className="or-line"></span>
                    </div>
                    <button className="google-login" onClick={googleSignIn}>
                        <Icon />Sign in with Google
                    </button>
                </div>
                {isSignUp ?
                    <p className='auth-redirect'>Don't have an account? <Link onClick={switchMode} className='white'>Register Now!</Link></p>
                    : <p className='auth-redirect'>Already have an account? <Link onClick={switchMode} className='white'>Login</Link></p>
                }
            </div>
        </div>
    )
}

export default Auth;