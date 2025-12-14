import React from 'react';

const AboutUs = () => {
  const stats = [
    { number: "25+", label: "Years of Roasting Excellence" },
    { number: "100%", label: "Ethically Sourced Beans" },
    { number: "50+", label: "Specialty Drinks" },
    { number: "1000+", label: "Happy Customers" }
  ];

  return (
    <div id="about" className="container-xxl pt-5" style={{paddingBottom: '24px'}}>
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6 text-end">
                <img 
                  className="img-fluid bg-white w-100 mb-3 wow fadeIn" 
                  data-wow-delay="0.1s" 
                  src={`${process.env.PUBLIC_URL}/img/about-1.jpg`} 
                  alt="Coffee roasting"
                />
                <img 
                  className="img-fluid bg-white w-50 wow fadeIn" 
                  data-wow-delay="0.2s" 
                  src={`${process.env.PUBLIC_URL}/img/about-3.jpg`} 
                  alt="Coffee beans"
                />
              </div>
              <div className="col-6">
                <img 
                  className="img-fluid bg-white w-50 mb-3 wow fadeIn" 
                  data-wow-delay="0.3s" 
                  src={`${process.env.PUBLIC_URL}/img/about-4.jpg`} 
                  alt="Coffee cup"
                />
                <img 
                  className="img-fluid bg-white w-100 wow fadeIn" 
                  data-wow-delay="0.4s" 
                  src={`${process.env.PUBLIC_URL}/img/about-2.jpg`} 
                  alt="Coffee shop"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <div className="section-title">
              <p className="fs-5 fw-medium fst-italic text-primary">About Us</p>
              <h1 className="display-6">About Brew Haven</h1>
              <p className="fs-4 text-primary mb-3">Our Passion for Coffee Since 1995</p>
            </div>
            <p className="mb-4">
              At Brew Haven Coffeehouse, we're more than just a place to grab a cup – we're a community hub dedicated to the art of coffee. Founded with a love for rich, bold flavors, we source our beans ethically from sustainable farms in Ethiopia, Colombia, and Indonesia. Every roast is crafted in small batches to ensure peak freshness and taste. Whether you're here for a quick espresso or to linger over a pour-over, our cozy atmosphere and friendly baristas make every visit special.
            </p>
            
            <div className="row g-4 mt-4">
              {stats.map((stat, index) => (
                <div key={index} className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 btn-lg-square bg-primary text-white rounded-circle me-3">
                      <i className="fa fa-check"></i>
                    </div>
                    <div>
                      <h3 className="text-primary mb-0">{stat.number}</h3>
                      <span className="text-dark">{stat.label}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

