// Carousel.js
import React from 'react';
import Medicine1 from './medicine1.jpg';
import Medicine2 from './medicine2.jpg';
import Medicine3 from './medicine3.jpg';

const Carousel = () => {
  return (
    <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Medicine1} alt="Featured Medicine 1" className="d-block w-100" height="500" />
        </div>
        <div className="carousel-item">
          <img src={Medicine2} alt="Featured Medicine 2" className="d-block w-100" height="500" />
        </div>
        <div className="carousel-item">
          <img src={Medicine3} alt="Featured Medicine 3" className="d-block w-100" height="500" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
