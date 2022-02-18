import React from 'react';
import Slideshow from './Slideshow';
import "../../stylesheets/slideshow.css";
import "../../stylesheets/home.css"

export default function Home() {
  return (
    <div className="wrapper">
      <h2 style={{textAlign:"center", marginBottom:"1%"}}>Welcome to the Name Rater!</h2>

      <Slideshow />

      <div className="btn-cont">
        <button className="start">Get Started!</button>
      </div>
    </div>
  )
}
