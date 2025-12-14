import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div id="contact" className="container-xxl contact py-5">
      <div className="container">
        <div className="section-title text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '500px'}}>
          <p className="fs-5 fw-medium fst-italic text-primary">Contact Us</p>
          <h1 className="display-6">Visit Us</h1>
        </div>
        <div className="row justify-content-center wow fadeInUp" data-wow-delay="0.1s">
          <div className="col-lg-10">
            <div className="row g-5 mb-5">
              <div className="col-md-4 text-center wow fadeInUp" data-wow-delay="0.3s">
                <div className="btn-square mx-auto mb-3">
                  <i className="fa fa-map-marker-alt fa-2x text-white"></i>
                </div>
                <p className="mb-2 fw-bold">Address</p>
                <p className="mb-0">123 Main Street, Cityville, State 12345</p>
              </div>
              <div className="col-md-4 text-center wow fadeInUp" data-wow-delay="0.4s">
                <div className="btn-square mx-auto mb-3">
                  <i className="fa fa-phone fa-2x text-white"></i>
                </div>
                <p className="mb-2 fw-bold">Phone</p>
                <p className="mb-0">(555) 123-4567</p>
              </div>
              <div className="col-md-4 text-center wow fadeInUp" data-wow-delay="0.5s">
                <div className="btn-square mx-auto mb-3">
                  <i className="fa fa-envelope fa-2x text-white"></i>
                </div>
                <p className="mb-2 fw-bold">Email</p>
                <p className="mb-0">info@brewhaven.com</p>
              </div>
            </div>
            
            <div className="row g-5">
              <div className="col-lg-6">
                <h4 className="mb-4">Business Hours</h4>
                <p className="mb-2"><strong>Monday – Friday:</strong> 7AM – 8PM</p>
                <p className="mb-2"><strong>Saturday – Sunday:</strong> 8AM – 9PM</p>
              </div>
              <div className="col-lg-6">
                <h4 className="mb-4">Send us a Message</h4>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary rounded-pill py-3 px-5">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

