import React from 'react';
import Slideshow from './Slideshow';
import "../../stylesheets/slideshow.css";

export default function Home() {
  return (
    <div className="wrapper">
      <h2 style={{textAlign:"center"}}>Welcome to the Name Rater!</h2>

      <Slideshow />

      
    </div>
  )
}
