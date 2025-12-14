import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing! We'll send updates to ${email}`);
    setEmail('');
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="section-title mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
              <h1 className="display-6 mb-3">Stay Brewed In</h1>
              <p className="fs-5 mb-4">
                Subscribe for exclusive offers, new roasts, and coffee tips.
              </p>
              <form onSubmit={handleSubmit} className="position-relative">
                <input
                  className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                  type="email"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button 
                  type="submit" 
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

