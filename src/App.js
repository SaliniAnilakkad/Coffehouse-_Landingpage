import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import AboutUs from './components/AboutUs';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Spinner from './components/Spinner';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize WOW.js and other libraries
    if (window.WOW) {
      new window.WOW().init();
    }
    
    // Hide spinner after page loads
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Spinner loading={loading} />
      <Navbar />
      <HeroCarousel />
      <AboutUs />
      <Menu />
      <Testimonials />
      <Blog />
      <Newsletter />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;

