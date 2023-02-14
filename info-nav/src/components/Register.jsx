import React, { useState } from "react";
import { Link } from "react-router-dom";
export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            paddingTop:'10srem',
            backgroundColor: "#010922",
            height: "100vh",
            
        }}>
        <div className="auth-form-container">
            <h2 style={{
                textAlign: "center",
                fontWeight:'700',
                color:'white'
            }}>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
        <div style={{margin:'0.2rem'}}>
            <div>
            <label htmlFor="name">Full name</label>
            </div>
            <div>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            </div>
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <div className="link-btn-login" type="submit">Register</div>
            </div>
        </form>
        {/* <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button> */}
        <div style={{
            color:'white',                                                                                                                                
            marginTop:"3rem",                                                                                                                             
            textAlign:'center'   
        }}>
            <Link to="/login">
                <span style={{
                    color:'white',
                    textDecoration:'none',
                    fontSize:'.8rem',
                    textAlign:'center'
                    }}>
                     Already have an account? LogIn here.
                    </span>
                </Link>
            </div>
        </div>
        </div>
    )
}
export default Register;