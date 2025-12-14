import React, { useState, useEffect } from 'react';

const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      image: `${process.env.PUBLIC_URL}/img/carousel-1.jpg`,
      title: "Start Your Day Right with Our Signature Espresso",
      subtitle: "Welcome to",
      description: "Premium & Artisanal Coffee Roasts"
    },
    {
      image: `${process.env.PUBLIC_URL}/img/carousel-2.jpg`,
      title: "A Warm Space to Relax, Work, or Meet Friends",
      subtitle: "Welcome to",
      description: "Premium & Artisanal Coffee Roasts"
    },
    {
      image: `${process.env.PUBLIC_URL}/img/carousel-1.jpg`,
      title: "Handcrafted Lattes & Specialty Drinks",
      subtitle: "Welcome to",
      description: "Premium & Artisanal Coffee Roasts"
    },
    {
      image: `${process.env.PUBLIC_URL}/img/carousel-2.jpg`,
      title: "Ethically Sourced, Freshly Roasted",
      subtitle: "Welcome to",
      description: "Premium & Artisanal Coffee Roasts"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div id="home" className="container-fluid px-0 mb-5" style={{paddingTop: '67.5px'}}>
      <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
            >
              <img className="w-100" src={slide.image} alt={slide.title} />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7 text-center">
                      <p className="fs-4 text-white animated zoomIn fw-bold">
                        {slide.subtitle} <strong className="text-white">Brew Haven Coffeehouse</strong>
                      </p>
                      <h1 
                        className="display-1 mb-4 animated zoomIn"
                        style={{
                          color: (slide.title === "Start Your Day Right with Our Signature Espresso" || 
                                  slide.title === "A Warm Space to Relax, Work, or Meet Friends" || 
                                  slide.title === "Handcrafted Lattes & Specialty Drinks" ||
                                  slide.title === "Ethically Sourced, Freshly Roasted") 
                                  ? '#FFF8DC' : '#252C30'
                        }}
                      >
                        {slide.title}
                      </h1>
                      <p className="lead text-white mb-4 animated zoomIn">
                        Discover the rich aroma and bold flavors of expertly roasted coffee beans sourced from the finest farms around the world.
                      </p>
                      <div className="d-flex gap-3 justify-content-center">
                        <a href="#menu" className="btn btn-light rounded-pill py-3 px-5 animated zoomIn">
                          Explore Menu
                        </a>
                        <a href="#contact" className="btn btn-dark rounded-pill py-3 px-5 animated zoomIn">
                          Visit Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button 
          className="carousel-control-prev" 
          type="button" 
          onClick={goToPrevious}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button 
          className="carousel-control-next" 
          type="button" 
          onClick={goToNext}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HeroCarousel;

