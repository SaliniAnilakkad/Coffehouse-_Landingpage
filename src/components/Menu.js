import React, { useState } from 'react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('espresso');

  const menuCategories = {
    espresso: {
      name: 'Espresso Drinks',
      items: [
        { name: 'Espresso', description: 'Single shot of rich, intense coffee', price: '$3.50' },
        { name: 'Americano', description: 'Espresso with hot water for a bold, black coffee', price: '$4.00' },
        { name: 'Cappuccino', description: 'Equal parts espresso, steamed milk, and foam', price: '$4.50' },
        { name: 'Latte', description: 'Smooth espresso with steamed milk and light foam', price: '$5.00' },
        { name: 'Mocha', description: 'Espresso, chocolate, steamed milk, topped with whipped cream', price: '$5.50' }
      ]
    },
    specialty: {
      name: 'Specialty Coffees',
      items: [
        { name: 'Pour Over', description: 'Single-origin brew for nuanced flavors', price: '$5.00' },
        { name: 'Cold Brew', description: 'Smooth, refreshing iced coffee steeped overnight', price: '$4.50' },
        { name: 'Nitro Cold Brew', description: 'Creamy, cascading cold brew on tap', price: '$6.00' },
        { name: 'Affogato', description: 'Vanilla ice cream drowned in hot espresso', price: '$6.50' }
      ]
    },
    seasonal: {
      name: 'Seasonal & Flavored',
      items: [
        { name: 'Caramel Macchiato', description: 'Espresso with vanilla, caramel, and milk', price: '$5.50' },
        { name: 'Pumpkin Spice Latte', description: 'Classic fall favorite with warm spices (Seasonal)', price: '$6.00' },
        { name: 'Iced Vanilla Latte', description: 'Smooth espresso with vanilla and cold milk over ice', price: '$5.50' }
      ]
    }
  };

  const productImages = [
    `${process.env.PUBLIC_URL}/img/product-1.jpg`,
    `${process.env.PUBLIC_URL}/img/product-2.jpg`,
    `${process.env.PUBLIC_URL}/img/product-3.jpg`,
    `${process.env.PUBLIC_URL}/img/product-4.jpg`,
    `${process.env.PUBLIC_URL}/img/store-product-1.jpg`,
    `${process.env.PUBLIC_URL}/img/store-product-2.jpg`,
    `${process.env.PUBLIC_URL}/img/store-product-3.jpg`
  ];

  return (
    <div id="menu" className="container-fluid product py-5 mb-5" style={{marginTop: '24px'}}>
      <div className="container py-5">
        <div className="section-title text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '500px'}}>
          <p className="fs-5 fw-medium fst-italic text-primary">Our Menu</p>
          <h1 className="display-6">Handcrafted Beverages & Treats</h1>
        </div>

        {/* Category Tabs */}
        <div className="d-flex justify-content-center mb-5 flex-wrap">
          {Object.keys(menuCategories).map((key) => (
            <button
              key={key}
              className={`btn ${activeCategory === key ? 'btn-primary' : 'btn-outline-primary'} rounded-pill px-4 py-2 mx-2 mb-2`}
              onClick={() => setActiveCategory(key)}
            >
              {menuCategories[key].name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="row g-4">
          {menuCategories[activeCategory].items.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.1}s`}>
              <div className="store-item position-relative text-center">
                <img 
                  className="img-fluid" 
                  src={productImages[index % productImages.length]} 
                  alt={item.name}
                  style={{height: '250px', objectFit: 'cover', width: '100%'}}
                />
                <div className="p-4 bg-white">
                  <h4 className="mb-3 text-primary">{item.name}</h4>
                  <p className="mb-3">{item.description}</p>
                  <h4 className="text-primary">{item.price}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;

