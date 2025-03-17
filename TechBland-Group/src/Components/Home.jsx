import React from 'react'
import { useState, useEffect } from 'react'
import phoneImg from "../images/slider-img.png"
import secondImg from "../images/about-img.png"
import thirdImg from '../images/security.png'
import Button from "./Button.jsx"

function Home() {
    
    const images = [phoneImg, secondImg, thirdImg]; // Image array
    const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  return (
    <div>
      <section className="home">
        <h1>TechBland-Group</h1>
      </section>

    <div className='homeContainer'>
        <h1 className='textHome'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Quaerat asperiores veritatis nesciunt obcaecati exercitationem dolorum quam cum velit ratione, esse enim excepturi distinctio odio corrupti odit ullam ipsum omnis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, culpa. Esse laudantium autem magni laborum itaque. Consequatur necessitatibus amet voluptas consequuntur perferendis eveniet vero dignissimos, natus provident quas soluta neque! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt sequi, itaque harum aspernatur rem cumque quasi fugiat quam fuga esse perferendis odit qui maiores sed cupiditate at ratione maxime debitis!Veniam.</h1>
      <div className="carousel">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`carousel-img ${index === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>
      </div>
      <div className='buttonHome'>
        <Button>Read More</Button>
      </div>
    </div>
  );
}

export default Home;