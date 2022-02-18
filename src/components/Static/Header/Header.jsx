import React from 'react';
import { NavLink } from 'react-router-dom';
import AuthCtrl from './AuthCtrl';
import NavCtrl from './NavCtrl';
import UserCtrl from './UserCtrl';

export default function Header({ currentUser, logout }) {
  return (
    <header className="banner">
      <NavLink to={"/"} className="banner-title">
        Name Rater
      </NavLink>
        <img className="logo" src="/images/logo.png" alt="app logo" />
        <div className="flex-cont" style={{marginLeft: "2%", width:"20%", justifyContent:"space-around"}}>
          { currentUser ? 
          <UserCtrl currentUser={currentUser} logout={logout} />
          :
          <AuthCtrl />
          }
          <NavCtrl currentUser={currentUser} />
        </div>
    </header>
  )
}
