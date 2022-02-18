import React, { useState, useEffect } from 'react';

export default function Slideshow() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === images.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => {};
    }, [index]);

    const images = ["kanto.png", "hoenn.png", "sinnoh.png", "unova.png"];

    const delay = 2500;

    return (
        <div className="slideshow">
            <div className="show-slider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
            {images.map((img, idx) => (
                <div className="slide" key={idx}>
                    <img src={`images/slideshow/${img}`} style={{width:"100%", height:"100%"}} />
                </div>
            ))}
            </div>
        </div>
    )
}
