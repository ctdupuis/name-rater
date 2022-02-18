import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AuthCtrl() {
  return (
    <>
        <NavLink className="signup auth-btn" to={"/signup"}>
            Sign Up
        </NavLink>
        <NavLink className="login auth-btn" to={"/login"}>
            Log In
        </NavLink>
    </>
  )
}
