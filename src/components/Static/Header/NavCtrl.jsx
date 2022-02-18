import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavCtrl({ currentUser }) {
  return (
    <nav className="nav">
        <NavLink to={"/"} className="nav-link">
            Names
        </NavLink>

        <NavLink to={"/"} className="nav-link">
            Contact
        </NavLink>

        { currentUser ? 
        <NavLink to={"/"} className="nav-link">
            Submit
        </NavLink>
        : null
        }
    </nav>
  )
}
