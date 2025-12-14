# Brew Haven Coffeehouse - React Web App

A modern React.js web application for Brew Haven Coffeehouse, featuring premium coffee roasts and artisanal beverages.

## Features

- **Hero Carousel**: Beautiful image carousel with call-to-action buttons
- **About Us**: Company history, mission, and statistics
- **Menu Section**: Interactive menu with categories (Espresso, Specialty, Seasonal)
- **Testimonials**: Customer reviews carousel
- **Blog Section**: Latest news and coffee tips
- **Newsletter**: Email subscription form
- **Contact**: Contact form with business hours and location
- **Responsive Design**: Mobile-friendly Bootstrap layout

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
├── public/
│   ├── index.html
│   └── img/          # Images folder
│   └── lib/          # External libraries (WOW.js, Owl Carousel, etc.)
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── HeroCarousel.js
│   │   ├── AboutUs.js
│   │   ├── Menu.js
│   │   ├── Testimonials.js
│   │   ├── Blog.js
│   │   ├── Newsletter.js
│   │   ├── Contact.js
│   │   ├── Footer.js
│   │   ├── BackToTop.js
│   │   └── Spinner.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── css/
│   └── style.css     # Main stylesheet
└── package.json
```

## Technologies Used

- React 18.2.0
- Bootstrap 5.2.3
- Font Awesome Icons
- WOW.js (for animations)
- Owl Carousel (for carousels)

## License

This project is private and proprietary.

