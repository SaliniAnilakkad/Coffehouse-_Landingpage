import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      text: "Best latte in town! The atmosphere is so cozy – perfect for working.",
      author: "Sarah J.",
      image: `${process.env.PUBLIC_URL}/img/testimonial-1.jpg`
    },
    {
      text: "Their cold brew is incredibly smooth. I come here every morning!",
      author: "Mike T.",
      image: `${process.env.PUBLIC_URL}/img/testimonial-2.jpg`
    },
    {
      text: "Ethical sourcing and amazing flavors. Brew Haven feels like home.",
      author: "Emily R.",
      image: `${process.env.PUBLIC_URL}/img/testimonial-3.jpg`
    },
    {
      text: "Great pastries and friendly staff. Highly recommend the mocha!",
      author: "Alex K.",
      image: `${process.env.PUBLIC_URL}/img/testimonial-1.jpg`
    },
    {
      text: "A hidden gem for coffee lovers. The pour-over changed my life.",
      author: "Jordan L.",
      image: `${process.env.PUBLIC_URL}/img/testimonial-2.jpg`
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div id="testimonials" className="container-fluid testimonial py-5 my-5">
      <div className="container py-5">
        <div className="section-title text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '500px'}}>
          <p className="fs-5 fw-medium fst-italic text-white">Testimonial</p>
          <h1 className="display-6 text-white">What Our Customers Say</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="testimonial-item p-4 p-lg-5">
              <p className="mb-4 fs-5">"{testimonials[activeIndex].text}"</p>
              <div className="d-flex align-items-center justify-content-center">
                <img 
                  className="img-fluid flex-shrink-0" 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].author}
                />
                <div className="text-start ms-3">
                  <h5 className="mb-0">{testimonials[activeIndex].author}</h5>
                  <span className="text-primary">Customer</span>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`btn btn-sm mx-1 ${activeIndex === index ? 'btn-dark' : 'btn-light'}`}
                  onClick={() => setActiveIndex(index)}
                  style={{
                    width: activeIndex === index ? '30px' : '15px',
                    height: '15px',
                    borderRadius: '15px',
                    padding: 0
                  }}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

