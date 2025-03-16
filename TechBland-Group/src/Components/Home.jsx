import React from 'react'
import { useState, useEffect } from 'react';

function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
  const rectangles = [1, 2, 3, 4, 5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % rectangles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [rectangles.length]);
    return (
    <div>
     <section className="home">
     <h1>TechBland-Group</h1>
     <div className="carousel">
       <div
         className="carousel-container"
         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
       >
         {rectangles.map((rect, index) => (
           <div className="rectangle" key={index}></div>
         ))}
       </div>
     </div>
   </section>
   </div>
    )
}

export default Home