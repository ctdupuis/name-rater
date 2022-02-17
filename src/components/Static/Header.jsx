import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header({ currentUser }) {
  return (
    <header className="banner">
      <NavLink to={"/"} className="banner-title">
        Name Rater
      </NavLink>
        <img className="logo" src="/images/logo.png" alt="app logo" />
        <div className="flex-cont" style={{marginLeft: "2%", width:"10%", justifyContent:"space-around"}}>
          <NavLink className="signup auth-btn" to={"/signup"}>
            Sign Up
          </NavLink>
          <NavLink className="login auth-btn" to={"/login"}>
            Log In
          </NavLink>
        </div>
    </header>
  )
}
