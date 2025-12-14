import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`container-fluid bg-white fixed-top ${isScrolled ? 'shadow-sm' : ''}`} style={{zIndex: 1030, minHeight: '67.5px'}}>
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-2 py-lg-0" style={{minHeight: '67.5px'}}>
          <a href="#home" className="navbar-brand">
            <img className="img-fluid" src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="Brew Haven Coffeehouse Logo" />
          </a>
          <button 
            type="button" 
            className="navbar-toggler ms-auto me-0" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto">
              <a href="#home" className="nav-item nav-link active">Home</a>
              <a href="#about" className="nav-item nav-link">About</a>
              <a href="#menu" className="nav-item nav-link">Menu</a>
              <a href="#testimonials" className="nav-item nav-link">Testimonials</a>
              <a href="#blog" className="nav-item nav-link">Blog</a>
              <a href="#contact" className="nav-item nav-link">Contact</a>
            </div>
            <div className="border-start ps-4 d-none d-lg-block">
              <button type="button" className="btn btn-sm p-0"><i className="fa fa-search"></i></button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

