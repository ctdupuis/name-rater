import React, { useState } from 'react';
import "../../stylesheets/modal.css";
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Signup({ signup }) {
    const [userdata, setUserdata] = useState({ username: "", email: "", password: ""});

    const [type, setType] = useState("password");

    const navigate = useNavigate();

    const handleEyeToggle = () => {
        type === "password" ? setType("text") : setType("password")
    }

    const handleChange = event => {
        setUserdata({ ...userdata, [event.target.name]: event.target.value });
    }

    const handleClose = () => {
        navigate('/');
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        signup(userdata);
        navigate("/")
      }

    return (
        <>
        <div className="modal-wrapper">
            <div className="modal">
                <div className="modal-head">
                    <h3 style={{ marginRight:"1%", color:"var(--red1)"}}>Sign Up</h3>
                    <NavLink className="sesh-tab" to={'/login'}>
                        <h3>Log In</h3>
                    </NavLink>
                </div>

                <div className="modal-body">
                    <form onSubmit={handleSubmit} className="session-form">
                        <label>Email</label>
                        <input onChange={handleChange} type="email" name="email" />

                        <label>Username</label>
                        <input onChange={handleChange} type="text" name="username" />

                        <label>Password</label>
                        <input onChange={handleChange} type={type} name="password" />
                        {  
                            type === "password" ? 
                            <FaEyeSlash className="eye" onClick={handleEyeToggle}/>
                            :
                            <FaEye className="eye" onClick={handleEyeToggle}/>
                        }

                        <button className="sesh-sbt">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
        <div onClick={handleClose} className="modal-bg"></div>
        </>
    )
}
