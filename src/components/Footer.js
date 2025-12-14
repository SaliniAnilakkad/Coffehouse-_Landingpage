import React from 'react';

const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-dark footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-primary mb-4">Brew Haven Coffeehouse</h4>
              <p className="mb-2"><i className="fa fa-map-marker-alt text-primary me-3"></i>123 Main Street, Cityville, State 12345</p>
              <p className="mb-2"><i className="fa fa-phone-alt text-primary me-3"></i>(555) 123-4567</p>
              <p className="mb-2"><i className="fa fa-envelope text-primary me-3"></i>info@brewhaven.com</p>
              <div className="d-flex pt-3">
                <a className="btn btn-square btn-primary rounded-circle me-2" href="#"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-square btn-primary rounded-circle me-2" href="#"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-square btn-primary rounded-circle me-2" href="#"><i className="fab fa-youtube"></i></a>
                <a className="btn btn-square btn-primary rounded-circle me-2" href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-primary mb-4">Quick Links</h4>
              <a className="btn btn-link" href="#home">Home</a>
              <a className="btn btn-link" href="#about">About</a>
              <a className="btn btn-link" href="#menu">Menu</a>
              <a className="btn btn-link" href="#contact">Contact</a>
              <a className="btn btn-link" href="#">Privacy Policy</a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-primary mb-4">Business Hours</h4>
              <p className="mb-1">Monday - Friday</p>
              <h6 className="text-light">7:00 am - 8:00 pm</h6>
              <p className="mb-1">Saturday - Sunday</p>
              <h6 className="text-light">8:00 am - 9:00 pm</h6>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-primary mb-4">Newsletter</h4>
              <p>Stay updated with our latest offers and new roasts.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a className="fw-medium" href="#">Brew Haven Coffeehouse</a>, All Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              Designed with <i className="fa fa-heart text-danger"></i> for coffee lovers
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

