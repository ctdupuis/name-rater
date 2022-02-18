import React, { useState } from 'react';
import "../../stylesheets/modal.css";
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Login({ login }) {
    const [userdata, setUserdata] = useState({ username: "", email: "", password: ""});

    const [type, setType] = useState("password");

    const navigate = useNavigate();

    const handleEyeToggle = () => {
        type === "password" ? setType("text") : setType("password")
    }

    const handleChange = event => {
        setUserdata({ ...userdata, [event.target.name]: event.target.value })
    }

    const handleClose = () => {
        navigate('/', { replace: true })
    }

    const handleSubmit = e => {
      e.preventDefault();
      login(userdata);
      navigate("/");
    }

    return (
        <>
        <div className="modal-wrapper">
            <div className="modal">
                <div className="modal-head">
                    <NavLink className="sesh-tab" to={'/signup'}>
                        <h3>Sign Up</h3>
                    </NavLink>
                    <h3 style={{ marginLeft:"1%", color:"var(--red1)"}}>Log In</h3>
                </div>

                <div className="modal-body">
                    <form className="session-form" onSubmit={handleSubmit}>
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

                        <button className="sesh-sbt">Log In</button>
                    </form>
                </div>
            </div>
        </div>
        <div onClick={handleClose} className="modal-bg"></div>
        </>
    )
}
