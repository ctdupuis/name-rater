import React from 'react';

export default function Header() {
  return (
    <header className="banner">
        <div className="banner-title">Name Rater</div>
        <img className="logo" src="/images/logo.png" alt="app logo" />
        <div className="flex-cont" style={{marginLeft: "2%", width:"10%", justifyContent:"space-around"}}>
          <button className="signup auth-btn">Sign Up</button>
          <button className="login auth-btn">Log In</button>
        </div>
    </header>
  )
}
