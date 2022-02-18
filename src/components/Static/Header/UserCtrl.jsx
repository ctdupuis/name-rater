import React from 'react';
import { NavLink } from 'react-router-dom';

export default function UserCtrl({ currentUser, logout }) {
  return (
      <>
        <NavLink to={"/profile"} className="profile-link">
            {currentUser.username}
        </NavLink>

        <button onClick={() => logout()} className="auth-btn login">Log Out</button>
    </>
  )
}
