import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      title: "The Art of Latte Art: Behind the Scenes",
      description: "Discover how our baristas create beautiful latte art and the techniques behind each design.",
      image: `${process.env.PUBLIC_URL}/img/article.jpg`
    },
    {
      title: "Our New Seasonal Roast: Ethiopian Single-Origin",
      description: "Learn about our latest single-origin coffee from Ethiopia and its unique flavor profile.",
      image: `${process.env.PUBLIC_URL}/img/about-1.jpg`
    },
    {
      title: "Coffee Pairing Tips for Fall Pastries",
      description: "Expert tips on pairing your favorite coffee with our seasonal pastries for the perfect flavor combination.",
      image: `${process.env.PUBLIC_URL}/img/about-2.jpg`
    }
  ];

  return (
    <div id="blog" className="container-xxl py-5">
      <div className="container">
        <div className="section-title text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '500px'}}>
          <p className="fs-5 fw-medium fst-italic text-primary">Brew Notes</p>
          <h1 className="display-6">Latest News & Updates</h1>
        </div>
        <div className="row g-4">
          {blogPosts.map((post, index) => (
            <div key={index} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.1}s`}>
              <div className="store-item position-relative">
                <img 
                  className="img-fluid w-100" 
                  src={post.image} 
                  alt={post.title}
                  style={{height: '250px', objectFit: 'cover'}}
                />
                <div className="p-4 bg-white">
                  <h4 className="mb-3">{post.title}</h4>
                  <p className="mb-3">{post.description}</p>
                  <a href="#" className="btn btn-primary rounded-pill py-2 px-4">
                    Read More <i className="fa fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

